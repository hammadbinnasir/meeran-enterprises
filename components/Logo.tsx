import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark', showText = true }) => {
    return (
        <div className={`flex items-center gap-4 ${className} group cursor-pointer`}>
            <div className="relative h-full aspect-square flex-shrink-0">
                <img
                    src="/logo-premium.png"
                    alt="Raza Meeran Enterprises Logo"
                    className={`h-full w-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110 ${variant === 'light' ? 'brightness-0 invert' : ''}`}
                    style={{ imageRendering: 'high-quality' }}
                />
            </div>

            {showText && (
                <div className="flex flex-col border-l-2 border-brand-500/30 pl-6 py-1 selection:bg-none">
                    <span className={`text-3xl font-black tracking-tight whitespace-nowrap leading-[1] ${variant === 'dark' ? 'text-gray-900' : 'text-white'}`}>
                        Raza Meeran
                    </span>
                    <span className={`text-[12px] font-black tracking-[0.54em] uppercase whitespace-nowrap mt-0.5 ${variant === 'dark' ? 'text-gray-700' : 'text-white'}`}>
                        Enterprises
                    </span>
                </div>
            )}
        </div>
    );
};
