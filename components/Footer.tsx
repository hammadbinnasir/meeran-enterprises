import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-900 rounded flex items-center justify-center text-white font-bold text-xs">M</div>
              <span className="font-bold text-brand-900">Meeran Enterprises</span>
            </div>
            <p className="text-sm text-gray-500">
              Redefining athletic safety through material science and ergonomic design.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#products" className="hover:text-brand-600 transition-colors">Safety Helmets</a></li>
              <li><a href="#products" className="hover:text-brand-600 transition-colors">Knee Guards</a></li>
              <li><a href="#products" className="hover:text-brand-600 transition-colors">Tactical Sets</a></li>
              <li><a href="#logistics" className="hover:text-brand-600 transition-colors">Global Shipping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-600 transition-colors">Track Order</button></li>
              <li><a href="#wholesale" className="hover:text-brand-600 transition-colors">Wholesale Inquiry</a></li>
              <li><a href="#technology" className="hover:text-brand-600 transition-colors">Technology</a></li>
              <li><a href="#logistics" className="hover:text-brand-600 transition-colors">Logistics Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-brand-600"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600"><Linkedin size={20} /></a>
            </div>
            <div className="text-sm text-gray-500">
              <p>support@meeran.com</p>
              <p>+1 (800) 555-0123</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; 2026 Meeran Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
            <a href="#" className="hover:text-gray-600">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};