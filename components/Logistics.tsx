import React, { useRef } from 'react';
import { Plane, Ship, MapPin, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { ShippingRegion } from '../types';

const regions: ShippingRegion[] = [
  { id: '1', region: 'North America', time: '1-3 Business Days', cost: 'Free > $150', status: 'Fast' },
  { id: '2', region: 'European Union', time: '2-4 Business Days', cost: '€15 Flat Rate', status: 'On Time' },
  { id: '3', region: 'Asia Pacific', time: '3-6 Business Days', cost: '$20 Flat Rate', status: 'On Time' },
  { id: '4', region: 'Middle East', time: '3-5 Business Days', cost: '$25 Flat Rate', status: 'Fast' },
  { id: '5', region: 'Australia/NZ', time: '4-7 Business Days', cost: 'AUD 30', status: 'Delay' },
];

export const Logistics: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="logistics" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">Global Logistics Network</h2>
            <h3 className="text-3xl font-bold text-gray-900">Real-Time Shipping Estimates</h3>
          </div>
          <div className="flex items-center gap-12">
            <div className="hidden lg:block text-sm text-gray-500 max-w-xs">
              Direct from our automated distribution centers in Nevada, Rotterdam, and Singapore.
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all shadow-sm active:scale-95"
                aria-label="Scroll Left"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-brand-900 hover:text-white hover:border-brand-900 transition-all shadow-sm active:scale-95"
                aria-label="Scroll Right"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar pb-10"
      >
        <div className="flex gap-6 w-max mx-auto md:mx-0 px-6 md:px-0 md:pl-[max(1.5rem,calc((100vw-1280px)/2))] md:pr-[max(1.5rem,calc((100vw-1280px)/2))]">
          {regions.map((item) => (
            <div
              key={item.id}
              className="w-80 p-6 bg-white rounded-xl shadow-airy border border-gray-100 flex flex-col justify-between hover:shadow-float transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gray-50 rounded-lg text-gray-600">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${item.status === 'Delay'
                  ? 'bg-red-50 text-red-600 border-red-100'
                  : item.status === 'Fast'
                    ? 'bg-green-50 text-green-600 border-green-100'
                    : 'bg-blue-50 text-blue-600 border-blue-100'
                  }`}>
                  {item.status === 'Delay' ? 'High Volume' : item.status}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.region}</h4>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 uppercase">Express Available</span>
                <span className="text-sm font-semibold text-gray-900">{item.cost}</span>
              </div>
            </div>
          ))}
          {/* CTA Card in Scroll */}
          <div className="w-80 p-6 bg-brand-900 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
            <Plane className="text-white mb-4 opacity-80" size={32} />
            <h4 className="text-xl font-bold text-white mb-2">Not Listed?</h4>
            <p className="text-gray-300 text-sm mb-6">We ship to 195+ countries via premium couriers.</p>
            <button className="px-6 py-2 bg-white text-brand-900 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};