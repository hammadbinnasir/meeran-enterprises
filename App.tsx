import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { ProductShowcase } from './components/ProductShowcase';
import { Location } from './components/Location';
import { Logistics } from './components/Logistics';
import { Wholesale } from './components/Wholesale';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Certifications } from './components/Certifications';

import { Product } from './types';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ProductPage } from './components/ProductPage';

const HomePage: React.FC<{ addToCart: (p: Product) => void }> = ({ addToCart }) => (
  <main>
    <Hero />
    <ProductShowcase onAddToCart={addToCart} />
    <Technology />
    <Location />
    <Logistics />
    <Certifications />
    <Wholesale />
  </main>
);

function App() {
  const [cartItems, setCartItems] = React.useState<Product[]>([]);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-brand-100 selection:text-brand-900">
      <Header
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />

      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;