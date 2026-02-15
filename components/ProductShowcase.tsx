import React, { useState } from 'react';
import { Plus, Minus, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Hard Shell Tactical Knee Pads',
    description: 'Experience top-tier comfort and performance with the Tactical Pro DKP Knee Pads. Designed to give full range of motion in extreme tactical situations. Molded with non-slip, flexible thermoplastic polyurethane (TPU) plates, these knee pads deflect blows from flying debris and provide protection on hard surfaces. Made with high tenacity, air-textured professional-grade synthetic materials, these knee pads offer superior tear and abrasion resistance. They feature dual hook and loop straps with an ergonomic curved form and composed of closed cell foam that ensures excellent cushioning and shock protection. These knee pads are assured not to absorb and hold water.',
    images: ['/assets/images/elite_pro_guard_v3.avif'],
    features: [
      'Hard shell polyurethane thermoplastic non-slip caps for added durability',
      'Reinforced foam padding for optimal shock absorption and comfort',
      'Two adjustable elastic straps with Velcro and D-rings for secure and custom fit',
      'High tenacity, air-textured professional synthetic outer materials for superior abrasion and tear resistance',
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
    name: 'Defender Riot Control Gloves',
    description: 'Expertly engineered for high-risk operations such as civil disturbances and high-threat level situations. These gloves feature molded hard-shell carbon-composite on the knuckles and panels to effectively deflect blows and flying debris. Integrated foam-injected padding provides superior shock protection for the knuckles and wrist while maintaining ergonomic flexibility.',
    images: ['/assets/images/control_gloves_1.avif', '/assets/images/control_gloves_2.avif'],
    features: [
      'Molded hard-shell carbon-composite knuckles for maximum impact deflection',
      'Foam-injected padding for enhanced knuckle and wrist protection',
      'Durable leather shell with reinforced palms for superior longevity',
      'Double-reinforced stitching in high-stress areas',
      'Elasticized wrist with Velcro® closure for a secure, customized fit',
      'Inner lining of bonded breathable tricot for moisture management',
      'Designed specifically for riot control and high-risk inmate movement',
      'Model: Defender Series'
    ],
    specs: { material: 'Leather / Carbon-Composite', weight: '150g', certification: 'CE EN1621', impactRating: 'Level 1' }
  },
  {
    id: 'p3',
    name: 'DNSG Pro Shin Guard',
    description: 'The DNSG Tactical Shin Guards provide stealthy, professional-grade protection for law enforcement and tactical teams. Constructed with a durable neoprene outer shell and reinforced stitching, these guards are designed to be silent, form-fitting, and exceptionally impact-resistant. They feature Grip-Tech™ non-slip technology for maximum durability and grip during high-intensity operations.',
    images: ['/assets/images/knee_pads_protector.jpg'],
    features: [
      'Stealthy durable neoprene outer shell with reinforced stitching',
      'Shock-absorbing 10mm closed-cell foam for silent operation',
      'Grip-Tech™ Non-slip reinforced grip technology on key impact zones',
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
    specs: { material: 'Polymer / Nylon', weight: '220g', certification: 'CE Level 1', impactRating: 'Tactical Grade' }
  }
];

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
    <div className="group bg-white rounded-2xl shadow-airy hover:shadow-float transition-all duration-500 overflow-hidden border border-white hover:border-gray-100 flex flex-col h-full">
      <div
        className="relative aspect-square md:aspect-[16/10] bg-gray-50 overflow-hidden cursor-pointer p-4 sm:p-6"
        onClick={() => navigate(`/product/${product.id}`)}
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
            View Details
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