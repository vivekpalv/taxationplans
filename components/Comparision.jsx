import { Check, X } from 'lucide-react';

export default function Comparison() {
  const data = [
    { feature: "Access Anywhere", us: true, legacy: false },
    { feature: "Auto-Cloud Backup", us: true, legacy: false },
    { feature: "No Manual Data Sync", us: true, legacy: false },
    { feature: "Native Mac Support", us: true, legacy: false },
    { feature: "Automatic GST Updates", us: true, legacy: "Manual" },
    { feature: "Modern Dark UI", us: true, legacy: false },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Taxation Plan?</h2>
          <p className="text-gray-400">Ditch the offline legacy. Embrace the cloud.</p>
        </div>

        <div className="overflow-hidden border border-gray-800 rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="p-5 text-gray-300 font-semibold border-b border-gray-800">Feature</th>
                <th className="p-5 text-green-500 font-bold border-b border-gray-800">Taxation Plan</th>
                <th className="p-5 text-gray-500 font-semibold border-b border-gray-800 text-center">Busy / Tally</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-900/30 transition-colors">
                  <td className="p-5 text-gray-400 font-medium">{row.feature}</td>
                  <td className="p-5 text-green-500"><Check size={20} /></td>
                  <td className="p-5 text-gray-600 flex justify-center">
                    {typeof row.legacy === 'string' ? row.legacy : <X size={20} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-gray-500 text-sm italic">
          * Taxation Plan is built cloud-native for real-time collaboration across offices.
        </p>
      </div>
    </section>
  );
}