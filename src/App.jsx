
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductSection from "./components/ProductSection";
import OfferBanner from "./components/OfferBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>

      <div className="min-h-screen bg-white text-gray-900">

        <Navbar />

        <main>
          <Hero />

          <Categories />

          <ProductSection />

          <OfferBanner />

          <WhyChooseUs />

          <Newsletter />
        </main>

        <Footer />

      </div>

    </CartProvider>
  );
}

export default App;

