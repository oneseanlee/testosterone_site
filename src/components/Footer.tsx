
import { Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4 mb-16 items-start">

                    {/* Left Column: Brand (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col gap-6 pr-4">
                        <img src="/assets/logo.png" alt="Best365Labs" className="h-8 brightness-0 invert" />
                        <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                            Early access to new products, research, and insights.
                        </p>
                        <div className="flex gap-2 w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border border-gray-700 rounded px-4 py-2 text-sm w-full focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                            />
                            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded transition-colors text-sm">
                                →
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Testosterone (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Testosterone</h4>
                        <ul className="space-y-3 text-[13px] text-gray-300 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Enclomiphene</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Oral Testosterone</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Injectable Testosterone</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Testosterone Cream</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">At-Home Testosterone Test</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">All Testosterone</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Weight Loss (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Weight Loss</h4>
                        <ul className="space-y-3 text-[13px] text-gray-300 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Tirzepatide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Tirzepatide Microdose</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Semaglutide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Semaglutide Microdose</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">All Weight Loss</a></li>
                        </ul>
                    </div>

                    {/* Column 4: More Treatments (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">More Treatments</h4>
                        <ul className="space-y-3 text-[13px] text-gray-300 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Oxytocin Calming Cream</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sermorelin Injections</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blood Flow</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hair Regrowth</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Building Blocks</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Resources (1 col) */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-3 text-[13px] text-gray-300 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Research & Clinical Studies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">BMI Calculator</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Testosterone Calculator</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Peptide Calculator</a></li>
                        </ul>
                    </div>

                    {/* Column 6: Company (1 col) */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-3 text-[13px] text-gray-300 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Join Our Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 7: Actions/Buttons (1 col - expanding) */}
                    <div className="lg:col-span-1 flex flex-col gap-3 items-end pt-1">
                        <button className="bg-white hover:bg-gray-100 text-navy px-5 py-2 rounded-full font-bold text-[13px] transition-colors whitespace-nowrap w-full md:w-auto text-center">
                            Get Started
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full font-bold text-[13px] transition-colors backdrop-blur-sm whitespace-nowrap w-full md:w-auto text-center">
                            Member Login
                        </button>
                    </div>

                </div>

                {/* Bottom Section: Social & Badges */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
                    <div className="flex gap-6">
                        <a href="#" className="text-white hover:text-primary transition-colors"><Facebook size={24} /></a>
                        <a href="#" className="text-white hover:text-primary transition-colors"><Youtube size={24} /></a>
                        <a href="#" className="text-white hover:text-primary transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="text-white hover:text-primary transition-colors"><MessageCircle size={24} /></a>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Simulated Badges */}
                        <div className="flex items-center gap-2">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-center leading-none border border-white/20">
                                Inc.<br />5000
                            </span>
                            <span className="text-[10px] text-gray-400 max-w-[80px] leading-tight">
                                Proud to be 27th fastest growing company in America.
                            </span>
                        </div>

                        <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center border border-white/20">
                            <span className="text-[8px] font-bold text-center">LegitScript<br />Certified</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
