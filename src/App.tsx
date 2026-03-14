import { motion } from 'motion/react';
import { Phone, MessageSquare, Search, CreditCard, Smartphone, ShoppingBag, Gift, Clock, ShieldCheck, Headphones } from 'lucide-react';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

export default function App() {
  const phoneNumber = "010-3390-5253";

  return (
    <div className="min-h-screen choice-gradient flex flex-col items-center pb-20">
      {/* Hero Section */}
      <section className="w-full max-w-4xl px-6 pt-16 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-1 mb-6"
        >
          {["전", "국", "최", "저", "가"].map((char, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-choice-yellow drop-shadow-lg">
              {char}{i < 4 && <span className="text-white/30 mx-1">/</span>}
            </span>
          ))}
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl font-bold text-white mb-2"
        >
          소액결제 핸드폰결제 현금화 전문
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl font-black text-white mb-12"
        >
          신속하고 안전한 <span className="text-choice-yellow">타임대부중개!</span>
        </motion.h1>

        {/* Floating Card Visual */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative w-72 h-44 bg-gradient-to-br from-blue-400 via-choice-pink to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white/20 mb-16"
        >
          <span className="text-4xl font-black italic text-white drop-shadow-md">타임대부중개</span>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 blur-sm"></div>
        </motion.div>

        {/* Limit Cards */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-4 w-full mb-16 px-5 md:px-0">
          {[
            { title: "소액결제 한도", amount: "100", rate: "85%", color: "bg-red-500" },
            { title: "정보이용료 한도", amount: "100", rate: "65%", color: "bg-red-500" },
            { title: "상품권 구매 한도", amount: "500", rate: "85%", color: "bg-red-500" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className={`${item.color} py-1.5 md:py-2 text-white font-black text-[10px] md:text-sm whitespace-nowrap text-center`}>
                {item.title}
              </div>
              <div className="p-2 md:p-6 flex flex-col items-center justify-center flex-grow">
                <div className="flex items-baseline gap-0.5 mb-0.5 md:mb-2">
                  <span className="text-xl md:text-4xl font-black text-choice-purple">{item.amount}</span>
                  <span className="text-[10px] md:text-lg font-bold text-gray-600">만원</span>
                </div>
                <div className="text-red-500 font-black text-[11px] md:text-lg whitespace-nowrap">지급율 {item.rate}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credit Card Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-black text-choice-yellow mb-6 drop-shadow-md whitespace-nowrap">신용카드 결제 가능</h3>
          <div className="flex gap-4">
            <CreditCard className="w-12 h-12 md:w-16 md:h-16 text-green-400" />
            <CreditCard className="w-12 h-12 md:w-16 md:h-16 text-blue-400 -rotate-12" />
            <CreditCard className="w-12 h-12 md:w-16 md:h-16 text-slate-300 rotate-12" />
          </div>
        </motion.div>

        {/* Yellow CTA Bar */}
        <a 
          href={`tel:${phoneNumber}`}
          className="w-full bg-choice-yellow rounded-[2.5rem] md:rounded-full py-6 md:py-10 px-6 md:px-12 flex items-center justify-center gap-4 md:gap-10 shadow-2xl hover:scale-105 transition-transform mb-20"
        >
          <div className="bg-choice-purple rounded-full p-3 md:p-6 shrink-0">
            <Headphones className="w-8 h-8 md:w-16 md:h-16 text-choice-yellow" />
          </div>
          <div className="flex flex-col items-center md:items-start leading-tight">
            <span className="text-lg md:text-3xl font-bold text-choice-purple/80 mb-1">
              전화·문자 상담
            </span>
            <span className="text-3xl md:text-7xl font-black text-choice-purple tracking-tighter">
              {phoneNumber}
            </span>
          </div>
        </a>

        {/* Process Section */}
        <div className="w-full flex flex-col items-center mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-4xl font-black text-white italic">타임대부중개</h3>
            <span className="text-2xl font-bold text-white">이렇게 진행됩니다.</span>
          </div>
          
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {[
              { step: "STEP1", title: "전화, 문자 365일 24시간 문의 가능!", sub: "연중무휴 친절고객센터 상시 대기중" },
              { step: "STEP2", title: "비대면으로 간단 상담 후 접수하여 신속 진행!", sub: "간단한 정보로 안전한 거래 진행" },
              { step: "STEP3", title: "신속하게 상담 확인 후 절차 마무리", sub: "5분이내 신속하고 안전한 마무리" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-4 -top-4 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full z-10">
                  {item.step}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-lg md:text-xl font-black text-gray-800 mb-1">{item.title}</div>
                  <div className="text-sm font-bold text-blue-500">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Naver Banner */}
        <div className="w-full bg-blue-800 rounded-2xl p-6 md:p-8 flex flex-col items-center mb-20 shadow-xl">
          <span className="text-4xl md:text-5xl font-black text-green-400 mb-6 drop-shadow-sm">NAVER</span>
          
          <div className="flex items-center w-full max-w-md gap-1 mb-6">
            <div className="flex-grow bg-white rounded-l-lg px-4 py-3 flex items-center justify-between border-2 border-green-500 border-r-0">
              <span className="font-black text-gray-800 text-lg">타임대부중개</span>
              <Search className="w-5 h-5 text-green-500" />
            </div>
            <div className="bg-green-500 text-white px-6 py-3 rounded-r-lg font-black text-lg shrink-0 flex items-center justify-center">
              검색
            </div>
          </div>
          
          <p className="text-white font-bold text-sm md:text-base">
            네이버 정식등록업체 네이버 <span className="text-choice-yellow">'타임대부중개'</span> 검색
          </p>
        </div>

        {/* Consultation Section */}
        <div className="w-full flex flex-col items-center mb-20">
          <div className="text-center mb-8">
            <p className="text-xl font-bold text-white mb-2">정식등록업체 '타임대부중개'</p>
            <p className="text-2xl font-bold text-white mb-4">지금 바로 상담하세요!</p>
            <h3 className="text-4xl font-black text-white">빠르고 간편한 비대면 문의</h3>
          </div>
          
          <a 
            href={`tel:${phoneNumber}`}
            className="bg-choice-yellow rounded-full py-4 px-10 flex items-center gap-4 shadow-2xl hover:scale-105 transition-transform mb-12"
          >
            <Headphones className="w-8 h-8 text-choice-purple" />
            <span className="text-2xl font-black text-choice-purple">전화·문자 상담누르기</span>
          </a>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4 w-full max-w-2xl px-4 md:px-0">
            {[
              { icon: <Smartphone className="w-8 h-8 md:w-8 md:h-8" />, title: "빠른 상담", desc: "원하는 상담을 빠르게 진행" },
              { icon: <MessageSquare className="w-8 h-8 md:w-8 md:h-8" />, title: "어디서든 상담", desc: "장소 상관없이 상담 가능" },
              { icon: <Clock className="w-8 h-8 md:w-8 md:h-8" />, title: "24시간 친절상담", desc: "365일 연중무휴 고객센터 운영" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-row md:flex-col items-center text-left md:text-center shadow-xl gap-4 md:gap-0">
                <div className="text-choice-purple md:mb-4 shrink-0">{item.icon}</div>
                <div className="flex flex-col">
                  <div className="font-black text-gray-800 text-base md:text-lg mb-0.5 md:mb-1">{item.title}</div>
                  <div className="text-[11px] md:text-[10px] font-bold text-gray-500 leading-tight whitespace-nowrap">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="flex flex-col items-center text-center mb-20">
          <Headphones className="w-12 h-12 text-choice-yellow mb-6" />
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            타임대부중개는 <span className="text-choice-yellow">소액결제 현금화 및 상품권 매입</span> 전문으로<br />
            365일 24시 언제나 영업 중에 있습니다.<br />
            밤, 새벽, 주말, 공휴일 <span className="text-choice-yellow">언제든 필요한 시간</span>에 걱정마시고<br />
            문의주시면 <span className="text-choice-yellow">친절하게 상담</span> 도와드리겠습니다.
          </p>
        </div>

        {/* Products Section */}
        <div className="w-full flex flex-col items-center">
          <div className="bg-gray-900 text-white px-10 py-3 rounded-full text-3xl font-black mb-12 shadow-xl">
            주요 서비스
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {[
              { name: "컬쳐랜드 상품권", icon: <Gift /> },
              { name: "해피머니상품권", icon: <Gift /> },
              { name: "티머니", icon: <CreditCard /> },
              { name: "롯데 상품권", icon: <Gift /> },
              { name: "신세계 상품권", icon: <Gift /> },
              { name: "홈플러스 상품권", icon: <Gift /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full aspect-[4/3] bg-white rounded-3xl shadow-xl mb-4 flex items-center justify-center text-gray-300">
                  {/* Placeholder for product images */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-12 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400">GIFT CARD</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase">{item.name.split(' ')[0]}</div>
                  </div>
                </div>
                <div className="font-bold text-white">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Action Button (Desktop Only) */}
      <motion.a 
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-20 h-20 bg-choice-yellow rounded-full hidden md:flex items-center justify-center shadow-2xl z-50 border-4 border-choice-purple"
      >
        <Phone className="w-10 h-10 text-choice-purple fill-current" />
      </motion.a>

      {/* Mobile Fixed Bottom Bar */}
      <FloatingCTA phoneNumber={phoneNumber} />
    </div>
  );
}
