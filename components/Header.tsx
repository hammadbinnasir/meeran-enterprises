import React, { useState, useEffect } from 'react';
import { Globe, ShoppingBag, Menu, Search, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';

const TrackingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleTrack = () => {
    if (!trackingId) return;
    setIsTracking(true);
    setTimeout(() => {
      setIsTracking(false);
      setStatus('In Transit - Your order is being processed at our Logistics Hub.');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-zoom-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
          <X size={20} />
        </button>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-4">
            <Globe size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Track Your Order</h3>
          <p className="text-gray-500 text-sm mt-2">Enter your global tracking ID to see real-time status.</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="ME-XXXX-XXXX"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all text-center font-mono uppercase tracking-widest"
          />
          <button
            onClick={handleTrack}
            disabled={isTracking || !trackingId}
            className="w-full py-4 bg-brand-900 text-white rounded-xl font-bold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTracking ? 'Searching Global Network...' : 'Track Package'}
          </button>
        </div>

        {status && (
          <div className="mt-8 p-4 bg-brand-50 rounded-xl border border-brand-100 animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-600 mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-brand-900 font-medium leading-relaxed">{status}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SearchOverlay: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] bg-white/95 backdrop-blur-xl animate-fade-in flex flex-col p-6">
      <div className="container mx-auto">
        <div className="flex justify-end mb-12">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={32} /></button>
        </div>
        <div className="max-w-4xl mx-auto w-full pt-20">
          <div className="relative group">
            <Search size={40} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-brand-600 transition-colors" />
            <input
              autoFocus
              type="text"
              placeholder="Search products, technology..."
              className="w-full bg-transparent border-b-2 border-gray-100 py-6 pl-16 text-3xl md:text-5xl font-light focus:outline-none focus:border-brand-600 transition-all placeholder:text-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: any[];
  onSuccess: () => void
}> = ({ isOpen, onClose, items, onSuccess }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess();
        onClose();
        setStep('form');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[130] overflow-y-auto overflow-x-hidden">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-brand-900/40 backdrop-blur-md animate-fade-in"
          onClick={step === 'form' ? onClose : undefined}
        />

        {/* Modal Container */}
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl animate-zoom-in my-8">
          {step === 'form' && (
            <div className="p-8 md:p-12">
              <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900"><X size={20} /></button>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Finalize Order</h3>
                <p className="text-gray-500 text-sm mt-1">Shipping from Global Logistics Hub</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-brand-600 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-brand-600 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Shipping Address</label>
                  <textarea required value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-brand-600 transition-colors h-24 resize-none" placeholder="Enter Full Shipping Address (Street, City, Country)" />
                </div>

                <div className="pt-6 border-t border-gray-50 mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500 font-medium">Order items</span>
                    <span className="text-xl font-bold text-brand-900">{items.length} units</span>
                  </div>
                  <button type="submit" className="w-full py-4 bg-brand-900 text-white rounded-xl font-bold shadow-xl shadow-brand-900/20 hover:bg-brand-800 transition-all active:scale-95">
                    Confirm Quote Request
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'processing' && (
            <div className="p-20 text-center space-y-6 animate-pulse">
              <div className="w-20 h-20 border-4 border-brand-100 border-t-brand-900 rounded-full animate-spin mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Securing Transaction...</h3>
              <p className="text-gray-500 text-sm">Our global payment gateway is verifying your details.</p>
            </div>
          )}

          {step === 'success' && (
            <div className="p-20 text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <ChevronRight size={40} className="rotate-[-90deg]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
              <p className="text-gray-500 mb-8">Thank you for choosing Raza Meeran Enterprises. Your tactical gear is being prepared for dispatch.</p>
              <div className="inline-block px-4 py-2 bg-gray-50 rounded-full text-xs font-mono text-gray-400 uppercase tracking-widest">
                Order ID: RME-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CartDrawer: React.FC<{ isOpen: boolean; onClose: () => void; items: any[]; onRemove: (id: string) => void; onCheckout: () => void }> = ({ isOpen, onClose, items, onRemove, onCheckout }) => {
  return (
    <div className={`fixed inset-0 z-[120] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold">Your Cart ({items.length})</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors"><X size={20} /></button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-6 bg-gray-50 rounded-full text-gray-300"><ShoppingBag size={48} /></div>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in group">
                <div className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 p-2">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-xs text-red-500 font-medium mt-2 hover:underline">Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-gray-900">Items</span>
              <span className="text-brand-600">{items.length}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-4 bg-brand-900 text-white rounded-xl font-bold shadow-lg shadow-brand-900/10 hover:bg-brand-800 transition-all active:scale-95"
            >
              Secure Quote Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const Header: React.FC<{
  cartItems?: any[];
  onRemoveFromCart?: (id: string) => void;
  onClearCart?: () => void;
}> = ({ cartItems = [], onRemoveFromCart = () => { }, onClearCart = () => { } }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Products', href: isHome ? '#products' : '/#products' },
    { label: 'Technology', href: isHome ? '#technology' : '/#technology' },
    { label: 'Global Hub', href: isHome ? '#location' : '/#location' },
    { label: 'Logistics', href: isHome ? '#logistics' : '/#logistics' },
    { label: 'Legal', href: isHome ? '#certifications' : '/#certifications' },
    { label: 'Wholesale', href: isHome ? '#wholesale' : '/#wholesale' },
  ];

  const useWhiteText = isHome && !isScrolled && !isMobileMenuOpen;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 120;
      let current = '';
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isTrackModalOpen || isSearchOpen || isCartOpen || isCheckoutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isTrackModalOpen, isSearchOpen, isCartOpen, isCheckoutOpen]);

  useEffect(() => {
    const handleOpenTracker = () => {
      setIsTrackModalOpen(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleOpenCart = () => setIsCartOpen(true);

    window.addEventListener('open-tracker', handleOpenTracker);
    window.addEventListener('open-cart', handleOpenCart);

    return () => {
      window.removeEventListener('open-tracker', handleOpenTracker);
      window.removeEventListener('open-cart', handleOpenCart);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => isHome && window.scrollTo({ top: 0, behavior: 'smooth' })} className="z-50 relative hover:opacity-80 transition-opacity">
          <Logo className="h-9" variant={isHome && !isScrolled && !isMobileMenuOpen ? 'light' : 'dark'} />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.split('#')[1];
            const baseTextColor = isHome && !isScrolled ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-brand-600';
            const activeTextColor = isHome && !isScrolled ? 'text-white font-bold' : 'text-brand-600 font-bold';

            return isHome ? (
              <a key={link.label} href={link.href} className={`transition-colors relative py-1 ${isActive ? activeTextColor : baseTextColor}`}>
                {link.label}
                {isActive && <span className={`absolute bottom-0 left-0 w-full h-1 rounded-full animate-fade-in ${isHome && !isScrolled ? 'bg-white' : 'bg-brand-600'}`}></span>}
              </a>
            ) : (
              <Link key={link.label} to={link.href} className={`transition-colors py-1 ${baseTextColor}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)} className={`p-2 transition-colors ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : 'text-gray-500 hover:text-brand-600'}`}><Search size={20} /></button>
          <button onClick={() => setIsTrackModalOpen(true)} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-semibold ${isHome && !isScrolled ? 'border-white/30 bg-white/10 text-white hover:bg-white/20' : 'border-gray-200 bg-white/50 text-brand-900 hover:bg-white hover:shadow-md'}`}>Track Order</button>
          <button onClick={() => setIsCartOpen(true)} className={`relative p-2 transition-colors ${isHome && !isScrolled ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-brand-600'}`}>
            <ShoppingBag size={20} />
            {cartItems.length > 0 && <span className="absolute top-0 right-0 w-4 h-4 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-zoom-in">{cartItems.length}</span>}
          </button>
        </div>

        <button className={`md:hidden p-2 z-50 relative ${isHome && !isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-gray-800'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>


        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden animate-slide-down overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                isHome ? (
                  <a
                    key={link.label} href={link.href}
                    className={`flex items-center justify-between text-2xl font-medium py-4 border-b border-gray-100 group active:text-brand-600 ${activeSection === link.href.substring(1) ? 'text-brand-600' : 'text-gray-900'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    <ChevronRight size={20} className={activeSection === link.href.substring(1) ? 'text-brand-600' : 'text-gray-300'} />
                  </a>
                ) : (
                  <Link
                    key={link.label} to={link.href}
                    className="flex items-center justify-between text-2xl font-medium py-4 border-b border-gray-100 group text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                    <ChevronRight size={20} className="text-gray-300" />
                  </Link>
                )
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <button onClick={() => { setIsTrackModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-gray-50 text-brand-900 font-medium active:bg-gray-100">
                <span>Track Order</span>
                <Globe size={20} />
              </button>
              <button onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-900 text-white font-bold shadow-lg shadow-brand-900/10 active:scale-95 transition-transform">
                <ShoppingBag size={20} />
                Go to Cart ({cartItems.length})
              </button>
            </div>
          </div>
        )}
      </div>
      <TrackingModal isOpen={isTrackModalOpen} onClose={() => setIsTrackModalOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={onRemoveFromCart}
        onCheckout={() => { setIsCheckoutOpen(true); setIsCartOpen(false); }}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onSuccess={onClearCart}
      />
    </header>
  );
};