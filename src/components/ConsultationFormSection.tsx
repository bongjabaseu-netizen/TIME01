import { useState, FormEvent } from 'react';
import { ServiceType } from '@/src/types';
import { Check } from 'lucide-react';

export default function ConsultationFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('개인정보 동의가 필요합니다.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="consultation" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row glass-card rounded-[3.5rem] overflow-hidden">
          <div className="lg:w-1/2 p-16 bg-brand-pink flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 logo-tilt origin-top-left pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-black text-white leading-tight mb-8">
                상담 신청 남겨주시면<br />
                <span className="bg-white text-brand-pink px-2">3분 내 바로 연락</span><br />
                드리겠습니다
              </h2>
              <div className="space-y-6">
                {['투명한 정산 수수료', '24시간 연중무휴', '실시간 자동화 입금'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-bold">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px]">
                      <Check className="w-4 h-4" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-black/10 rounded-3xl border border-white/10 relative z-10">
              <div className="text-xs font-black text-white/50 mb-1">상담 및 문의 대표번호</div>
              <a href="tel:1600-0000" className="text-4xl font-black text-white hover:text-white/80 transition-opacity">1600-0000</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-16 bg-slate-950">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center text-white text-4xl mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">상담 신청이 완료되었습니다!</h3>
                <p className="text-slate-500 font-medium">잠시만 기다려주시면 3분 내외로 연락 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" 
                  required 
                  placeholder="성함" 
                  className="w-full px-6 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white focus:border-brand-pink outline-none transition-all font-bold"
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
                <input 
                  type="tel" 
                  required 
                  placeholder="연락처 (010-0000-0000)" 
                  className="w-full px-6 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white focus:border-brand-pink outline-none transition-all font-bold"
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
                <select 
                  required 
                  className="w-full px-6 py-4 bg-slate-900 border border-white/5 rounded-2xl text-white focus:border-brand-pink outline-none transition-all font-bold appearance-none"
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">상담받으실 서비스를 선택해주세요</option>
                  {Object.values(ServiceType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                
                <div className="flex items-start gap-3 p-5 bg-white/5 rounded-2xl border border-white/5">
                  <input 
                    type="checkbox" 
                    id="agreed" 
                    required 
                    className="mt-1 accent-brand-pink"
                    onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
                  />
                  <label htmlFor="agreed" className="text-xs text-slate-500 font-bold leading-relaxed">
                    안전한 거래를 위한 개인정보 수집 및 이용에 동의합니다. (불법 용도 사용 시 상담 및 진행 불가)
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-5 bg-brand-pink hover:opacity-90 text-white font-black text-xl rounded-2xl transition-all shadow-xl"
                >
                  {isSubmitting ? '전송 중...' : '3분 내 상담 신청하기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
