export type Exhibition = {
  id: string; img: number | null; place: string; artist: string; title: string;
  originalTitle: string; date: string; body: string; status: string; price: string;
  genre: string; headline: string; overview: string[]; background: string;
  highlights: { title: string; text: string }[];
  looking: string[]; question: string; visit: { label: string; value: string }[];
  verification: string; sources: { label: string; url: string; note?: string }[];
};

export const researchDate = '2026.10.19';

export const exhibitions: Exhibition[] = [
  {
    id: 'carsten-holler', img: 3, place: 'UCCA · 798 예술구', artist: 'Carsten Höller',
    title: 'Two · 双', originalTitle: '卡斯滕·霍勒：双', date: '2026.07.14 — 2027.01.31',
    body: '두 개의 입구, 컬러와 흑백의 평행한 세계. 관객의 선택과 움직임이 작품의 일부가 됩니다.',
    status: '1일차 방문 예정', price: '문서 기준 120위안 · 공식 판매가 확인 필요',
    genre: '참여형 설치 · 지각 · 놀이', headline: '우리가 본 세계는, 정말 같은 세계일까요?',
    overview: [
      '카스텐 홀러의 중국 첫 기관 개인전입니다. 입장할 때 무작위로 배정되는 두 입구는 각각 컬러와 흑백의 공간으로 이어집니다. 같은 구조와 닮은 작품을 마주해도, 빛과 색에 따라 경험이 달라집니다.',
      '전시는 하나의 거대한 실험처럼 구성됩니다. 거울문을 통과하고, 느리게 회전하는 놀이기구를 바라보고, 다른 관객과 빛의 점을 겹치면서 시간과 판단의 기준을 다시 생각하게 합니다. 기획은 필립 티나리와 UCCA의 조우자슈가 맡았습니다.',
    ],
    background: '1961년 벨기에 출생인 홀러는 식물병리학·화학생태학 연구를 거쳐 미술로 전향했습니다. 과학의 실험 방식과 놀이의 규칙을 전시장으로 가져와, 관객이 스스로의 감각을 의심하고 관찰하도록 만듭니다.',
    highlights: [
      { title: 'Sliding Doors Square · 2026', text: '거울로 된 자동문이 이어지는 통로. 내 모습이 반복되는 가운데 반대편 관객이 나타나면 공간을 읽는 방식도 바뀝니다.' },
      { title: 'Tilted Carousel · 2026', text: '컬러와 흑백 쪽에서 서로 반대 방향으로 천천히 도는 회전 놀이기구. 놀이와 기다림, 보는 사람과 보이는 사람의 관계를 살펴보세요.' },
      { title: 'Beijing Dots · 2026', text: '움직임에 반응하는 빛의 점으로 진행하는 집단 게임. 혼자 볼 때와 다른 관객이 참여할 때의 차이가 작품을 이해하는 열쇠입니다.' },
      { title: 'Decimal Clock / Sexagesimal Clock', text: '10진법과 60진법을 네온 고리로 보여주는 시계들. 당연하게 여겼던 시간의 단위도 다른 방식으로 구성될 수 있습니다.' },
    ],
    looking: [
      '다른 입구로 들어간 동행과 관람 후 기억에 남은 색과 장면을 비교해 보세요.',
      '작품을 조작하거나 탑승할 때는 현장 운영 안내를 따르세요. Light Wall에는 점멸광과 리듬 사운드가 사용됩니다.',
      'Two Roaming Beds의 야간 숙박은 별도 예약 프로그램입니다. 이번 단체 일정에 포함된 체험으로 안내하지 않습니다.',
    ],
    question: '전시에서 내가 직접 선택한 것은 무엇이고, 작품이 정해준 것은 무엇이었을까요?',
    visit: [
      { label: '장소', value: 'UCCA 베이징 대전시장 · 北京市朝阳区酒仙桥路4号798艺术区' },
      { label: '운영', value: '화–일 10:00–19:00 · 마지막 입장 18:30 · 특별 운영일은 공식 안내 확인' },
      { label: '일정 연결', value: '10/29 오후 798 예술구 방문 시 관람 예정. 문서의 16:15–18:30은 예술구와 UCCA를 합친 시간입니다.' },
      { label: '예매', value: '공식 UCCA 위챗 또는 현장. 단체 관람·해설은 별도 사전 협의가 필요합니다.' },
    ],
    verification: '전시 기간·장소·출품작은 UCCA 공식 자료로 확인했습니다. 120위안은 여행 문서의 참고 금액이며 단체 적용 요금과 포함 여부는 확정되지 않았습니다.',
    sources: [
      { label: 'UCCA · 전시 소개와 작가 약력', url: 'https://ucca.org.cn/en/exhibition/carsten-holler/' },
      { label: 'UCCA · 공식 오디오 가이드', url: 'https://www.ucca.org.cn/en/exhibition/carsten-holler/audios/' },
      { label: 'UCCA · 출품작 목록', url: 'https://ucca.org.cn/exhibition/carsten-holler/works/' },
      { label: 'UCCA · 방문 및 단체 예약 안내', url: 'https://www.ucca-group.com/en/visit/' },
    ],
  },
  {
    id: 'nikolai-fechin', img: 4, place: '중국미술관 · 3·5·7 전시실', artist: 'Nikolai Fechin',
    title: '니콜라이 페친 회화 명작전', originalTitle: '致敬巨匠：尼古拉·费欣绘画精品展',
    date: '2026.09.29 — 2027.02.14', body: '75점으로 따라가는 화가의 여정. 정교한 얼굴과 자유로운 붓질이 공존하는 회화를 만납니다.',
    status: '3일차 문서 제안', price: '문서 기준 120위안 · 공식 예매 공지 확인',
    genre: '유화 · 드로잉 · 초상', headline: '가까이에서는 붓질, 한 걸음 뒤에서는 사람.',
    overview: [
      '중국미술관과 러시아의 세 미술 기관이 공동 주최하는 전시입니다. 베이징시 전시 안내는 75점의 작품을 소개하며, 공식 출품 목록에는 초기 대형 회화부터 초상화와 드로잉까지 실려 있습니다.',
      '페친의 화면은 단단한 인물 묘사와 거침없는 물감 자국이 만나는 자리입니다. 한 작품을 가까이에서 보고 몇 걸음 물러나 다시 바라보세요. 개별 붓질이 어느 순간 표정과 분위기로 읽히는지를 발견할 수 있습니다.',
    ],
    background: '러시아 카잔 출신으로 일리야 레핀에게 배운 뒤 미국에서도 활동했습니다. 중국미술관은 그의 작품에서 사실적 조형, 인상주의의 빛과 색, 간결한 선이 함께 작용한다고 설명합니다. 중국의 종이와 회화에 가졌던 관심도 드로잉을 읽는 배경이 됩니다.',
    highlights: [
      { title: '《양배추 수확철》 · 1909', text: '공식 출품작 중 가로 344cm의 대형 유화입니다. 여러 인물과 움직임이 큰 화면 안에서 어떻게 한 장면을 이루는지 살펴보세요.' },
      { title: '《아버지의 초상》 · 1911', text: '얼굴과 주변의 붓질을 번갈아 보며, 묘사의 밀도 차이가 인물의 존재감을 어떻게 만드는지 관찰해 보세요.' },
      { title: '《크레이그 부인》 · 1923', text: '작가 딸의 가정교사를 그린 초상입니다. 장식보다 자세와 표정, 화면의 질감에 집중해 보세요.' },
      { title: '《발리 주민, 남성 초상》 · 1930년대 후반', text: '공식 목록에 포함된 드로잉. 유화의 물감 덩어리와 달리 간결한 선으로 인물을 포착하는 방식을 비교할 수 있습니다.' },
    ],
    looking: [
      '눈·입·손처럼 시선이 머무는 부분과 배경의 묘사 밀도를 비교해 보세요.',
      '작품 가까이에서는 물감의 두께를, 멀리에서는 전체 명암과 인물의 표정을 살펴보세요. 작품과의 관람 거리는 지켜주세요.',
      '작품명 한국어 표기는 이해를 위한 번역입니다. 현장에서는 중국어 작품명과 연도를 함께 확인하세요.',
    ],
    question: '인물을 닮게 만드는 것은 정확한 윤곽일까요, 한 번의 붓질이 전하는 기운일까요?',
    visit: [
      { label: '장소', value: '중국미술관 1층 3·5·7 전시실 · 北京市东城区五四大街1号' },
      { label: '운영', value: '09:00–17:00 · 16:00 입장 마감 · 월요일 휴관, 법정 공휴일 예외' },
      { label: '일정 연결', value: '10/31 14:00–15:30 문서 제안 일정. 동징원 일몰 세션과 이동 시간을 함께 조율해야 합니다.' },
      { label: '예매', value: '미술관 공식 공지의 전시 예매 안내를 확인하세요. 일반 전시 입장과 유료 특별전의 예약 조건을 구분해야 합니다.' },
    ],
    verification: '전시 기간·전시실·출품작은 중국미술관, 75점이라는 규모는 베이징시 자료로 확인했습니다. 시 전시 목록의 요금은 ‘미정’이며, 미술관에는 별도의 9/21 예매 공지가 있습니다. 해당 위챗 공지 본문을 열지 못해 120위안을 공식 확인 금액으로 표시하지 않았습니다.',
    sources: [
      { label: '중국미술관 · 공식 전시 및 출품작', url: 'https://www.namoc.cn/namoc/zhanlan/202609/6e6235543e8c4a368445608fabdb3bea.shtml' },
      { label: '중국미술관 · 페친 회화의 표현성', url: 'https://www.namoc.cn/namoc/xinwen/202609/341cd0ba04b1441a8413c854ca5ffcc8.shtml' },
      { label: '베이징시 · 전시 규모와 장소', url: 'https://www.beijing.gov.cn/fwcj/calendar/bwgzl/6a978ff588f81c019f7039ed.html' },
      { label: '중국미술관 · 예매 공지 목록', url: 'https://www.namoc.cn/namoc/gonggao/list.shtml', note: '9/21 공지 연결. 위챗 본문은 이번 조사에서 접근 불가' },
    ],
  },
  {
    id: 'the-monsters', img: 5, place: '제네시스 갤러리 · 启皓艺术馆', artist: 'Kasing Lung',
    title: 'MONSTERS BY MONSTERS', originalTitle: 'MONSTERS BY MONSTERS: NOW AND THEN · 精灵天团：此刻与未来',
    date: '2026.09.30 — 2026.11.29', body: '장난감이 되기 전의 라부부를 만나는 시간. 원화와 스케치에서 출발해 상상의 숲으로 들어갑니다.',
    status: '4일차 문서 제안', price: '문서 기준 79위안 · 예매 조건 확인 필요',
    genre: '원화 · 창작 아카이브 · 몰입형 전시', headline: '인기 캐릭터의 표정 뒤에는, 작가의 선이 있습니다.',
    overview: [
      'THE MONSTERS 10주년 순회전의 베이징 전시입니다. 베이징시가 게재한 현장 기사에서는 약 3,000㎡ 공간, 10개 테마 구역, 100점 넘는 카싱 룽의 원화와 창작 손그림을 소개합니다.',
      '기념 사진을 찍는 공간을 지나 원화와 영감의 아카이브에 조금 더 머물러 보세요. 캐릭터의 얼굴과 비례가 바뀌는 과정을 따라가면, 익숙한 라부부가 작가의 세계 속에서 다시 보입니다.',
    ],
    background: '카싱 룽(龙家升)은 THE MONSTERS를 만든 작가입니다. 이번 전시는 캐릭터 상품뿐 아니라 그림책과 손그림, 회화, 공간 연출을 함께 보여주므로 ‘무엇을 수집할까’보다 ‘이 세계는 어떻게 그려졌을까’라는 질문으로 접근해 볼 수 있습니다.',
    highlights: [
      { title: '영감의 원고 아카이브', text: '원화와 손그림 속 얼굴, 비례, 선의 변화를 관찰해 보세요. 완성된 캐릭터와 초안의 차이를 읽는 공간입니다.' },
      { title: '그림책의 숲 · 绘本森林', text: '흑백 선화로 재구성한 환상의 숲. 평면에서 보던 선이 실제로 걸어 들어갈 수 있는 장면이 되는 방식을 살펴보세요.' },
      { title: '순회전을 위한 회화 원작 7점', text: '베이징시 현장 기사에 소개된 특별 회화들입니다. 각 도시를 위해 제작된 그림에서 반복되는 모티프와 차이를 찾아보세요.' },
      { title: '몰입형 상영실 · 《神秘的布卡》', text: '배우 장전(张震)의 목소리가 더해진 애니메이션. 소리와 움직임이 흑백 그림의 서사를 어떻게 확장하는지 살펴보세요.' },
    ],
    looking: [
      '처음 보는 캐릭터도 이름을 외우기보다 표정·귀·이빨·몸의 비례부터 비교해 보세요.',
      '그림과 피규어를 함께 보며 선, 색, 재질이 각각 어떤 성격을 만드는지 관찰해 보세요.',
      '사진 촬영과 상품 구매 시간은 원화 관람과 별도로 생각해 두세요. 귀국일 제안 일정이므로 실제 관람 시간은 최종 동선에 따라 달라집니다.',
    ],
    question: '나에게 라부부는 수집하는 물건인가요, 하나의 이야기를 가진 등장인물인가요?',
    visit: [
      { label: '장소', value: '제네시스 아트 갤러리 / 启皓艺术馆 · 北京市朝阳区新源南路8号' },
      { label: '문서의 운영 정보', value: '09/30–11/29 · 10:00–20:00. 날짜·시간·79위안은 문서 기준이며 공식 예약 페이지 재확인이 필요합니다.' },
      { label: '일정 연결', value: '11/01 11:20–12:20 문서 제안. 귀국편은 18:50이므로 공항 이동·수속 시간을 우선 확보합니다.' },
      { label: '예매', value: '주최 측 또는 전시장 공식 채널에서 방문일, 회차, 티켓 유형과 외국인 신분증 사용 조건을 확인하세요.' },
    ],
    verification: '전시 개최와 전시 구성은 베이징시의 10/5 현장 기사로 확인했습니다. 베이징 전시 공식 예매 페이지는 확보하지 못했으므로 종료일·운영 시간·요금은 문서 기준으로 남겼습니다.',
    sources: [
      { label: '베이징시 · THE MONSTERS 베이징 전시 현장 기사', url: 'https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202610/t20261005_4890678.html', note: '베이징일보 10/5 현장 취재를 시 포털에서 게재' },
    ],
  },
  {
    id: 'prayers-to-fornax', img: 6, place: '현대 모터스튜디오 베이징', artist: 'Prayers to Fornax',
    title: '과학, 기술 그리고 영성', originalTitle: 'Prayers to Fornax: Science, Technology, and Spirituality · 天炉座的祈祷者：科学、技术与灵性',
    date: '2026.07.18 — 2026.12.13', body: '별을 관측하는 과학, 하늘을 해석하는 믿음. 여덟 팀의 작품이 기술을 바라보는 또 다른 길을 엽니다.',
    status: '1일차 선택 추천', price: '입장료 확인 필요',
    genre: '영상 · 설치 · 과학과 영성', headline: '측정할 수 없는 세계를, 우리는 어떻게 이해할까요?',
    overview: [
      '현대 블루 프라이즈+ 2025 수상 큐레이터팀 Yifeng Wei와 Penny Dan Xu가 기획한 전시입니다. 국제 작가·콜렉티브 8개 팀이 참여해 과학적 탐구, 기술 체계, 영적 상상력이 만나는 지점을 다룹니다.',
      '제목의 Fornax는 실험실의 화로에서 이름을 얻은 남반구 별자리입니다. 전시는 신화와 관측을 서로 멀리 떨어진 것으로 보기보다, 세계를 이해하는 여러 방식으로 나란히 살펴봅니다.',
    ],
    background: '현대 블루 프라이즈+는 아시아의 맥락에서 동시대 쟁점을 연구하는 큐레이터를 지원합니다. 이번 기획은 하나의 작가를 소개하는 개인전이 아니라, 서로 다른 작품을 통해 과학과 기술의 언어를 다시 읽는 주제전입니다.',
    highlights: [
      { title: '측정할 수 없는 것을 측정하기', text: 'June Balthazard·Pierre Pauze의 《Mass》(2020), Chen Zhe의 《Celestial-cranial Instrument》 연작(2022–2023). 관측 도구와 설명되지 않는 경험의 관계를 살펴보세요.' },
      { title: '주변으로 밀려난 지식', text: 'Natasha Tontey의 《Of Other Tomorrows Never Known》(2023), Riar Rizaldi의 《Tellurian Drama》(2020). 기술에 관한 이야기에서 땅과 전통의 지식은 어디에 놓일까요?' },
      { title: '우주에서 징후 찾기', text: 'Zach Blas, Nolan Oswald Dennis, Haroon Mirza, Suzanne Treister의 작업이 함께합니다. 《Metric Mysticism: A Troll’s Tale》, 《Cymatic Ceremony》, 《HEXEN 5.0》 등의 연결점을 찾아보세요.' },
    ],
    looking: [
      '세 갈래의 주제를 먼저 읽고, 각 작품이 어떤 질문에 응답하는지 따라가 보세요.',
      '영상은 시작 지점이나 길이가 서로 다를 수 있습니다. 짧은 방문이라면 관심 가는 한 작품에 집중하는 방식도 좋습니다.',
      '아래 관람 질문은 사이트의 감상 제안입니다. 작품의 의미를 하나의 정답으로 고정하지 않고 동행과 다른 해석을 나눠 보세요.',
    ],
    question: '새로운 기술을 신뢰할 때, 우리는 무엇을 근거로 삼고 무엇을 믿음에 맡기고 있나요?',
    visit: [
      { label: '장소', value: '798 예술구 E-1 · 현대 모터스튜디오 베이징' },
      { label: '운영', value: '공식 공간 안내: 10:00–19:30 · 입장 마감 19:00 · 매월 첫 월요일 및 춘절 연휴 휴무' },
      { label: '일정 연결', value: '10/29 UCCA와 같은 798 예술구에서 선택 관람 제안. 두 전시를 모두 충분히 보려면 실제 도착 시간과 체류 시간을 조율해야 합니다.' },
      { label: '예매', value: '전시 입장료·예약 방식은 확인 필요. 공간 문의 +86 10 5810 1088' },
    ],
    verification: '전시 기간·큐레이터·작품은 현대자동차 공식 보도자료로, 공간 운영 시간은 현대 모터스튜디오 공식 안내로 확인했습니다. 공간 운영 시간과 개별 전시의 입장 조건은 다를 수 있습니다.',
    sources: [
      { label: '현대자동차 · 공식 전시 보도자료와 출품작', url: 'https://www.hyundai.com/worldwide/en/newsroom/detail/0000001228' },
      { label: 'Zach Blas · 참여 작가의 전시 소개', url: 'https://zachblas.info/events/prayers-to-fornax-science-technology-and-spirituality/' },
      { label: '현대 모터스튜디오 · 베이징 공간 안내', url: 'https://motorstudio.hyundai.com/beijing/ln/main.do' },
    ],
  },
  {
    id: 'gathered-sky', img: null, place: '동징원 · 东景缘 / The Temple', artist: 'James Turrell',
    title: 'Gathered Sky', originalTitle: 'Gathered Sky · Skyspace', date: '상설 설치 · 일몰 세션은 예약 확인 필요',
    body: '지붕에 열린 하늘과 실내의 빛. 해가 저무는 동안, 색을 본다는 경험 자체에 머뭅니다.',
    status: '3일차 방문 예정 · 예약 확인', price: '문서 기준 150위안 · 현재 요금 확인 필요',
    genre: '상설 설치 · 빛 · 지각', headline: '그림이 걸린 벽 대신, 하늘이 열리는 방.',
    overview: [
      '동징원에 있는 제임스 터렐의 상설 스카이스페이스입니다. 천장의 개구부로 보이는 실제 하늘과 실내 조명이 함께 지각되는 공간으로, 일반적인 기간제 기획전과는 관람 방식이 다릅니다.',
      '일몰 동안 변화하는 빛에 천천히 눈을 맡겨보세요. 하늘의 색이 바뀌는 것인지, 주변 색 때문에 다르게 보이는 것인지 살피는 시간이 이 작품을 만나는 방법입니다.',
    ],
    background: '터렐은 빛과 공간을 통해 보는 행위를 탐구하는 미국 작가입니다. 스카이스페이스는 하늘을 향한 개구부가 있는 공간으로, 자연광과 주변 빛의 관계를 경험하게 합니다. ARoS 미술관은 베이징의 《Gathered Sky》를 2012년 작업으로 소개합니다.',
    highlights: [
      { title: '화면이 아닌, 실제 하늘', text: '천장에 열린 하늘을 하나의 색면처럼 바라보세요. 구름과 저녁빛은 그날의 관람 경험을 달라지게 합니다.' },
      { title: '주변 빛과 색의 관계', text: '같은 하늘을 바라보더라도 실내 빛과 대비되면 색의 인상이 달라집니다. 사진보다 눈앞에서 일어나는 변화를 따라가 보세요.' },
      { title: '작품의 일부가 되는 시간', text: '다른 관람자의 움직임에서 잠시 시선을 거두고, 시야가 적응하는 과정을 관찰해 보세요. 아래 설명은 작품에 접근하기 위한 사이트의 감상 제안입니다.' },
    ],
    looking: [
      '문서에는 일몰 20분 전 도착, 17:15–18:15 세션이 적혀 있습니다. 확정 운영 시간으로 간주하지 말고 예약처에서 해당 날짜의 시작 시간을 확인하세요.',
      '2014년 주최 측 안내는 15분 전 도착, 따뜻한 옷 준비, 우천·강설 시 취소 가능성을 명시했습니다. 현재 조건은 새로 확인해야 합니다.',
      '회차·정원·요금·촬영 규칙을 예약처에 확인하고, 일몰 관람이 앞선 중국미술관 방문 및 저녁 식사와 겹치지 않도록 조율하세요.',
    ],
    question: '하늘은 그대로인데 내가 보는 색이 달라진다면, 그 색은 어디에 있는 걸까요?',
    visit: [
      { label: '장소', value: '东景缘 · 北京市东城区沙滩北街嵩祝院23号 (주소는 여행 문서 기준)' },
      { label: '일정 연결', value: '10/31 경산공원·중국미술관 일대 방문 후 일몰 관람 제안. 세션 예약 및 이동 시간을 우선 확인하세요.' },
      { label: '운영·예약', value: '상설 작품의 존재와 실제 입장 가능한 회차는 별개입니다. 2026년 운영 요일·시간·예약 가능 여부는 확인되지 않았습니다.' },
      { label: '요금', value: '문서 150위안은 참고 금액. 동일 금액의 과거 주최 측 공지가 있지만 현재 가격을 보장하지 않습니다.' },
    ],
    verification: '작품과 작가의 배경은 ARoS 미술관 자료, 과거 관람 방식은 The Temple의 2014년 주최 행사 안내를 참고했습니다. 과거 요일·회차를 2026년 운영 정보로 옮기지 않았습니다.',
    sources: [
      { label: 'ARoS 미술관 · 터렐과 Gathered Sky 소개', url: 'https://www.aros.dk/en/aros-collection/as-seen-below-the-dome-a-skyspace-by-james-turrell/james-turrell-the-groundbreaking-pioneer/' },
      { label: 'The Temple · 과거 주최 측 일몰 관람 안내', url: 'https://yoopay.cn/event/GatheredSky20140302', note: '2014년 행사 자료 · 현재 예약 페이지가 아닙니다.' },
    ],
  },
];
