import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ShoppingCart, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/products';

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
        setTimeout(() => {
            setIsAdded(false);
            window.dispatchEvent(new CustomEvent('open-cart'));
        }, 800);
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
                                className="w-full h-full object-contain p-8 md:p-16 drop-shadow-2xl high-quality-img"
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
                                        {product.features?.map((feature, idx) => (
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
