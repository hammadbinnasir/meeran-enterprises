import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark', showText = true }) => {
    return (
        <div className={`flex items-center gap-3 ${className} group cursor-pointer`}>
            <div className="relative h-full aspect-square flex-shrink-0">
                <img
                    src="/logo-premium.png"
                    alt="Raza Meeran Enterprises Logo"
                    className={`h-full w-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110 ${variant === 'light' ? 'brightness-0 invert' : ''}`}
                    style={{ imageRendering: 'high-quality' }}
                />
            </div>

            {showText && (
                <div className="flex flex-col w-max group/logo-text">
                    <span
                        className={`text-2xl md:text-3xl font-cinzel font-bold tracking-tight leading-[0.9] whitespace-nowrap ${variant === 'dark' ? 'text-[#008037]' : 'text-white'}`}
                    >
                        RAZA MEERAN
                    </span>
                    <div
                        className={`flex justify-between mt-0.5 ${variant === 'dark' ? 'text-black' : 'text-white'}`}
                    >
                        {"ENTERPRISES".split("").map((char, index) => (
                            <span
                                key={index}
                                className="text-[9px] md:text-[11px] font-bold uppercase"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
