import React, { useState } from 'react';
import { Shield, CheckCircle, ExternalLink, X, Eye } from 'lucide-react';

interface Certificate {
    id: string;
    title: string;
    description: string;
    image: string;
}

const certificates: Certificate[] = [
    {
        id: 'tax',
        title: 'Tax Registration Certificate',
        description: 'Certified taxpayer registered with the Federal Board of Revenue.',
        image: '/assets/certificates/tax-certificate.jpg'
    },
    {
        id: 'chamber',
        title: 'Chamber of Commerce',
        description: 'Active member of the Gujranwala Chamber of Commerce & Industry.',
        image: '/assets/certificates/chamber-of-commerce.jpg'
    },
    {
        id: 'ntn',
        title: 'NTN Document',
        description: 'National Tax Number verification for corporate transparency.',
        image: '/assets/certificates/ntn-certificate.jpg'
    }
];

export const Certifications: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="certifications" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-bold text-brand-600 uppercase tracking-wider mb-4">
                            <Shield size={14} />
                            Trust & Compliance
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-6 leading-tight">
                            Global Quality & <br />
                            <span className="text-gray-400">Legal Excellence</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Raza Meeran Enterprises operates with full legal transparency and adherence to international trade standards. Our registrations ensure that your global partnership is backed by verified authority.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 cursor-pointer overflow-hidden relative"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="absolute top-4 right-4 text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Eye size={20} />
                            </div>

                            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <CheckCircle size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {cert.description}
                            </p>

                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-500" />
                            </div>

                            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-brand-600 group-hover:gap-3 transition-all">
                                VIEW FULL DOCUMENT
                                <ExternalLink size={14} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                    <div
                        className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl animate-fade-in"
                        onClick={() => setSelectedCert(null)}
                    />
                    <div className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-zoom-in flex flex-col h-full max-h-[90dvh]">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                            <div>
                                <h3 className="text-xl font-bold text-gray-950">{selectedCert.title}</h3>
                                <p className="text-sm text-gray-500">{selectedCert.description}</p>
                            </div>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-900 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-gray-100/50">
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
