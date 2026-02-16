import React from 'react';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/global_shipping_hero.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Professional Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        {/* Text Content - Left Aligned for readability over complex backgrounds */}
        <div className="text-left space-y-6 md:space-y-8 max-w-2xl animate-fade-in pt-32 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold tracking-wide text-brand-300 uppercase mb-2 md:mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Global Shipping Active
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
            Uncompromising <br className="hidden md:block" /> Protection. <br />
            <span className="text-gray-400 font-light">Delivered Worldwide.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-lg font-light leading-relaxed drop-shadow-md">
            Engineered for elite athletes and tactical operators. Aerospace-grade impact absorption combined with featherlight ergonomics. The new standard in safety.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-start pt-2">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-brand-500/50 flex items-center justify-center gap-2 group border border-transparent"
            >
              Order Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('wholesale')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              Wholesale Inquiry
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-brand-200 font-bold">U{i}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              <p className="text-xs font-medium text-gray-400">
                Trusted by <span className="text-white font-bold">10,000+ Professionals</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right side spacer/visual area */}
        <div className="hidden md:flex justify-end items-center">
          {/* Optional: We could put a floating transparent spec card here later if needed, 
                but for now we keep it clean as requested "Single Pic" */}
        </div>
      </div>
    </section>
  );
};