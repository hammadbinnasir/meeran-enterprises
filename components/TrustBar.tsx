import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section id="technology" className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* Mock Logos using Text/Icons for simplicity but styled to look like logos */}
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
             <div className="border-2 border-gray-800 p-1 rounded-sm">
                <span className="block text-2xl font-black text-gray-900 leading-none">CE</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Certified</span>
                <span className="text-xs font-bold text-gray-900">EN 1621-1:2012</span>
             </div>
          </div>

          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
             <div className="border-2 border-gray-800 p-1 rounded-full w-12 h-12 flex items-center justify-center">
                <span className="block text-sm font-black text-gray-900 leading-none">ISO</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Standard</span>
                <span className="text-xs font-bold text-gray-900">9001:2015</span>
             </div>
          </div>

          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
             <ShieldCheck size={40} className="text-gray-800" strokeWidth={1.5} />
             <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">ANSI/ISEA</span>
                <span className="text-xs font-bold text-gray-900">105-2016</span>
             </div>
          </div>

           <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
             <Award size={40} className="text-gray-800" strokeWidth={1.5} />
             <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Winner</span>
                <span className="text-xs font-bold text-gray-900">Red Dot Design</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};