import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Recipes from '@/components/Recipes';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Recipes />
      <About />
      <Footer />
    </main>
  );
}

