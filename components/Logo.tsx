import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
    showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark', showText = true }) => {
    const primaryColor = variant === 'dark' ? '#0f172a' : '#ffffff';
    const accentColor = '#3b82f6';
    const logoId = React.useId();

    return (
        <div className={`flex items-center gap-4 ${className} group`}>
            <div className="relative h-full aspect-square">
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full drop-shadow-sm"
                >
                    <defs>
                        <linearGradient id={`${logoId}-accent-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                        <linearGradient id={`${logoId}-surface-gradient`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={variant === 'dark' ? '#1e293b' : '#f8fafc'} />
                            <stop offset="100%" stopColor={primaryColor} />
                        </linearGradient>
                    </defs>

                    {/* Abstract Geometric 'M' - Left Plane */}
                    <path
                        d="M15 80V25L45 55V85L15 80Z"
                        fill={`url(#${logoId}-surface-gradient)`}
                        className="transition-all duration-500"
                    />

                    {/* Abstract Geometric 'M' - Center Bridge */}
                    <path
                        d="M45 55L50 50L55 55V85L50 82L45 85V55Z"
                        fill={accentColor}
                        fillOpacity="0.8"
                    />

                    {/* Abstract Geometric 'M' - Right Plane */}
                    <path
                        d="M85 80V25L55 55V85L85 80Z"
                        fill={`url(#${logoId}-accent-gradient)`}
                        className="transition-all duration-500"
                    />

                    {/* Top Structural Frame */}
                    <path
                        d="M15 25L50 10L85 25"
                        stroke={primaryColor}
                        strokeWidth="4"
                        strokeLinecap="square"
                        strokeOpacity="0.2"
                    />
                </svg>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-brand-500/10 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>

            {showText && (
                <div className="flex flex-col leading-none">
                    <span className={`text-xl font-black tracking-tighter uppercase ${variant === 'dark' ? 'text-brand-900' : 'text-white'}`}>
                        Meeran
                    </span>
                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase opacity-50 ${variant === 'dark' ? 'text-brand-900' : 'text-white'}`}>
                        Enterprises
                    </span>
                </div>
            )}
        </div>
    );
};
