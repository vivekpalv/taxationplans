import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const features = [
    'Unlimited Invoices & Vouchers',
    'Auto-file GSTR-1, GSTR-2B & GSTR-3B',
    'Unlimited User Licenses',
    'Real-time Cloud Sync & Ledgers',
    'Complete Data Privacy & Security',
    'Export to PDF & Excel',
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-green-500 selection:text-black flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-medium text-xs tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            Early Access Free
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Enterprise-grade accounting. <br className="hidden md:block" />
            <span className="text-green-500">Currently 100% Free.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We are offering full, unrestricted access to Taxation Plan at zero cost. No hidden fees, no credit card required.
          </p>
        </div>

        {/* Single Free Pricing Card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col md:flex-row items-center p-8 md:p-12 rounded-3xl bg-gray-900 border border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)] overflow-hidden">
            
            {/* Background Glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]"></div>

            {/* Left side: Value prop */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-2">All Access Plan</h3>
              <p className="text-gray-400 text-sm mb-8">
                Everything you need to manage your business and GST filings completely free during our rollout period.
              </p>
              
              <div className="mb-8 flex items-baseline text-white">
                <span className="text-7xl font-extrabold tracking-tight">₹0</span>
              </div>

              <Link 
                href="/signup" 
                className="inline-block w-full text-center bg-green-500 text-black py-4 rounded-xl font-bold hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                Create Free Account
              </Link>
              <p className="text-xs text-gray-500 text-center mt-4">
                No credit card required to sign up.
              </p>
            </div>
            
            {/* Right side: Features */}
            <div className="w-full md:w-1/2 relative z-10 md:border-l md:border-gray-800 md:pl-12">
              <h4 className="text-white font-medium mb-6 text-lg">Everything included:</h4>
              <ul className="space-y-5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-300 text-sm">
                    <div className="bg-green-500/20 p-1 rounded-full mr-3 shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        
        {/* Trust / FAQ snippet */}
        <div className="max-w-2xl mx-auto px-4 text-center mt-24">
           <h3 className="text-xl font-bold text-white mb-4">Why is it free?</h3>
           <p className="text-gray-400 text-sm leading-relaxed">
             We are currently in our early access rollout phase. Our goal right now is to build the best possible product for Bharat's businesses by gathering feedback from real users. By joining now, you get to use our premium tools completely free.
           </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}