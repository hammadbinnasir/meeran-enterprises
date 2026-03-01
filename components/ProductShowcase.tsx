import React, { useState } from 'react';
import { Plus, Minus, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { products } from '../data/products';

const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (p: Product) => void;
}> = ({ product, onAddToCart }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div
      className="group bg-white rounded-2xl shadow-airy hover:shadow-float transition-all duration-500 overflow-hidden border border-white hover:border-gray-100 flex flex-col h-full cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-square md:aspect-[16/10] bg-gray-50 overflow-hidden p-4 sm:p-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-md high-quality-img"
        />

        {/* Quick View Overlay Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white/95 backdrop-blur shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomIn size={14} />
            View Details
          </div>
        </div>

        {product.status && (
          <div className={`absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase pointer-events-none shadow-sm z-10 backdrop-blur-md ${product.status === 'In Stock' ? 'bg-green-500/90 text-white' :
            product.status === 'Coming Soon' ? 'bg-amber-500/90 text-white' :
              product.status === 'In Progress' ? 'bg-blue-500/90 text-white' :
                'bg-gray-500/90 text-white'
            }`}>
            {product.status}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight truncate">{product.name}</h3>
            <p className="text-[10px] text-gray-500 line-clamp-2 pr-2">{product.description}</p>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <button
            onClick={(e) => { e.stopPropagation(); setShowSpecs(!showSpecs); }}
            className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brand-600 transition-colors py-2 border-b border-gray-100"
          >
            <span>Tactical Specs</span>
            {showSpecs ? <Minus size={14} /> : <Plus size={14} />}
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSpecs ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 pb-4">
              <span className="text-gray-400 uppercase font-medium">Material</span>
              <span className="text-right">{product.specs.material}</span>
              <span className="text-gray-400 uppercase font-medium">Weight</span>
              <span className="text-right">{product.specs.weight}</span>
              <span className="text-gray-400 uppercase font-medium">Cert.</span>
              <span className="text-right">{product.specs.certification}</span>
              <span className="text-gray-400 uppercase font-medium">Rating</span>
              <span className="text-right">{product.specs.impactRating}</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 ${isAdded
              ? 'bg-green-600 text-white shadow-green-900/10'
              : 'bg-brand-900 text-white shadow-brand-900/10 hover:bg-brand-600'
              }`}
          >
            {isAdded ? 'Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductShowcase: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">The Collection</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Engineered for Performance</h3>
          <p className="text-gray-500 font-light">
            Each piece is rigorously tested against international safety standards.
            Choose the protection level that fits your discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};