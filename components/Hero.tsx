import React from 'react';
import { Fuel, MapPin, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-14">
      
      {/* Status Indicator */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tmd-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tmd-green"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-tmd-dark">Opening Soon</span>
        </div>
      </div>

      {/* Main Headlines */}
      <div className="space-y-3 md:space-y-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-tmd-dark tracking-tight leading-[1.1]">
          Powering the <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tmd-blue via-tmd-dark to-tmd-green">
            Road Ahead
          </span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl text-slate-500 font-medium max-w-xl md:max-w-2xl mx-auto leading-relaxed">
          Reliable fuel. Modern stations. Built for tomorrow.
        </p>
      </div>

      {/* Trust Pillars */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-2 md:mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        
        <Pillar 
          icon={<Fuel className="w-5 h-5 md:w-6 md:h-6 text-tmd-blue" />}
          title="Reliable Fuel"
          desc="Quality assured energy for every journey."
        />
        
        <div className="hidden md:block w-px h-8 md:h-12 bg-slate-200 absolute left-1/3 top-1/2 -translate-y-1/2"></div>
        
        <Pillar 
          icon={<Zap className="w-5 h-5 md:w-6 md:h-6 text-tmd-yellow" />}
          title="Clean & Modern"
          desc="Next-generation stations designed for you."
        />

        <div className="hidden md:block w-px h-8 md:h-12 bg-slate-200 absolute right-1/3 top-1/2 -translate-y-1/2"></div>

        <Pillar 
          icon={<ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-tmd-green" />}
          title="Customer First"
          desc="Operations built on trust and efficiency."
        />

      </div>
    </section>
  );
};

// Helper Component for Pillars
const Pillar: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-1 md:gap-2 group">
    <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-tmd-blue/20 transition-colors">
      {icon}
    </div>
    <h3 className="font-bold text-tmd-dark text-base md:text-lg">{title}</h3>
    <p className="text-xs md:text-sm text-slate-400 max-w-[200px] leading-snug hidden md:block">{desc}</p>
  </div>
);