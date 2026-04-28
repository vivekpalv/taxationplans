// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex-shrink-0 flex items-center">
//             <span className="text-2xl font-bold text-white tracking-tighter">
//               Taxation<span className="text-green-500">Plans</span>
//             </span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <Link href="#features" className="text-gray-300 hover:text-green-400 transition-colors">Features</Link>
//             <Link href="#interface" className="text-gray-300 hover:text-green-400 transition-colors">Interface</Link>
//             <Link href="#download" className="text-gray-300 hover:text-green-400 transition-colors">Download</Link>
//           </div>
//           <div>
//             <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(22,163,74,0.4)]">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Interface', href: '#interface' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-black tracking-tighter">
              Taxation<span className="text-green-500">Plans</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
               <Link 
                 key={link.name} 
                 href={link.href} 
                 className="relative text-sm font-medium text-gray-600 hover:text-black transition-colors group py-2"
               >
                 {link.name}
                 {/* Minimalist expanding underline animation */}
                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
               </Link>
            ))}
            <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-black focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-green-600 font-medium px-3 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-2 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium transition-all active:bg-gray-800">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}