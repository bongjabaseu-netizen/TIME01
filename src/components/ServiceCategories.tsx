import { Smartphone, ShoppingBag, CreditCard, ArrowRight } from 'lucide-react';

export default function ServiceCategories() {
  const categories = [
    {
      title: '휴대폰 소액결제',
      desc: '본인 명의 휴대폰만 있다면 한도 내에서 가장 안전하게 즉시 현금화가 가능합니다.',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: '콘텐츠이용료',
      desc: '구글 플레이스토어, 정보이용료 한도를 활용하여 더 큰 자금을 신속하게 확보할 수 있습니다.',
      icon: <ShoppingBag className="w-8 h-8" />,
    },
    {
      title: '상품권 매입',
      desc: '컬쳐랜드, 해피머니 등 각종 모바일 상품권을 업계 최고가로 365일 실시간 매입합니다.',
      icon: <CreditCard className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-brand-pink font-black tracking-widest text-sm">OUR SERVICES</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">타임티켓만의 프리미엄</h2>
          </div>
          <p className="text-slate-500 font-bold max-w-sm text-left md:text-right leading-relaxed">
            다양한 결제 수단을 활용하여 빠르고 안전하게 현금화 서비스를 제공합니다.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="glass-card p-12 rounded-[2.5rem] group hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-brand-pink/50"
            >
              <div className="w-16 h-16 bg-brand-pink text-white rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(237,28,141,0.2)] group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-6">{cat.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-10 text-sm">
                {cat.desc}
              </p>
              <a 
                href="#consultation" 
                className="inline-flex items-center gap-2 font-black text-white group-hover:text-brand-pink transition-colors text-sm"
              >
                상담 신청하기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
