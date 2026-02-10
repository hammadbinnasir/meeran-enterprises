import React, { useState } from 'react';
import { Plus, Minus, Info, X, ZoomIn } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Elite Pro Guard V3',
    price: 129.00,
    description: 'Hybrid construction with a hard-shell impact cap and moisture-wicking mesh chassis.',
    // Tactical gear
    image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=800&q=80',
    specs: { material: 'Carbon Fiber Hybrid', weight: '180g', certification: 'ISO 9001', impactRating: 'Level 2' }
  },
  {
    id: 'p2',
    name: 'AeroLite Tactical',
    price: 65.00,
    description: 'Compact, low-profile protection with high-density EVA foam. Ideal for rapid maneuvers.',
    // Dark tactical bag/accessory
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80',
    specs: { material: 'Ballistic Nylon', weight: '120g', certification: 'CE EN1621', impactRating: 'Level 1' }
  },
  {
    id: 'p3',
    name: 'Titanium Recon',
    price: 189.00,
    description: 'Full-coverage shin and knee articulation. Military-grade impact dispersion.',
    image: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?auto=format&fit=crop&w=800&q=80',
    specs: { material: 'Titanium / Polymer', weight: '240g', certification: 'ANSI/ISEA', impactRating: 'Level 3' }
  }
];

const ProductModal: React.FC<{ product: Product | null; onClose: () => void; onAddToCart: (p: Product) => void }> = ({ product, onClose, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-zoom-in flex flex-col md:flex-row max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-gray-800 hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/3 bg-gray-50 flex items-center justify-center p-12 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-[50vh] md:max-h-full drop-shadow-xl"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/3 p-8 md:p-10 bg-white flex flex-col overflow-y-auto">
          <div className="mb-auto">
            <span className="inline-block px-2 py-1 bg-brand-50 text-brand-900 text-[10px] font-bold uppercase tracking-wider rounded mb-3">
              Best Seller
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-brand-600 font-medium text-xl mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">{product.description}</p>

            <div className="space-y-4 border-t border-gray-100 pt-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm items-center">
                  <span className="text-gray-400 uppercase text-xs font-semibold tracking-wide">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleAdd}
              className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 duration-200 ${isAdded ? 'bg-green-600 text-white shadow-green-900/10' : 'bg-brand-900 text-white hover:bg-brand-800 shadow-brand-900/10'
                }`}
            >
              {isAdded ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{
  product: Product;
  onOpen: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}> = ({ product, onOpen, onAddToCart }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-airy hover:shadow-float transition-all duration-500 overflow-hidden border border-white hover:border-gray-100 flex flex-col h-full">
      <div
        className="relative aspect-[16/10] bg-gray-50 overflow-hidden cursor-zoom-in p-6"
        onClick={() => onOpen(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-md"
        />

        {/* Quick View Overlay Badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white/95 backdrop-blur shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ZoomIn size={14} />
            Quick View
          </div>
        </div>

        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase text-gray-800 pointer-events-none shadow-sm z-10">
          In Stock
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{product.name}</h3>
            <p className="text-xs text-gray-500 line-clamp-2 pr-2">{product.description}</p>
          </div>
          <span className="text-base font-semibold text-brand-600">${product.price}</span>
        </div>

        <div className="mt-auto space-y-4">
          <button
            onClick={(e) => { e.stopPropagation(); setShowSpecs(!showSpecs); }}
            className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-brand-600 transition-colors py-2 border-b border-gray-100"
          >
            <span>Tech Specs</span>
            {showSpecs ? <Minus size={14} /> : <Plus size={14} />}
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSpecs ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 pb-4">
              <span className="text-gray-400">Material</span>
              <span className="text-right">{product.specs.material}</span>
              <span className="text-gray-400">Weight</span>
              <span className="text-right">{product.specs.weight}</span>
              <span className="text-gray-400">Cert.</span>
              <span className="text-right">{product.specs.certification}</span>
              <span className="text-gray-400">Rating</span>
              <span className="text-right">{product.specs.impactRating}</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-xl text-sm font-medium transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 ${isAdded
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

export const ProductShowcase: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">The Collection</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Engineered for Performance</h3>
          <p className="text-gray-500 font-light">
            Each piece is rigorously tested against international safety standards.
            Choose the protection level that fits your discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={setSelectedProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>

      {/* Product Modal Portal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
};