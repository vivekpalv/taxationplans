"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // In a real application, you would capture the form data here 
    // and send it to your Java Spring Boot backend. 
    // Example: await fetch('/api/signup', { method: 'POST', body: ... })
    
    // After successful signup, redirect to the Thank You / Download page:
    router.push('/thank-you');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Glass Card */}
      <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-8 relative z-10">
        
        {/* Logo Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block text-3xl font-extrabold tracking-tighter mb-2">
            <span className="text-white">Taxation</span>
            <span className="text-green-500">Plans</span>
          </Link>
          <p className="text-gray-400 text-sm">Create your free account to get started.</p>
        </div>

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSignUp}>
          
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
              placeholder="Rahul Sharma"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
              placeholder="rahul@company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-800 bg-gray-900 text-gray-400 font-medium text-sm">
                +91
              </span>
              <input 
                type="tel" 
                required
                pattern="[0-9]{10}"
                className="w-full bg-black border border-gray-800 rounded-r-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                placeholder="98765 43210"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-500 text-black font-bold rounded-lg px-4 py-3.5 mt-4 hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Already have an account?{' '}
          <Link href="/login" className="text-green-500 hover:text-green-400 font-medium transition-colors">
            Log in
          </Link>
        </p>
      </div>

    </div>
  );
}