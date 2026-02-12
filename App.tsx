import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Technology } from './components/Technology';
import { ProductShowcase } from './components/ProductShowcase';
import { Logistics } from './components/Logistics';
import { Wholesale } from './components/Wholesale';
import { Footer } from './components/Footer';

import { Product } from './types';

function App() {
  const [cartItems, setCartItems] = React.useState<Product[]>([]);

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
      <main>
        <Hero />
        <Technology />
        <ProductShowcase onAddToCart={addToCart} />
        <Logistics />
        <Wholesale />
      </main>
      <Footer />
    </div>
  );
}

export default App;