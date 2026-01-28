import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <>
            {/* Backdrop Overlay - outside nav for proper z-index stacking */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 bg-black/40 z-[45]"
                    aria-hidden="true"
                />
            )}

            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <div className="w-full px-4 md:px-[7.8125vw]">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img src="/assets/logo.png" alt="Best365Labs" className="h-8" />
                        </div>

                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <div className="flex items-center space-x-4 xl:space-x-6">
                                <div
                                    className={`relative group h-16 flex items-center ${activeDropdown === 'testosterone' ? 'z-[60]' : ''}`}
                                    onMouseEnter={() => setActiveDropdown('testosterone')}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <a href="#" className={`transition-colors text-sm font-medium flex items-center gap-1 py-2 ${activeDropdown === 'testosterone' ? 'text-gray-700 relative z-[60]' : 'text-gray-700 hover:text-primary'}`}>
                                        Testosterone <ChevronDown size={14} />
                                    </a>
                                    {activeDropdown === 'testosterone' && <MegaMenu />}
                                </div>
                                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                                    Weight Loss <ChevronDown size={14} />
                                </a>
                                <div className="relative group">
                                    <a href="#" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                                        Mood & Stress <span className="bg-[#EBCB8B] text-[10px] px-1.5 py-0.5 rounded text-brown-800 font-bold">NEW</span> <ChevronDown size={14} />
                                    </a>
                                </div>
                                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                                    Blood Flow <ChevronDown size={14} />
                                </a>
                                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                                    Hair Growth <ChevronDown size={14} />
                                </a>
                                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1">
                                    More <ChevronDown size={14} />
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                            <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all">
                                Get Started
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-5 py-2 rounded-full text-sm font-bold transition-all">
                                Log In
                            </button>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="lg:hidden bg-white border-b border-gray-100">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Testosterone</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Weight Loss</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Mood & Stress</a>
                            <button className="w-full mt-4 bg-primary text-white px-5 py-3 rounded-full text-sm font-bold">Get Started</button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
