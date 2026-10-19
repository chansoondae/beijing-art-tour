import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { researchDate, type Exhibition } from '../data/exhibitions';

export function ExhibitionDetail({ exhibition: a }: { exhibition: Exhibition }) {
  return <>
    <div className="exhibition-detail-top">
      <div className="detail-artwork">
        {a.img ? <img src={`/images/image${a.img}.png`} alt={`${a.title} 전시 포스터 · 제공 일정 문서에서 추출`} /> : <div className="sky-study" aria-label="하늘과 빛을 표현한 추상 그래픽, 실제 작품 사진 아님"><span>SKY / LIGHT / TIME</span><div /><small>작품 사진이 아닌 감상용 그래픽</small></div>}
        <span className="detail-image-credit">{a.img ? 'POSTER FROM YOUR ITINERARY' : 'A STUDY IN COLOR · GRAPHIC'}</span>
      </div>
      <div className="detail-introduction">
        <span className="eyebrow">{a.place}</span>
        <span className="detail-genre">{a.genre}</span>
        <h2 id="exhibition-dialog-title">{a.artist}</h2>
        <h3>{a.title}</h3>
        <p className="detail-original-title">{a.originalTitle}</p>
        <p className="detail-date"><Clock3 size={14}/>{a.date}</p>
        <span className="status">{a.status}</span>
        <p className="detail-headline">{a.headline}</p>
        <div className="detail-overview">{a.overview.map(p => <p key={p}>{p}</p>)}</div>
      </div>
    </div>
    <div className="detail-reading">
      <section className="detail-background"><span className="eyebrow">BEHIND THE EXHIBITION</span><h4>알고 보면 더 깊어지는 이야기</h4><p>{a.background}</p></section>
      <section><div className="detail-section-title"><span className="eyebrow">WHAT TO LOOK FOR</span><h4>놓치지 말고 볼 장면들</h4></div><div className="detail-highlights">{a.highlights.map((h, i) => <div className="detail-highlight" key={h.title}><span>0{i + 1}</span><div><h5>{h.title}</h5><p>{h.text}</p></div></div>)}</div></section>
      <section className="detail-looking"><span className="eyebrow">YOUR WAY OF SEEING</span><h4>이렇게 바라보세요</h4><ul>{a.looking.map(p => <li key={p}>{p}</li>)}</ul></section>
      <aside className="detail-question"><span className="eyebrow">A QUESTION TO TAKE WITH YOU</span><p>{a.question}</p><small>함께 나누는 감상 질문 · 사이트의 제안</small></aside>
      <section><div className="detail-section-title"><span className="eyebrow"><MapPin size={12}/> PLAN YOUR VISIT</span><h4>우리 일정과 연결하기</h4></div><dl className="detail-visit">{a.visit.map(v => <div key={v.label}><dt>{v.label}</dt><dd>{v.value}</dd></div>)}</dl><p className="detail-ticket">{a.price}<span>여행 상품 포함 여부는 별도 최종 안내를 확인해 주세요.</span></p></section>
      <section className="detail-sources"><div className="detail-section-title"><span className="eyebrow">SOURCES & NOTES</span><h4>자료를 더 읽고 싶다면</h4></div><p>{a.verification}</p><div className="detail-source-links">{a.sources.map(s => <div key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}<ArrowUpRight size={13}/><span className="sr-only">새 창에서 열기</span></a>{s.note && <small>{s.note}</small>}</div>)}</div><small className="detail-checked">조사일 {researchDate} · 공식 소개를 한국어로 요약했습니다. 감상 질문과 관람 제안은 사이트의 편집 내용입니다.</small></section>
    </div>
  </>;
}
