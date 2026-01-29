import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20">
            <div style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <div className="bg-navy text-white rounded-3xl p-8 md:p-12 lg:p-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Column */}
                        <div>
                            <img src="/assets/logo.png" alt="Best365Labs" className="h-8 brightness-0 invert mb-6" />
                            <p className="text-sm text-gray-400 mb-4">
                                Publicly Traded: BHIC
                            </p>
                            <div className="space-y-3 text-sm text-gray-300">
                                <a href="tel:385-421-5651" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Phone className="w-4 h-4" />
                                    (385) 421-5651
                                </a>
                                <a href="mailto:info@best365labs.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4" />
                                    info@best365labs.com
                                </a>
                                <p className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>14857 S Concorde Park Dr,<br />Bluffdale, UT 84065</span>
                                </p>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Legal</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Quick Links</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                                <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
                                <li><a href="#compare" className="hover:text-white transition-colors">Compare</a></li>
                                <li><a href="#bundle" className="hover:text-white transition-colors">Bundle</a></li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Get Started</h4>
                            <button className="w-full bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all">
                                Get The System
                            </button>
                        </div>
                    </div>

                    {/* Disclaimers */}
                    <div className="border-t border-white/10 pt-8 mt-8">
                        <div className="space-y-4 text-xs text-gray-500 leading-relaxed">
                            <p>
                                <strong>GLP-1 Program Disclaimer:</strong> GLP-1 consultations, prescriptions, and related medical services are provided by independent licensed healthcare professionals through the happyMD telehealth network. Best 365 Labs, Inc. does not provide medical services, telehealth consultations, or prescriptions. Medication eligibility and dosage are determined solely by the provider based on individual medical evaluation.
                            </p>
                            <p>
                                <strong>Caution:</strong> Methylene Blue should not be used in patients who have glucose-6-phosphate dehydrogenase deficiency, as this may lead to hemolysis. Do not use if pregnant, nursing or think you might be pregnant. If questions consult your physician. May cause your urine to turn blue or green. Do not worry this is normal.
                            </p>
                            <p>
                                * The statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. Please consult your health care professional about potential interactions or other possible complications before using any product. The Federal Food, Drug, and Cosmetic Act require this notice.
                            </p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-white/10 pt-6 mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            © 2026 by Best 365 Labs, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
