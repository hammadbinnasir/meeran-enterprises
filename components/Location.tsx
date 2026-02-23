import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink, Factory, Building2 } from 'lucide-react';

export const Location: React.FC = () => {
    const headOfficeMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14333.123!2d74.1912!3d32.1415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29796e95b07b%3A0x6d90a1e351829f0e!2sBhutta%20Centre!5e0!3m2!1sen!2s!4v1740320000000!5m2!1sen!2s";
    const warehouseMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14330.123!2d74.1899!3d32.1771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29ec58599143%3A0xc343468087913340!2sGill%20Road%2C%20Gujranwala!5e0!3m2!1sen!2s!4v1740315300000!5m2!1sen!2s";

    const [activeMap, setActiveMap] = useState(headOfficeMap);
    const [activeHub, setActiveHub] = useState<'office' | 'warehouse'>('office');

    return (
        <section id="location" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Info Side */}
                    <div className="w-full lg:w-2/5 flex flex-col">
                        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Operations</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">Strategic Operational <span className="text-brand-600">Hubs</span></h3>
                        <p className="text-gray-500 mb-12 leading-relaxed font-light">
                            Operating from the heart of Pakistan's industrial corridor, we maintain state-of-the-art facilities for both manufacturing and administrative excellence.
                        </p>

                        <div className="space-y-10">
                            <div
                                className={`group cursor-pointer p-4 rounded-3xl transition-all duration-300 border-2 ${activeHub === 'office' ? 'border-brand-600 bg-brand-50/50' : 'border-transparent hover:bg-gray-50'}`}
                                onClick={() => { setActiveMap(headOfficeMap); setActiveHub('office'); }}
                                onMouseEnter={() => { setActiveMap(headOfficeMap); setActiveHub('office'); }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`p-4 rounded-2xl transition-all duration-300 ${activeHub === 'office' ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'}`}>
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Head Office</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Office no 29, 2nd floor, Bhutta Centre,<br />
                                            Main GT Road, Gujranwala, Pakistan
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Manufacturing & Warehouse */}
                            <div
                                className={`group cursor-pointer p-4 rounded-3xl transition-all duration-300 border-2 ${activeHub === 'warehouse' ? 'border-brand-600 bg-brand-50/50' : 'border-transparent hover:bg-gray-50'}`}
                                onClick={() => { setActiveMap(warehouseMap); setActiveHub('warehouse'); }}
                                onMouseEnter={() => { setActiveMap(warehouseMap); setActiveHub('warehouse'); }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`p-4 rounded-2xl transition-all duration-300 ${activeHub === 'warehouse' ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'}`}>
                                        <Factory size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-1">Manufacturing & Warehouse</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Rathore Street, Gill Road,<br />
                                            Gujranwala, Pakistan
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Contact Footer */}
                            <div className="pt-10 mt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex-shrink-0 flex items-center justify-center text-brand-600 shadow-sm group/contact transition-all duration-300">
                                        <Phone size={20} className="group-hover/contact:scale-110 transition-transform" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none mb-2">Direct Line</p>
                                        <p className="text-lg font-black text-gray-900 tracking-tight whitespace-nowrap">+92 300 0600903</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex-shrink-0 flex items-center justify-center text-brand-600 shadow-sm group/contact transition-all duration-300">
                                        <Clock size={20} className="group-hover/contact:scale-110 transition-transform" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none mb-2">Availability</p>
                                        <p className="text-sm font-bold text-gray-700 leading-tight">Mon-Sat | 08:00 - 22:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.open(activeHub === 'office' ? 'https://maps.google.com/?q=Bhutta+Centre+Gujranwala' : 'https://maps.google.com/?q=Gill+Road+Gujranwala', '_blank')}
                            className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all group"
                        >
                            View on Google Maps
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-3/5 h-[500px] lg:h-[650px] relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/10 border-8 border-white group">
                        <iframe
                            src={activeMap}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                            key={activeMap} // Force reload on source change
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
