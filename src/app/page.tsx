import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Standard from '@/components/Standard';
import About from '@/components/About';
import Recipes from '@/components/Recipes';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Standard />
      <About />
      <Recipes />
      <FinalCTA />
      <Footer />
    </main>
  );
}

