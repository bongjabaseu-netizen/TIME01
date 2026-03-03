import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#ed1c8d] opacity-10 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600 opacity-5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[12px] font-bold text-brand-pink mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-pink animate-ping"></span>
            대한민국 1위 365일 24시 자동화 입금 서비스 실시간 진행 중
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black leading-[1.1] text-white tracking-tighter mb-10"
          >
            24시까지 현금화 서비스,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">가장 빠르고 안전한</span><br />
            <span className="text-brand-pink">타임티켓</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-12"
          >
            업계최저수수료 3분안에 입금 보장 서비스.<br className="hidden md:block" />
            불법 업체들로부터 고객님의 소중한 자산을 보호하며 타임티켓만의 서비스 <br className="hidden md:block" />
            도입으로 휴대폰 소액결제 현금화를 신속하고 안전하게 도와드립니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 items-center"
          >
            <a 
              href="#consultation" 
              className="w-full sm:w-auto px-12 py-5 bg-brand-pink text-white font-black rounded-2xl text-xl shadow-[0_10px_40px_rgba(237,28,141,0.3)] hover:-translate-y-1 transition-all text-center"
            >
              지금 상담 신청하기
            </a>
            
            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    USER
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-black text-white">124,500+ 누적 이용자</div>
                <div className="text-slate-500 text-xs">실시간 42명의 고객이 상담 중</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
