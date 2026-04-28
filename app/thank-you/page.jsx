"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Download, Monitor, Apple, ArrowRight } from 'lucide-react';

export default function ThankYou() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  // Simulate an automatic download trigger after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setDownloadStarted(true);
      // In production, you would trigger your actual file download here
      // window.location.href = '/downloads/taxation-plans-setup.exe';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-green-500 selection:text-black">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Navbar Minimal */}
      <div className="absolute top-0 w-full p-6 flex justify-center z-20">
        <Link href="/" className="inline-block text-2xl font-extrabold tracking-tighter">
          <span className="text-white">Taxation</span>
          <span className="text-green-500">Plans</span>
        </Link>
      </div>

      {/* Main Glass Card */}
      <div className="w-full max-w-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative z-10 text-center mt-12">
        
        {/* Success Animation / Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 rounded-full"></div>
            <CheckCircle size={64} className="text-green-500 relative z-10" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Account created successfully!
        </h1>
        
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Welcome aboard. We've sent a confirmation link to your email.
        </p>

        {/* Dynamic Download Status Card */}
        <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 mb-10">
          {downloadStarted ? (
            <div className="flex flex-col items-center text-green-400">
              <Download size={24} className="mb-2 animate-bounce" />
              <p className="font-semibold">Your download is starting...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p>Preparing your secure download...</p>
            </div>
          )}
        </div>

        {/* Manual Fallback Downloads */}
        <div className="mb-10">
          <p className="text-sm text-gray-500 mb-4">
            Didn't start automatically? Choose your operating system below:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-black hover:bg-green-50 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Monitor size={18} />
              Windows (.exe)
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-800 text-white border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-xl font-bold text-sm transition-all">
              <Apple size={18} />
              macOS (.dmg)
            </button>
          </div>
        </div>

        {/* Next Steps / Instructions */}
        <div className="border-t border-gray-800 pt-8 text-left">
          <h3 className="text-white font-semibold mb-4 text-center">Next Steps</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-gray-800 text-green-500 flex items-center justify-center font-bold text-sm mb-3 mx-auto sm:mx-0">1</div>
              <h4 className="text-white text-sm font-medium mb-1">Install</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Run the downloaded file to install the application.</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-gray-800 text-green-500 flex items-center justify-center font-bold text-sm mb-3 mx-auto sm:mx-0">2</div>
              <h4 className="text-white text-sm font-medium mb-1">Log In</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Open the app and log in with your new email and phone number.</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-gray-800 text-green-500 flex items-center justify-center font-bold text-sm mb-3 mx-auto sm:mx-0">3</div>
              <h4 className="text-white text-sm font-medium mb-1">Create Ledger</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Set up your company profile and start generating vouchers!</p>
            </div>
          </div>
        </div>

      </div>

      {/* Return Home Link */}
      <div className="relative z-10 mt-8">
        <Link href="/" className="text-gray-500 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
          Return to Homepage <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}