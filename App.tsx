import React from 'react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-slate-50 text-tmd-dark selection:bg-tmd-blue selection:text-white">
      {/* Abstract Background Layer */}
      <Background />

      {/* Top Navigation / Branding */}
      <div className="z-10 w-full flex-none pt-6 px-6 md:px-12">
        <Header />
      </div>

      {/* Main Center Content */}
      <div className="z-10 flex-grow flex items-center justify-center w-full px-6 md:px-12">
        <Hero />
      </div>

      {/* Footer Content */}
      <div className="z-10 w-full flex-none pb-6 px-6 md:px-12">
        <Footer />
      </div>
    </main>
  );
}