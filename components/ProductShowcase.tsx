import React, { useState } from 'react';
import { Plus, Minus, Info, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Hard Shell Knee Pads',
    description: 'Experience top-tier comfort and performance with the Imperial DKP Tactical Knee Pads. Designed to give full range of motion in extreme tactical situations. Molded with non-slip, flexible thermoplastic polyurethane (TPU) plates, these knee pads deflect blows from flying debris and provide protection on hard surfaces. Made with high tenacity, air-textured DuPont Ultra Cordura nylon materials, these knee pads offer superior tear and abrasion resistance. They feature dual hook and loop straps with an ergonomic curved form and composed of closed cell foam that ensures excellent cushioning and shock protection. These knee pads are assured not to absorb and hold water.',
    images: ['/assets/images/elite_pro_guard_v3.avif'],
    features: [
      'Hard shell polyurethane thermoplastic non-slip caps for added durability',
      'Reinforced foam padding for optimal shock absorption and comfort',
      'Two adjustable elastic straps with Velcro and D-rings for secure and custom fit',
      'High tenacity, air-textured DuPont Ultra Cordura nylon outer materials for superior abrasion and tear resistance',
      'Non-reflective tone-on-tone grommets with a dull finish for a sleek look',
      'Ergonomically curved form for enhanced comfort',
      'Interior name tags for personal identification',
      'Easily washable for maintenance',
      'One size fits all for convenience',
      'Sold as a pair',
      'Mfg# DKP-B'
    ],
    specs: { material: 'Carbon Fiber Hybrid', weight: '180g', certification: 'ISO 9001', impactRating: 'Level 2' }
  },
  {
    id: 'p2',
    name: 'Vector 1 Riot Control Gloves',
    description: 'Expertly engineered for high-risk operations such as civil disturbances and high-threat level situations. These gloves feature molded hard-shell Carbon-Tek fiber on the knuckles and panels to effectively deflect blows and flying debris. Integrated foam-injected padding provides superior shock protection for the knuckles and wrist while maintaining ergonomic flexibility.',
    images: ['/assets/images/control_gloves_1.avif', '/assets/images/control_gloves_2.avif'],
    features: [
      'Molded hard-shell Carbon-Tek™ fiber knuckles for maximum impact deflection',
      'Foam-injected padding for enhanced knuckle and wrist protection',
      'Durable leather shell with reinforced palms for superior longevity',
      'Double-reinforced stitching in high-stress areas',
      'Elasticized wrist with Velcro® closure for a secure, customized fit',
      'Inner lining of bonded breathable tricot for moisture management',
      'Designed specifically for riot control and high-risk inmate movement',
      'Model: Vector 1'
    ],
    specs: { material: 'Leather / Carbon-Tek', weight: '150g', certification: 'CE EN1621', impactRating: 'Level 1' }
  },
  {
    id: 'p3',
    name: 'DNSG Imperial Shin Guard',
    description: 'The DNSG Imperial Shin Guards provide stealthy, professional-grade protection for law enforcement and tactical teams. Constructed with a durable neoprene outer shell and reinforced stitching, these guards are designed to be silent, form-fitting, and exceptionally impact-resistant. They feature Trion-X™ non-slip technology for maximum durability and grip during high-intensity operations.',
    images: ['/assets/images/knee_pads_protector.jpg'],
    features: [
      'Stealthy durable neoprene outer shell with reinforced stitching',
      'Shock-absorbing 10mm closed-cell foam for silent operation',
      'Trion-X™ Non-slip reinforced grip technology on key impact zones',
      'Additional exterior padded protection in the shin section to deflect debris',
      'Multiple adjustable elastic straps and Velcro® closures for a secure fit',
      'Can be worn comfortably inside or outside of gear',
      'Ergonomic design for full range of motion',
      'Model: DNSG-B'
    ],
    specs: { material: 'Neoprene / TPU', weight: '240g', certification: 'ANSI/ISEA', impactRating: 'Level 3' }
  },
  {
    id: 'p4',
    name: 'Shell Knee Pads',
    description: 'Professional-grade protection for high-intensity operations. These shell knee pads are engineered for maximum durability and comfort in all-terrain environments. Featuring a rugged high-impact shell and non-slip surfaces, they provide reliable safety for tactical personnel and law enforcement.',
    images: [
      '/assets/images/short-kneepad_1.jpg',
      '/assets/images/short-kneepad_2.jpg',
      '/assets/images/short-kneepad_3.jpg',
      '/assets/images/short-kneepad_4.jpg',
      '/assets/images/short-kneepad_5.jpg',
      '/assets/images/short-kneepad_6.jpg'
    ],
    features: [
      'High-impact resistant outer shell for maximum tactical protection',
      'Dual-strap system with secure hook-and-loop closures',
      'Ergonomic foam padding for extended wear comfort',
      'Non-slip grip surface for stability on various terrains',
      'Lightweight and breathable design',
      'Stealth black professional finish',
      'Reinforced stitching for extreme durability',
      'Model: SKP-95 / Pro-Shell'
    ],
    specs: { material: 'Polymer / Nylon', weight: '220gSlice', certification: 'CE Level 1', impactRating: 'Tactical Grade' }
  }
];

const ProductModal: React.FC<{ product: Product | null; onClose: () => void; onAddToCart: (p: Product) => void }> = ({ product, onClose, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
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
        <div className="w-full md:w-2/3 bg-gray-50 flex items-center justify-center p-4 md:p-12 relative overflow-hidden group">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[70vh] drop-shadow-xl transition-all duration-500"
          />

          {product.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur rounded-full text-gray-800 hover:bg-white transition-all shadow-md opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur rounded-full text-gray-800 hover:bg-white transition-all shadow-md opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-brand-600 w-4' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/3 p-6 md:p-10 bg-white flex flex-col overflow-y-auto">
          <div className="mb-auto">
            <span className="inline-block px-2 py-1 bg-brand-50 text-brand-900 text-[10px] font-bold uppercase tracking-wider rounded mb-3">
              {product.id === 'p1' ? 'Best Seller' : 'Tactical Gear'}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">{product.name}</h3>

            <div className="mb-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Product Details</h4>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">{product.description}</p>

              {product.features && (
                <div className="mt-4">
                  <h5 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest mb-2">Tactical Specifications</h5>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-gray-600 leading-tight">
                        <span className="text-brand-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm items-center">
                  <span className="text-gray-400 uppercase text-[10px] font-bold tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
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
        className="relative aspect-square md:aspect-[16/10] bg-gray-50 overflow-hidden cursor-zoom-in p-4 sm:p-6"
        onClick={() => onOpen(product)}
      >
        <img
          src={product.images[0]}
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

export const ProductShowcase: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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