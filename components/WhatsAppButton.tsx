import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
    const whatsappNumber = '+923000600903';
    const message = 'Hello Raza Meeran Enterprises, I would like to inquire about your products.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} fill="currentColor" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
                Chat with us
            </span>
        </a>
    );
};
