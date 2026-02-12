import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark', showText = true }) => {
    const primaryColor = variant === 'dark' ? '#0f172a' : '#ffffff'; // brand-900 or white
    const accentColor = '#3b82f6'; // brand-500

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto"
            >
                {/* Hexagonal Shield Background */}
                <path
                    d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z"
                    fill={primaryColor}
                />

                {/* Stylized 'M' */}
                <path
                    d="M25 70V30L50 50L75 30V70"
                    stroke={accentColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Bottom Accent Line */}
                <path
                    d="M35 80H65"
                    stroke={accentColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>

            {showText && (
                <span className={`text-xl font-bold tracking-tight ${variant === 'dark' ? 'text-brand-900' : 'text-white'}`}>
                    Meeran<span className={variant === 'dark' ? 'text-gray-400 font-medium ml-1' : 'text-white/60 font-medium ml-1'}>Enterprises</span>
                </span>
            )}
        </div>
    );
};
