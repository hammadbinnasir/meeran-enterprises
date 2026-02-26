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
                <div className="flex flex-col border-l-2 border-brand-500/30 pl-4 py-1.5 selection:bg-none">
                    <span className={`text-2xl font-black tracking-tight whitespace-nowrap leading-[1.1] ${variant === 'dark' ? 'text-gray-900' : 'text-white'}`}>
                        Raza Meeran
                    </span>
                    <span className={`text-[10px] font-bold tracking-[0.41em] uppercase opacity-70 whitespace-nowrap mt-0.5 ${variant === 'dark' ? 'text-gray-600' : 'text-white/90'}`}>
                        Enterprises
                    </span>
                </div>
            )}
        </div>
    );
};
