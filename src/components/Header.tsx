import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(237,28,141,0.4)] logo-tilt transition-transform group-hover:scale-110">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white">타임티켓</span>
            <span className="text-[10px] font-bold text-brand-pink tracking-[0.2em] uppercase">Premium Service</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12">
          {[
            { name: '서비스', id: 'services' },
            { name: '이용방법', id: 'how-to-use' },
            { name: '고객지원', id: 'notice' },
            { name: '실시간상담', id: 'consultation' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-bold text-slate-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        
        <a 
          href="tel:1600-0000" 
          className="bg-brand-pink hover:bg-[#c2185b] text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 text-sm"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          24시 상담 바로연결
        </a>
      </div>
    </header>
  );
}
