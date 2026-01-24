import React from 'react';
import { ArrowRight } from 'lucide-react';
// treatmentImage import removed

const MegaMenu = () => {
    return (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[900px] bg-white shadow-xl rounded-xl border border-gray-100 p-8 z-50 mt-4 animate-fade-in-up">
            <div className="grid grid-cols-3 gap-8">
                {/* Column 1: Protocols */}
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Protocols</h3>
                    <div className="space-y-4">
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Enclomiphene</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Oral Testosterone</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Testosterone Cream</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Injectable Testosterone</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">At-Home Testosterone Test</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">All Testosterone Treatments</a>
                    </div>
                </div>

                {/* Column 2: Tools & Resources */}
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Tools & Resources</h3>
                    <div className="space-y-4">
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Testosterone Calculator</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Signs of Low Testosterone</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Testosterone Levels by Age</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Types of Testosterone Therapy</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Oral vs Injectable Testosterone</a>
                        <a href="#" className="block text-gray-700 hover:text-[#001A40] text-sm font-medium transition-colors">Your First Year on Testosterone</a>
                    </div>
                </div>

                {/* Column 3: Get Started Card */}
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Get Started</h3>
                    <div className="relative overflow-hidden rounded-xl bg-gray-900 aspect-[4/3] group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
                            alt="Personalized Testosterone Treatments"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                            <h4 className="text-white text-xl font-bold leading-tight">
                                Personalized<br />Testosterone<br />Treatments
                            </h4>
                            <button className="bg-[#0055CC] hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold w-fit flex items-center gap-2 transition-colors">
                                Get started <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pointer/Arrow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
        </div>
    );
};

export default MegaMenu;
