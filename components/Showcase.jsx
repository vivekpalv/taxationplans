"use client";

import { useState, useEffect } from 'react';

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "sales",
      title: "Sales & Invoicing",
      desc: "Process GST-compliant invoices in seconds with real-time tax calculations.",
      img: "/sale.png",
    },
    {
      id: "gstr3b",
      title: "GSTR-3B Ready",
      desc: "Automate your tax returns with ready-to-upload GSTR-3B generation.",
      img: "/gstr3b.png",
    },
    {
      id: "payments",
      title: "Payment Tracking",
      desc: "Monitor cash flow, pending payables, and precise payment summaries.",
      img: "/pmt.png",
    },
    {
      id: "ledgers",
      title: "Real-time Ledgers",
      desc: "Fetch and export account ledgers instantly with our high-speed engine.",
      img: "/acc_ldg.png",
    }
  ];

  // Auto-play carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 5000); // Switches every 5 seconds

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section id="interface" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black tracking-tight sm:text-4xl">
            Everything at your fingertips
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A unified dashboard designed to eliminate clutter. Switch seamlessly between vouchers, ledgers, and tax filings.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-6 py-4 rounded-xl transition-all duration-300 w-full md:w-64 relative overflow-hidden ${
                activeIndex === index 
                  ? 'bg-white shadow-lg border-green-500 border ring-1 ring-green-500' 
                  : 'bg-transparent border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              {/* Animated Progress Bar Background for Active Tab */}
              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 h-1 bg-green-500 animate-[progress_5s_linear_infinite]" />
              )}
              
              <h3 className={`font-bold text-lg mb-1 transition-colors ${
                activeIndex === index ? 'text-green-600' : 'text-black'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-sm transition-colors ${
                activeIndex === index ? 'text-gray-700' : 'text-gray-500'
              }`}>
                {feature.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Carousel Image Display (Crossfade Effect) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle glowing background drop */}
          <div className="absolute -inset-1 bg-gradient-to-b from-green-500 to-transparent opacity-20 blur-2xl rounded-3xl"></div>
          
          <div className="relative aspect-[16/9] bg-gray-200 rounded-2xl border border-gray-300 shadow-2xl overflow-hidden flex items-center justify-center">
            
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="object-cover w-full h-full object-left-top"
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Tailwind Custom Animation for the Progress Bar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
    </section>
  );
}