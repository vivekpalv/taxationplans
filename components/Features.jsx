import { FileText, Calculator, ShieldCheck, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Comprehensive Vouchers',
      description: 'Easily manage Sales, Purchases, Payments, Receipts, and Journal entries from a single, intuitive sidebar.',
      icon: FileText,
    },
    {
      name: 'GST Ready Architecture',
      description: 'Built-in support for CGST, SGST, IGST, and comprehensive tax tracking tailored for the Indian tax system.',
      icon: Calculator,
    },
    {
      name: 'Lightning Fast Ledger',
      description: 'Fetch, track, and export account ledgers in milliseconds with our high-performance cloud infrastructure.',
      icon: Zap,
    },
    {
      name: 'Enterprise Grade Security',
      description: 'Your financial data is encrypted and backed up automatically, ensuring zero data loss.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div id="features" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Core Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Built for Modern Businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="absolute top-8 left-8 h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <feature.icon className="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-20">
                <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}