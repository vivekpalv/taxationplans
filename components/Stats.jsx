export default function Stats() {
  const stats = [
    { value: "₹5B+", label: "Invoices Processed" },
    { value: "10,000+", label: "Active Businesses" },
    { value: "<1 ms", label: "Ledger Sync Delay" },
    { value: "99.99%", label: "Uptime SLA" },
  ];

  return (
    <section className="bg-green-600 border-y border-green-700 py-12 relative overflow-hidden">
      {/* Micro-pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-green-500/50">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i % 2 === 0 ? 'border-none md:border-solid' : 'border-none md:border-solid'} pl-0`}>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1 drop-shadow-md">
                {stat.value}
              </p>
              <p className="text-green-100 font-medium text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}