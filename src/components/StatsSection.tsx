export default function StatsSection() {
  const stats = [
    { label: '평균 입금 소요시간', value: '3min', sub: '신청 즉시 3분 이내' },
    { label: '고객 만족도', value: '99.9%', sub: '업계 최다 이용률' },
    { label: '안전 거래 지수', value: '100%', sub: '사고 제로 정식 업체' },
    { label: '오늘 매입 총액', value: '1.2억+', sub: '실시간 정산 기준' },
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left space-y-2 group">
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest group-hover:text-brand-pink transition-colors">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-slate-600 text-[11px] font-bold">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
