# 하이디라님과 함께 하는 베이징 아트 투어

Next.js App Router · React · TypeScript · Tailwind CSS 4

## 실행

```sh
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 배포용 정적 빌드

```sh
npm run build
```

`out/` 폴더를 정적 호스팅에 배포합니다.

## 구성

- `app/page.tsx`: 여행 소개, 전시 상세 팝업, 날짜별 일정, 항공/숙소 안내, FAQ
- `app/data/exhibitions.ts`: 전시 4개와 Gathered Sky의 조사 내용, 주요 작품, 출처 및 확인 범위
- `app/components/exhibition-detail.tsx`: 작품별 관람 가이드와 출처를 읽는 상세 화면
- `app/globals.css`: 크림/로즈 핑크 디자인 시스템, 반응형 스타일
- `public/images/`: 제공 문서에서 추출한 사진 및 포스터 6장
- `public/itinerary.docx`: 원본 일정 다운로드

메시지의 기본 일정 및 항공 시간을 우선 반영했습니다. 문서의 추가 방문지는 별도로 표시했으며 전시 정보는 2026년 10월 19일 UCCA·중국미술관·현대자동차·베이징시 등의 자료와 대조했습니다. 상세 가이드에서 출처, 문서 기준 정보, 미확인 예약 조건을 구분해 표시합니다. 전시/동징원 입장 포함 여부는 확정하지 않았습니다. 외부 Google Fonts를 사용할 수 없는 환경에서는 시스템 폰트로 표시됩니다.

TypeScript 검사(`tsc --noEmit`)를 통과했습니다. 브라우저에서의 시각·상호작용 확인은 아직 완료하지 않았습니다. Sites 소스 서버는 작업 환경에서 DNS 조회에 실패했습니다.
