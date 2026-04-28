import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Download for Windows', href: '#' },
      { name: 'Download for macOS', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'GST Tax Guide 2026', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'Community Forum', href: '#' },
      { name: 'Help Center', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact Sales', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-white tracking-tighter">
                Taxation<span className="text-green-500">Plans</span>
              </span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-sm">
              The new age, cloud-native accounting software built specifically for Bharat. Fast, secure, and fully GST compliant.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">Twitter</span>
                {/* Native SVG Fallback for Twitter */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                {/* Native SVG Fallback for LinkedIn */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">GitHub</span>
                {/* Native SVG Fallback for GitHub */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 tracking-wide">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Taxation Plans. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
            <span>Product by </span>
            <a 
              href="#" 
              className="text-white font-semibold hover:text-green-400 transition-colors flex items-center gap-1"
            >
              Kuiperbeltlabs
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}