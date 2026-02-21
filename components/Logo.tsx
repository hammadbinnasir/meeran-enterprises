import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'dark', showText = true }) => {
    return (
        <div className={`flex items-center gap-3 ${className} group cursor-pointer`}>
            <div className="relative h-full aspect-square flex-shrink-0">
                <img
                    src="/logo-premium.png"
                    alt="Meeran Enterprises Logo"
                    className="h-full w-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110"
                    style={{ imageRendering: 'high-quality' }}
                />
            </div>

            {showText && (
                <div className="flex flex-col leading-none border-l border-gray-200/50 pl-3 py-1">
                    <span className={`text-xl font-bold tracking-tight ${variant === 'dark' ? 'text-gray-900' : 'text-white'}`}>
                        Meeran
                    </span>
                    <span className={`text-[9px] font-bold tracking-[0.25em] uppercase opacity-60 ${variant === 'dark' ? 'text-gray-500' : 'text-white/80'}`}>
                        Enterprises
                    </span>
                </div>
            )}
        </div>
    );
};
