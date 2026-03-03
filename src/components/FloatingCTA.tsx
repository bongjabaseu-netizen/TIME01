import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingCTAProps {
  phoneNumber: string;
}

export default function FloatingCTA({ phoneNumber }: FloatingCTAProps) {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 w-full z-50 md:hidden"
    >
      <a 
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-3 bg-choice-pink text-white py-5 px-4 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] active:opacity-90 transition-all"
      >
        <Phone className="w-6 h-6 fill-current" />
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold opacity-90">24시 실시간 상담</span>
          <span className="text-xl font-black tracking-tight">{phoneNumber}</span>
        </div>
      </a>
    </motion.div>
  );
}
