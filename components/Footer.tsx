import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6 animate-fade-in opacity-80">
      <div className="text-xs md:text-sm font-semibold text-slate-400 tracking-wide">
        TMD Energy © {new Date().getFullYear()} All Rights Reserved
      </div>

      <div className="flex items-center gap-6">
         {/* Social Icons - Inactive state as requested */}
         <div className="group cursor-not-allowed opacity-40 hover:opacity-40">
            <Linkedin className="w-4 h-4 text-tmd-dark" />
         </div>
         <div className="group cursor-not-allowed opacity-40 hover:opacity-40">
            <Twitter className="w-4 h-4 text-tmd-dark" />
         </div>
         <div className="group cursor-not-allowed opacity-40 hover:opacity-40">
            <Facebook className="w-4 h-4 text-tmd-dark" />
         </div>
      </div>
    </footer>
  );
};