import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
    return (
        <section id="location" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* Info Side */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center">
                        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Operations</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">Global Logistics <span className="text-brand-600">Hub</span></h3>
                        <p className="text-gray-500 mb-10 leading-relaxed font-light">
                            Centrally located in the Dubai Logistics City, our primary unit ensures rapid dispatch to 150+ countries.
                            Our facility is equipped with state-of-the-art climate control for material integrity.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Dubai Logistics City</h4>
                                    <p className="text-gray-500 text-xs mt-1">Building A4, Suite 102, Logistics Hub 1, Dubai, UAE</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Operation Hours</h4>
                                    <p className="text-gray-500 text-xs mt-1">Mon - Sat: 08:00 AM - 10:00 PM GST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Global Support</h4>
                                    <p className="text-gray-500 text-xs mt-1">+971 4 555 0123</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-12 flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all group">
                            Get Directions on Google Maps
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-2/3 min-h-[450px] relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-gray-100 group">
                        {/* Overlay for glassmorphism effect on map */}
                        <div className="absolute top-6 left-6 z-10 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg pointer-events-none transform group-hover:-translate-y-2 transition-transform duration-500">
                            <span className="flex items-center gap-2 text-xs font-bold text-green-600 uppercase tracking-widest">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Live Dispatch Center
                            </span>
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115629.56636306541!2d55.0844783!3d24.8724121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d3882772719%3A0xc66578051a84f475!2sDubai%20Logistics%20City!5e0!3m2!1sen!2s!4v1707755000000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
