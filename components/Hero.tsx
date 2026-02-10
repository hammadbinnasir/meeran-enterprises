import React from 'react';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold tracking-wide text-brand-600 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Global Shipping Active
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-brand-900 leading-[1.1] tracking-tight">
            Uncompromising <br className="hidden md:block" /> Protection. <br />
            <span className="text-gray-400 font-light">Delivered Worldwide.</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Engineered for elite athletes. Aerospace-grade impact absorption combined with featherlight ergonomics. The new standard in knee protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
            >
              Order Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('wholesale')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 hover:border-gray-800 text-gray-900 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              Wholesale Inquiry
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Rated 4.9/5 by <span className="text-gray-900 font-bold">10,000+ Bikers</span>
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full relative">
          <div className="relative z-10 w-full max-w-lg mx-auto aspect-[3/4] bg-gray-900 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] p-1 overflow-hidden group">
            <img
              src="/assets/images/hero_tactical.jpg"
              alt="Meeran Tactical Operator"
              className="w-full h-full object-cover rounded-[22px] contrast-[1.1] group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Floating Glass Badges */}
            <div className="absolute top-6 left-6 bg-brand-900/80 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-white border border-white/10 shadow-lg">
              OPERATIONAL GEAR
            </div>

            {/* Bottom Tech Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8 pt-20">
              <div className="flex items-center gap-4 animate-slide-up">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 backdrop-blur-md flex items-center justify-center text-brand-400 border border-brand-500/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-300 uppercase font-bold tracking-widest leading-none mb-1">Impact Rating</p>
                  <p className="text-lg font-bold text-white">15kN Absorbed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative background circle behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-900/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-brand-900/5 rounded-full pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};