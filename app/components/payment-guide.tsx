export function PaymentGuide() {
  return <section className="arrival-guide" id="payment-guide" aria-labelledby="payment-heading">
    <div className="arrival-heading"><div><span className="eyebrow">PAYMENT IN BEIJING</span><h3 id="payment-heading">현금은 가볍게, 결제는 앱으로.</h3><p>이번 여행은 가이드 경비 <strong>US$40를 현금으로 준비</strong>해 주세요. 그 외에는 현금이 거의 필요 없으며, 개인 지출은 모바일 결제를 이용하시면 편리합니다.</p></div></div>
    <div className="arrival-columns" style={{marginTop:28}}>
      <div><h4>네이버페이·카카오페이가 편해요</h4><p className="arrival-note">출국 전 네이버페이(Npay) 또는 카카오페이 앱을 설치해 두세요. 익숙한 한국 앱으로 중국 현지의 지원 가맹점에서 바로 결제할 수 있습니다.</p><p className="arrival-note">본인인증과 해외결제 이용 동의, 계좌 연결·머니 충전 등 앱에서 요구하는 준비를 한국에서 미리 마쳐 두면 편리합니다. 현장에서는 해외 QR결제 화면을 열고, 매장의 지원 결제망과 안내에 따라 QR을 보여주거나 스캔해 주세요.</p></div>
      <div><h4>알리페이·위챗페이도 사용할 수 있어요</h4><p className="arrival-note">알리페이(Alipay)와 위챗페이(WeChat Pay / Weixin Pay)를 이용하셔도 됩니다. 이미 쓰는 앱이 있다면 그대로 준비하셔도 좋아요.</p><p className="arrival-note">새로 이용한다면 앱 가입과 본인인증, 지원되는 해외결제 카드 등록을 미리 완료해 주세요. 이용 가능한 매장과 결제 방식은 앱·가맹점에 따라 다를 수 있습니다.</p></div>
    </div>
    <p className="source-note arrival-sources">2026.10.20 확인 · <a href="https://help.pay.naver.com/faq/content.help?faqId=11864" target="_blank" rel="noopener noreferrer">네이버페이 해외 QR결제 안내</a> · <a href="https://contents.kakaopay.com/contents/1040" target="_blank" rel="noopener noreferrer">카카오페이 중국 결제 안내</a> · <a href="https://english.beijing.gov.cn/specials/paymentservices/howtopaybeijing/202404/t20240429_3647378.html" target="_blank" rel="noopener noreferrer">베이징시 · 알리페이·위챗페이 안내</a></p>
  </section>;
}
