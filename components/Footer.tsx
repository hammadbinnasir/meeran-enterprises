import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Logo className="h-12" />
            <p className="text-sm text-gray-500">
              Redefining athletic safety through material science and ergonomic design.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Head Office</p>
              <address className="not-italic text-xs text-gray-500 leading-relaxed">
                Office no 29, 2nd floor, Bhutta Centre,<br />
                Main GT Road, Gujranwala
              </address>
            </div>
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
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-tracker'))} className="hover:text-brand-600 transition-colors">Track Order</button></li>
              <li><a href="#wholesale" className="hover:text-brand-600 transition-colors">Wholesale Inquiry</a></li>
              <li><a href="#technology" className="hover:text-brand-600 transition-colors">Technology</a></li>
              <li><a href="#certifications" className="hover:text-brand-600 transition-colors">Certifications</a></li>
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
            <div className="text-sm text-gray-500 space-y-2">
              <p className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                <Mail size={14} />
                info@meeranenterprises.com
              </p>
              <a href="https://wa.me/923000600903" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-2 hover:text-brand-600 transition-colors">
                <span className="font-bold">WhatsApp:</span>
                +92 300 0600903
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; 2026 Raza Meeran Enterprises. All rights reserved.</p>
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