import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function NoticeSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "정식 등록된 업체인가요?",
      a: "타임티켓은 정식 사업자 등록이 완료된 공식 업체입니다. 불법 거래 및 개인정보 유출 걱정 없이 안전하게 이용하실 수 있습니다."
    },
    {
      q: "본인 명의가 아닌 휴대폰도 가능한가요?",
      a: "불가능합니다. 범죄 예방을 위해 반드시 본인 명의의 휴대폰과 본인 명의의 계좌가 일치해야만 서비스 이용이 가능합니다."
    },
    {
      q: "입금은 언제 되나요?",
      a: "결제 확인 즉시 실시간 정산 시스템을 통해 입금됩니다. 은행 점검 시간(23:30 ~ 00:30)을 제외하고 평균 3분 내외로 입금이 완료됩니다."
    },
    {
      q: "주말이나 새벽에도 상담이 되나요?",
      a: "타임티켓 상담센터는 365일 24시간 연중무휴로 운영됩니다. 주말, 공휴일, 명절에도 언제든지 신청해주세요."
    }
  ];

  const notices = [
    { title: "2024년 2분기 소액결제 정책 변경 안내", date: "24.04.10" },
    { title: "타임티켓 사칭 업체 주의 당부", date: "24.04.05" },
    { title: "아이폰 결제이용료 정책 가이드", date: "24.03.28" },
    { title: "대표번호 통합 및 24시간 상시 가동 안내", date: "24.03.20" }
  ];

  return (
    <section id="notice" className="py-32 bg-[#fcfcfc] text-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-brand-pink font-black text-sm tracking-widest uppercase">Support Center</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">공지사항 & 소식</h2>
            </div>
            
            <div className="space-y-4">
              {notices.map((notice, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center p-6 rounded-3xl bg-white shadow-sm border border-gray-100 hover:border-brand-pink transition-all cursor-pointer group"
                >
                  <span className="font-bold text-gray-800 group-hover:text-brand-pink transition-colors">{notice.title}</span>
                  <span className="text-xs text-gray-400 font-bold">{notice.date}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-brand-pink font-black text-sm tracking-widest uppercase">FAQ</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">자주 묻는 질문</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-[2rem] overflow-hidden transition-all ${openFaq === idx ? 'bg-white shadow-lg border border-gray-100' : 'bg-transparent border border-gray-200'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center transition-colors"
                  >
                    <span className={`font-black text-lg ${openFaq === idx ? 'text-brand-pink' : 'text-gray-500'}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-brand-pink text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="p-6 pt-0 text-gray-500 text-sm font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
