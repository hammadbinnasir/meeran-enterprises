import React, { useState, useRef } from 'react';
import { ArrowUpRight, X, CheckCircle, Building2, User, Mail, Phone, Globe, CreditCard, FileText, Briefcase, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Wholesale: React.FC = () => {
  const [showApplication, setShowApplication] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const quickInquiryForm = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    if (quickInquiryForm.current) {
      emailjs.sendForm(
        'service_ua0ajq1',
        'template_62vacwq',
        quickInquiryForm.current,
        '4jGeVesKp7OBWE3Sr'
      )
        .then(() => {
          setSubmitStatus('success');
          quickInquiryForm.current?.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          setSubmitStatus('error');
        });
    } else {
      // Fallback for application modal or other forms
      setTimeout(() => {
        setSubmitStatus('success');
        setTimeout(() => {
          setShowApplication(false);
          setSubmitStatus('idle');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <section id="wholesale" className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-brand-500 uppercase tracking-widest mb-4">Meeran B2B</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Partner with the Elite.</h3>
            <p className="text-gray-400 text-lg mb-8 font-light">
              Join our global network of distributors. Access exclusive bulk pricing, marketing assets, and priority manufacturing slots for orders over 500 units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowApplication(true)}
                className="px-8 py-4 bg-white text-brand-900 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Distributor Application
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick Inquiry Side Form (Existing) */}
          <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold mb-6">Quick Inquiry</h4>
            {submitStatus === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-brand-500/20 text-brand-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <p className="text-lg font-medium">Inquiry Sent!</p>
                <p className="text-sm text-gray-400">Our team will contact you shortly.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-xs text-brand-500 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto">
                  <AlertCircle size={32} />
                </div>
                <p className="text-lg font-medium">Submission Failed</p>
                <p className="text-sm text-gray-400">There was an error sending your message. Please try again.</p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="text-xs text-brand-500 hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form ref={quickInquiryForm} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input name="user_name" required type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors" />
                  <input name="user_email" required type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select name="user_region" required className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none scrollbar-hide">
                    <option value="" className="bg-brand-900 text-gray-400">Region...</option>
                    <option value="NA" className="bg-brand-900 text-white">North America</option>
                    <option value="EU" className="bg-brand-900 text-white">Europe</option>
                    <option value="APAC" className="bg-brand-900 text-white">Asia Pacific</option>
                    <option value="ME" className="bg-brand-900 text-white">Middle East</option>
                    <option value="SA" className="bg-brand-900 text-white">South America</option>
                    <option value="AF" className="bg-brand-900 text-white">Africa</option>
                  </select>
                  <select name="unit_range" required className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none scrollbar-hide">
                    <option value="" className="bg-brand-900 text-gray-400">Unit Range...</option>
                    <option value="50-100" className="bg-brand-900 text-white">50 - 100 Units</option>
                    <option value="100-500" className="bg-brand-900 text-white">100 - 500 Units</option>
                    <option value="500-1000" className="bg-brand-900 text-white">500 - 1000 Units</option>
                    <option value="1000+" className="bg-brand-900 text-white">1000+ Units</option>
                  </select>
                </div>
                <textarea name="message" required placeholder="Additional Details / Requirements" rows={3} className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"></textarea>
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : 'Get Wholesale Quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Distributor Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm animate-fade-in" onClick={() => setShowApplication(false)}></div>

          <div className="relative w-full max-w-3xl bg-gray-50 rounded-2xl shadow-2xl overflow-hidden animate-zoom-in flex flex-col max-h-[90vh] border border-gray-200">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-600 rounded-xl hidden sm:flex items-center justify-center ring-1 ring-brand-100 shadow-sm">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-900 tracking-tight">Distributor Application</h3>
                  <p className="text-sm text-gray-500 mt-1">Submit your credentials for the Global Partner Program.</p>
                </div>
              </div>
              <button onClick={() => setShowApplication(false)} className="p-2 text-gray-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-8 bg-gray-50/50">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 bg-white rounded-2xl shadow-sm border border-gray-100 mx-4">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                    <CheckCircle size={40} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-brand-900 mb-2">Application Received</h4>
                    <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                      Your profile has been securely transmitted to our Global Partnerships team. Expect a preliminary review status within 48 hours.
                    </p>
                  </div>
                  <button onClick={() => setShowApplication(false)} className="mt-4 px-6 py-2 bg-brand-50 text-brand-600 font-semibold rounded-lg hover:bg-brand-100 transition-colors">
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Section 1: Corporate Identity */}
                  <div className="space-y-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-900 text-white text-xs font-bold">1</span>
                      <h4 className="text-xs font-bold text-brand-900 uppercase tracking-widest">Corporate Identity</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Company Name *</label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                          <input required type="text" placeholder="Legal Entity Name"
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Tax ID / VAT *</label>
                        <div className="relative">
                          <CreditCard className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                          <input required type="text" placeholder="Registration Number"
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Point of Contact */}
                  <div className="space-y-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-900 text-white text-xs font-bold">2</span>
                      <h4 className="text-xs font-bold text-brand-900 uppercase tracking-widest">Point of Contact</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                          <input required type="text" placeholder="Primary Contact"
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Business Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                          <input required type="email" placeholder="name@company.com"
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                          <input required type="tel" placeholder="+1 (555) 000-0000"
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Website URL</label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                          <input type="url" placeholder="https://www.yourcompany.com"
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Distribution Details */}
                  <div className="space-y-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-900 text-white text-xs font-bold">3</span>
                      <h4 className="text-xs font-bold text-brand-900 uppercase tracking-widest">Market & Volume</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Target Region *</label>
                        <div className="relative">
                          <select required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-brand-900 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all appearance-none cursor-pointer shadow-sm">
                            <option value="">Select Primary Market</option>
                            <option value="NA">North America</option>
                            <option value="EU">Europe</option>
                            <option value="ASIA">Asia Pacific</option>
                            <option value="ME">Middle East</option>
                            <option value="SA">South America</option>
                            <option value="AF">Africa</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                          </div>
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Business Model *</label>
                        <div className="relative">
                          <select required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-brand-900 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all appearance-none cursor-pointer shadow-sm">
                            <option value="">Select Type</option>
                            <option value="retail">Physical Retailer</option>
                            <option value="ecommerce">E-Commerce Specialist</option>
                            <option value="distributor">Regional Distributor</option>
                            <option value="team">Pro Team / Organization</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-xs font-semibold text-brand-900 mb-1.5 ml-1">Company Profile & Projected Volume</label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-brand-600 transition-colors" size={18} />
                        <textarea required rows={3} placeholder="Briefly describe your distribution channels and estimated quarterly volume..."
                          className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium text-brand-900 placeholder-gray-400 focus:border-brand-600 focus:ring-4 focus:ring-brand-500/10 focus:outline-none transition-all resize-none shadow-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 flex items-center justify-end gap-4 bg-white p-6 -mx-6 -mb-8 mt-4 sticky bottom-0 border-t border-gray-100">
                    <button type="button" onClick={() => setShowApplication(false)} className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-brand-900 hover:bg-gray-50 rounded-xl transition-colors">
                      Cancel
                    </button>
                    <button type="submit" className="px-8 py-3 bg-brand-900 text-white text-sm font-bold rounded-xl hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/20 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2">
                      {submitStatus === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowUpRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};