export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-choice-pink rounded-xl flex items-center justify-center text-white font-black text-xl logo-tilt">T</div>
              <span className="text-3xl font-black text-white tracking-tighter">타임대부중계</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              타임대부중계는 안산시 정식등록업체로서 소액결제 현금화, 핸드폰결제 현금화, 상품권 매입 등 다양한 서비스를 제공하며 고객님의 신뢰를 최우선으로 합니다. 
              365일 24시간 언제나 친절하고 신속한 상담을 약속드립니다. 
              과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 귀하의 신용등급이 하락할 수 있습니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-black mb-6 uppercase tracking-wider text-xs">Service</h4>
              <ul className="space-y-3 text-sm font-bold text-slate-500">
                <li>대부중계 상담</li>
                <li>24시 실시간 문의</li>
                <li>안전 거래 가이드</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 uppercase tracking-wider text-xs">Policy</h4>
              <ul className="space-y-3 text-sm font-bold text-slate-500">
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>대부업법 준수사항</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-choice-pink font-black mb-6 uppercase tracking-wider text-xs">Help Desk</h4>
              <a href="tel:010-3390-5253" className="text-3xl font-black text-white mb-2 tracking-tighter hover:text-choice-pink transition-colors block">010-3390-5253</a>
              <p className="text-xs font-bold text-slate-600">365일 24시간 연중무휴 상담 가능</p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-[11px] font-bold text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p>상호명: 타임대부중계 | 대표자: 김영재 | 등록번호: 2026-경기안산-0001-대부중계</p>
            <p>주소: 경기도 안산시 상록구 양지편로 38, 보은타운 6층 M.R.호 (이동)</p>
            <p>전화번호: 010-3390-5253 | 등록유효기간: 2026.01.02 ~ 2029.01.02</p>
          </div>
          <p>© 2026 TIME LOAN BROKERAGE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
