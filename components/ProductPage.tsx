import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingCart, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Product } from '../types';

// We'll import products or have a way to fetch them. For now, we'll reuse the data structure.
// In a real app, this would be an API call or a shared state.
const products: Product[] = [
    {
        id: 'p-lnp-new',
        name: 'LNP-700 Extended Tactical Knee & Shin System',
        description: 'Engineered for maximum leg coverage, the LNP-700 provides seamless knee-to-shin protection without compromising mobility. Featuring an articulated dual-pivot system and high-density polymer plating, it ensures superior impact resistance against blunt force trauma and debris. The quick-release buckle system allows for rapid deployment in critical situations.',
        images: [
            '/assets/images/LNP_1.jpg',
            '/assets/images/LNP_2.jpg',
            '/assets/images/LNP_3.jpg',
            '/assets/images/LNP_4.jpg',
            '/assets/images/LNP_5.jpg',
            '/assets/images/LNP_6.jpg',
            '/assets/images/LNP_7.jpg'
        ],
        features: [
            'Articulated knee joint for unrestricted movement',
            'Full shin guard integration for extended coverage',
            'Quick-release buckle system for rapid don/doff',
            'Ventilated high-impact shell for breathability',
            'Moisture-wicking interior lining',
            'Anti-slip silicone grip lining',
            'Reinforced stitching at stress points',
            'Compatible with tactical pants and uniforms',
            'Model: LNP-700 / Series-X'
        ],
        specs: { material: 'Impact Polymer / 1000D Nylon', weight: '320g', certification: 'EN1621-1:2012', impactRating: 'Level 2' }
    },
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

export const ProductPage: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const found = products.find(p => p.id === id);
        if (found) {
            setProduct(found);
        }
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-brand-600 font-bold hover:underline"
                    >
                        Return to Store
                    </button>
                </div>
            </div>
        );
    }

    const handleAdd = () => {
        onAddToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Header */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-600 hover:text-brand-900 transition-colors font-medium group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Collection
                    </button>
                    <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                        <span>Home</span>
                        <span>/</span>
                        <span>Products</span>
                        <span>/</span>
                        <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Image Gallery */}
                    <div className="w-full lg:w-3/5">
                        <div className="relative aspect-square md:aspect-[4/3] bg-gray-50 rounded-3xl overflow-hidden group">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-contain p-8 md:p-16 drop-shadow-2xl"
                            />

                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)}
                                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur rounded-full text-gray-800 hover:bg-white transition-all shadow-xl opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={28} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur rounded-full text-gray-800 hover:bg-white transition-all shadow-xl opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={28} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 no-scrollbar">
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-brand-600 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-2/5 flex flex-col">
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-brand-50 text-brand-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                                    Elite Grade
                                </span>
                                <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                                    <ShieldCheck size={14} />
                                    In Stock
                                </span>
                            </div>

                            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                                {product.name}
                            </h1>

                            <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                                {product.description}
                            </p>

                            <div className="space-y-10">
                                <section>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Key Performance Features</h4>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex gap-4 text-sm text-gray-600 leading-relaxed items-start">
                                                <div className="w-5 h-5 rounded-full bg-brand-50 flex-shrink-0 flex items-center justify-center mt-0.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em] mb-4">Technical Specifications</h4>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        {Object.entries(product.specs).map(([key, value]) => (
                                            <div key={key} className="flex flex-col gap-1">
                                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                                <span className="text-sm font-bold text-gray-900">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button
                                onClick={handleAdd}
                                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl active:scale-[0.98] duration-300 flex items-center justify-center gap-3 ${isAdded
                                    ? 'bg-green-600 text-white shadow-green-900/20'
                                    : 'bg-brand-900 text-white hover:bg-black shadow-brand-900/30'
                                    }`}
                            >
                                {isAdded ? (
                                    <>Success!</>
                                ) : (
                                    <>
                                        <ShoppingCart size={20} />
                                        Secure Purchase
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
