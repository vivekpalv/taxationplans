import { Database, FileSpreadsheet, Send } from 'lucide-react';

export default function Workflow() {
  const steps = [
    {
      icon: Database,
      title: "1. Migrate or Connect",
      desc: "Import your legacy data from Tally or Busy with our 1-click migration tool, or start fresh in seconds.",
    },
    {
      icon: FileSpreadsheet,
      title: "2. Process Vouchers",
      desc: "Generate sales, purchases, and journals. Taxes (IGST/CGST) are calculated dynamically based on ledger rules.",
    },
    {
      icon: Send,
      title: "3. Auto-File & Export",
      desc: "Generate your GSTR-3B and GSTR-1 instantly. Export beautiful PDFs or send payment links directly to clients.",
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl mb-4">
            How Taxation Plans Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A frictionless workflow designed to get you from data-entry to tax-filing in record time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative group text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:border-green-500 transition-all duration-300 shadow-xl relative overflow-hidden">
                {/* Hover Glow inside box */}
                <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <step.icon size={32} className="text-green-500 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}