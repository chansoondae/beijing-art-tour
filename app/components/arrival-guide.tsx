const hotelFields = [
  ['숙소 영문명 · Hotel name', 'Howard Johnson Junhe Hot Springs Resort Beijing'],
  ['숙소 중문명', '北京君和豪生酒店'],
  ['지역 · Province / City / District', 'Beijing / Beijing / Shunyi District · 北京市 / 北京市 / 顺义区'],
  ['상세 주소 · Address in China', '北京市顺义区李魏路宣庄户段8号院86号楼'],
  ['영문 주소 · 참고용', 'Building 86, No. 8 Courtyard, Xuanzhuanghu Section, Liwei Road, Shunyi District, Beijing, China'],
  ['호텔 전화 · Hotel telephone', '+86 10 5259 7066'],
];

export function ArrivalGuide() {
  return <section className="arrival-guide" id="arrival-guide" aria-labelledby="arrival-heading">
    <div className="arrival-heading">
      <div><span className="eyebrow">BEFORE YOU ARRIVE</span><h3 id="arrival-heading">중국 입국신고서, 미리 준비해요.</h3><p>현재 숙소인 하워드 존슨 준허 핫 스프링스 리조트 베이징 기준으로 정리했습니다.</p></div>
      <a className="button dark" href="https://s.nia.gov.cn/ArrivalCardFillingPC/" target="_blank" rel="noopener noreferrer">공식 입국신고서 작성 ↗</a>
    </div>
    <ol className="arrival-steps">
      <li><strong>여권과 예약 내역 준비</strong><p>여권, 왕복 전자항공권, 숙소 예약 내역을 준비합니다. 영문 성명·생년월일·국적·여권번호는 여권과 동일하게 입력하세요.</p></li>
      <li><strong>공식 사이트에서 작성</strong><p>국가이민관리국(NIA) 사이트 또는 ‘NIA 12367’ 앱, 위챗·알리페이 미니프로그램에서 작성할 수 있습니다. 공식 작성 서비스는 무료입니다.</p></li>
      <li><strong>제출 내용 확인</strong><p>여권번호·날짜·항공편·숙소를 다시 확인하고 제출합니다. 완료 화면과 확인 정보는 휴대전화에 저장해 두세요. 사전 작성이 어려우면 도착 후 현장 기기나 종이 입국카드를 이용할 수 있습니다.</p></li>
    </ol>
    <div className="arrival-columns">
      <div><h4>이번 여행의 입력 참고</h4><dl className="arrival-fields">
        <div><dt>방문 목적</dt><dd>관광 · Tourism / Sightseeing</dd></div>
        <div><dt>입국 예정일 / 출국 예정일</dt><dd>2026-10-29 / 2026-11-01</dd></div>
        <div><dt>입국 도시·공항</dt><dd>Beijing · Beijing Capital International Airport (PEK)<br/>北京 · 北京首都国际机场</dd></div>
        <div><dt>숙박 기간</dt><dd>2026-10-29 체크인 → 2026-11-01 체크아웃 · 3박</dd></div>
        <div><dt>도착편 / 귀국편 번호</dt><dd>전자항공권에 적힌 실제 편명을 입력하세요. ‘CA’는 항공사 코드이므로 뒤의 숫자까지 확인해 주세요.</dd></div>
        <div><dt>비자·입국 자격</dt><dd>본인에게 적용되는 실제 입국 자격에 맞게 선택하세요.</dd></div>
      </dl></div>
      <div><h4>숙소 정보는 이렇게 입력하세요</h4><dl className="arrival-fields">{hotelFields.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div>
    </div>
    <p className="arrival-note">지역 선택란이 있으면 베이징시 → 베이징시 → 순이구(顺义区)를 선택하고, 호텔은 중문명으로 검색해 주소를 대조하세요. 화면의 항목명과 선택지는 달라질 수 있으며, 최종 항공권·숙소 예약 내역을 기준으로 작성해 주세요.</p>
    <p className="arrival-note">단체비자 또는 단체 무비자 입국 등은 입국카드 작성 면제 대상에 포함됩니다. 이번 여행의 적용 여부는 여행사 안내를 확인하세요. 단체여행 참가만으로 면제 여부를 판단하지 마세요.</p>
    <p className="source-note arrival-sources">2026.10.20 확인 · <a href="https://en.nia.gov.cn/n147418/n147463/c191530/content.html" target="_blank" rel="noopener noreferrer">NIA 공식 작성 안내</a> · <a href="https://wb.beijing.gov.cn/home/index/wsjx/202511/t20251124_4301517.html" target="_blank" rel="noopener noreferrer">베이징시 외사판공실 · 면제 대상</a> · <a href="https://www.wyndhamhotels.com/hojo/beijing-china/howard-johnson-junhe-hot-springs-resort-beijing/overview" target="_blank" rel="noopener noreferrer">호텔 공식 정보</a> · <a href="https://www.visitbeijing.com.cn/article/4TXTFzLvXf0" target="_blank" rel="noopener noreferrer">베이징 관광국 · 호텔 주소</a></p>
  </section>;
}
