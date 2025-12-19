import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between animate-fade-in">
      {/* Logo Representation based on provided image */}
      <div className="flex items-center gap-2 group cursor-default">
        {/* Abstract Logo Icon constructed with CSS to match brand colors */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
           <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
             <path d="M10 50 Q 50 10 90 20 L 80 40 Q 50 30 20 60 Z" fill="#2E8B57" /> {/* Green Swoosh */}
             <path d="M10 50 Q 50 90 90 80 L 95 60 Q 50 70 20 50 Z" fill="#0047AB" /> {/* Blue Swoosh */}
             <path d="M85 25 L 95 10 L 100 35 Z" fill="#E31E24" /> {/* Red Arrow Tip */}
             <path d="M15 45 Q 30 40 45 42" stroke="#FDB913" strokeWidth="4" fill="none" /> {/* Yellow Accent */}
           </svg>
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight italic leading-none">
                <span className="text-tmd-green">TM</span>
                <span className="text-tmd-blue">D</span>
            </h1>
            <span className="text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.2em] text-tmd-blue uppercase">Energy</span>
        </div>
      </div>

      {/* Disabled / Subtle Navigation */}
      <nav className="hidden md:flex gap-8">
        {['Home', 'About', 'Locations', 'Careers'].map((item) => (
          <span 
            key={item} 
            className="text-sm font-medium text-slate-400 cursor-not-allowed select-none hover:text-slate-500 transition-colors"
            aria-disabled="true"
          >
            {item}
          </span>
        ))}
      </nav>
      
      {/* Mobile Menu Placeholder (Visual only) */}
      <div className="md:hidden">
        <div className="space-y-1.5 opacity-40">
            <span className="block w-6 h-0.5 bg-tmd-dark"></span>
            <span className="block w-6 h-0.5 bg-tmd-dark"></span>
            <span className="block w-4 h-0.5 bg-tmd-dark ml-auto"></span>
        </div>
      </div>
    </header>
  );
};