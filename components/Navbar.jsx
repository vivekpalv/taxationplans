"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 1. Updated navigation links to point to the correct routes
  // Added '/' before anchors so they route back to the home page if you are on the Pricing page
  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Interface', href: '/#interface' },
    { name: 'Pricing', href: '/pricing' }, // Now points to the actual Pricing page
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/0 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-[#131426] tracking-tighter">
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
                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
               </Link>
            ))}
            {/* 2. Changed from <button> to <Link> to navigate to the SignUp page */}
            <Link 
              href="/signup" 
              className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
            >
              Sign In
            </Link>
          </div>

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
          {/* 3. Changed mobile button to <Link> as well */}
          <Link 
            href="/signup" 
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 text-center bg-black text-white px-5 py-3 rounded-xl text-sm font-medium transition-all active:bg-gray-800"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}