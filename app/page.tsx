import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';       // New!
import Showcase from '@/components/Showcase';
import Workflow from '@/components/Workflow'; // New!
import Comparison from '@/components/Comparision';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen font-sans selection:bg-green-500 selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Showcase />
      <Workflow />
      <Comparison />
      <Features />
      <Footer />
    </main>
  );
}