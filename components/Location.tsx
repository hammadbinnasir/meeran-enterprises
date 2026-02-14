import React from 'react';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
    return (
        <section id="location" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                    {/* Info Side */}
                    {/* Info Side */}
                    <div className="w-full lg:w-1/3 flex flex-col pt-4">
                        <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Operations</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">Global Manufacturing <span className="text-brand-600">Hub</span></h3>
                        <p className="text-gray-500 mb-10 leading-relaxed font-light">
                            Our primary manufacturing and logistics center is located in Sialkot, Pakistan—the world's hub for premium sports and tactical gear.
                            We ensure rapid dispatch and maintain strict quality control standards.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Sialkot Industrial Zone</h4>
                                    <p className="text-gray-500 text-xs mt-1">Industrial Estate, Sialkot, Punjab 51310, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Operation Hours</h4>
                                    <p className="text-gray-500 text-xs mt-1">Mon - Sat: 08:00 AM - 10:00 PM PKT</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-50 rounded-xl text-brand-600">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Global Support</h4>
                                    <p className="text-gray-500 text-xs mt-1">+92 300 0600903</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.open('https://maps.google.com/?q=Sialkot+Industrial+Estate', '_blank')}
                            className="mt-12 flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all group"
                        >
                            Get Directions on Google Maps
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Map Side */}
                    <div className="w-full lg:w-2/3 h-[450px] md:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-gray-100 group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54236.42171508209!2d74.48419615598516!3d32.49429184518484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee904603e878d%3A0xd68d407604f3316c!2sSialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707755000000!5m2!1sen!2s"
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
