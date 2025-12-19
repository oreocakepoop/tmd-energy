import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-slate-50">
        {/* Subtle Gradient Mesh */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-3xl filter mix-blend-multiply opacity-70 animate-pulse-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green-100/40 blur-3xl filter mix-blend-multiply opacity-70" />
        
        {/* Architectural / Road Lines Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-tmd-blue"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Dynamic Sweep Line (Energy flow) */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
            <path 
                d="M-100 800 C 200 600, 400 800, 600 400 S 1000 200, 1600 0" 
                stroke="url(#gradient-line)" 
                strokeWidth="2"
                fill="none"
            />
            <defs>
                <linearGradient id="gradient-line" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2E8B57" />
                    <stop offset="100%" stopColor="#0047AB" />
                </linearGradient>
            </defs>
        </svg>
    </div>
  );
};