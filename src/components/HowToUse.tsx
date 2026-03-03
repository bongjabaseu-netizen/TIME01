export default function HowToUse() {
  const steps = [
    { title: "상담문의", desc: "대표번호로 문의를 남겨주세요." },
    { title: "한도조회", desc: "이용 가능한 한도를 즉시 확인해드립니다." },
    { title: "절차안내", desc: "간단한 본인 인증 및 결제 가이드를 받습니다." },
    { title: "즉시입금", desc: "결제 확인 즉시 계좌로 현금이 입금됩니다." }
  ];

  return (
    <section id="how-to-use" className="py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-brand-pink font-black tracking-widest text-sm">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">가장 쉽고 빠른 진행 절차</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-slate-950 p-10 rounded-3xl border border-white/5 h-full transition-all group-hover:border-brand-pink/30">
                <div className="text-6xl font-black text-white/5 absolute top-4 right-8">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-brand-pink mb-8 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-xl font-black text-white mb-4">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-brand-pink to-blue-600">
            <div className="bg-slate-950 px-8 py-4 rounded-xl flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-black text-sm">
                타임티켓은 정식 등록 업체로 10% 법정 수수료를 준수합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
