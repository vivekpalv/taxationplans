"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Monitor } from 'lucide-react';

export default function Hero() {
  const [os, setOs] = useState('unknown');

  // The permanent link to your manual GitHub release
  const WINDOWS_DOWNLOAD_URL = "https://github.com/vivekpalv/taxation-plan-download/releases/latest/download/busyFX-1.0.exe";

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      setOs('windows');
    } else if (userAgent.includes('mac')) {
      setOs('mac');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-20 group">
      
      {/* Background SVG & Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-green-300/0 rounded-full blur-[100px] transition-all duration-1000 ease-in-out group-hover:bg-green-400/10 group-hover:scale-110"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50/50 text-gray-600 font-medium text-xs tracking-wide uppercase mb-8 shadow-sm backdrop-blur-sm">
          Made for Bharat 🇮🇳
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tight mb-6 leading-tight">
          The New Age <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
            Accounting Software
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
          Fast, cloud-native, and fully GST compliant. Replace your legacy desktop systems with a beautiful, minimalist workflow.
        </p>
        
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-wrap justify-center gap-4">
            
            {/* Windows Download Button */}
            {(os === 'windows' || os === 'unknown') && (
              <a 
                href={WINDOWS_DOWNLOAD_URL}
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-black text-white text-sm font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-[0_4px_20px_rgba(22,163,74,0.3)] hover:-translate-y-0.5"
              >
                <Monitor size={18} />
                <span>Download for Windows</span>
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </a>
            )}

            {/* Mac Button (Placeholder as you only have Windows build) */}
            {(os === 'mac') && (
              <button className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gray-200 text-gray-500 text-sm font-semibold cursor-not-allowed">
                <span>macOS Build Coming Soon</span>
              </button>
            )}
          </div>

          <p className="text-xs text-gray-400 font-medium mt-3">
            v1.0.0 • Requires Windows 10/11
          </p>
        </div>
      </div>
    </div>
  );
}