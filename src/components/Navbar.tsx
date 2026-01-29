import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'Benefits', href: '#benefits' },
        { label: 'Results', href: '#results' },
        { label: 'Compare', href: '#compare' },
        { label: 'Bundle', href: '#bundle' },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="w-full px-4 md:px-[7.8125vw]">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img src="/assets/logo.png" alt="Best365Labs" className="h-8" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
                        <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
                            Get The System
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
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
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="w-full mt-4 bg-primary text-white px-5 py-3 rounded-full text-sm font-bold">
                            Get The System
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
