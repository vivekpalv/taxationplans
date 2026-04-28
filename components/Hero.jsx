"use client";

import { useState, useEffect } from 'react';
import { Monitor, Apple, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [os, setOs] = useState('unknown');

  useEffect(() => {
    // Smart OS detection for the download button
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      setOs('windows');
    } else if (userAgent.includes('mac')) {
      setOs('mac');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-20 group">
      
      {/* Background SVG & Subtle Green Hover Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Very subtle static grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
        
        {/* Glowing Orbs that reveal/shift on container hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-300/0 rounded-full blur-[100px] transition-all duration-1000 ease-in-out group-hover:bg-green-400/10 group-hover:scale-110"></div>
        <div className="absolute bottom-0 left-1/4 w-[20rem] h-[20rem] bg-emerald-200/0 rounded-full blur-[80px] transition-all duration-700 delay-100 ease-in-out group-hover:bg-emerald-300/20"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Minimal Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50/50 text-gray-600 font-medium text-xs tracking-wide uppercase mb-8 shadow-sm backdrop-blur-sm">
          Made for Bharat 🇮🇳
        </div>
        
        {/* Centered Typography */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tight mb-6 leading-tight">
          The New Age <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
            Accounting Software
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
          Fast, cloud-native, and fully GST compliant. Replace your legacy desktop systems with a beautiful, minimalist workflow.
        </p>
        
        {/* Smart Minimal Download Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* Windows Button (Shows if Windows or Unknown) */}
            {(os === 'windows' || os === 'unknown') && (
              <button className="group flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-[0_4px_20px_rgba(22,163,74,0.3)] hover:-translate-y-0.5">
                <span>Download for Windows</span>
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </button>
            )}

            {/* Mac Button (Shows if Mac or Unknown) */}
            {(os === 'mac' || os === 'unknown') && (
              <button className="group flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-[0_4px_20px_rgba(22,163,74,0.3)] hover:-translate-y-0.5">
                <span>Download for macOS</span>
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </button>
            )}
          </div>

          <p className="text-xs text-gray-400 font-medium mt-3">
            v2.4.0 • Requires {os === 'mac' ? 'macOS 12+' : 'Windows 10/11'}
          </p>

        </div>
      </div>
    </div>
  );
}