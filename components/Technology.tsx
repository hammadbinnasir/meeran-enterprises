import React from 'react';
import { Shield, Brain, Zap, Award, Globe, CheckCircle2 } from 'lucide-react';

const technologies = [
    {
        icon: <Brain className="w-8 h-8 text-brand-500" />,
        title: "Carbon Composite",
        description: "Multi-axis carbon weave engineered for maximum impact deflection while maintaining ultra-lightweight performance.",
        accent: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: <Shield className="w-8 h-8 text-brand-500" />,
        title: "Tactical Aramid",
        description: "High-tenacity, air-textured professional-grade nylon for superior abrasion, tear, and scuff resistance in extreme conditions.",
        accent: "bg-brand-500/10",
        border: "border-brand-500/20"
    },
    {
        icon: <Zap className="w-8 h-8 text-brand-500" />,
        title: "Impact Dispersion",
        description: "Advanced 10mm closed-cell foam matrix that absorbs and redirects kinetic energy away from critical strike points.",
        accent: "bg-amber-500/10",
        border: "border-amber-500/20"
    }
];

const certifications = [
    { label: "CE EN 1621-1:2012", sub: "Impact Protection Level 1 & 2" },
    { label: "ISO 9001:2015", sub: "Quality Management Standard" },
    { label: "ANSI/ISEA 105-2016", sub: "Hand Protection Cut Level" },
    { label: "Red Dot Design", sub: "International Product Excellence" }
];

export const Technology: React.FC = () => {
    return (
        <section id="technology" className="py-32 bg-brand-900 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-800/50 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-4">Engineering & Innovation</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Driven by <span className="text-brand-500">Material Science</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
                            Our gear isn't just manufactured; it's engineered. We use advanced synthetic fibers and high-impact polymers to integrate the latest protective technologies into every piece of gear.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white leading-tight">{cert.label}</h4>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">{cert.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Material Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
                        {technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className={`group relative p-8 rounded-3xl border ${tech.border} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-default`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 rounded-2xl ${tech.accent} group-hover:scale-110 transition-transform duration-500`}>
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{tech.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {tech.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative hover effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20 pt-20 border-t border-white/5 flex justify-end items-center gap-8">
                    <div className="flex items-center gap-12">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">45+</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Patents</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">100%</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Lab Verified</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
