const Hero = () => {
    return (
        <div className="w-full bg-white py-8 md:py-12">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>

                <div className="grid grid-cols-1 lg:grid-cols-[844px_1px_1fr] gap-8 lg:gap-[100px] items-stretch">

                    {/* Left: Product Image */}
                    <div className="relative rounded-3xl overflow-hidden bg-[#E8EEF3]" style={{ width: '100%', height: '880px' }}>
                        <img
                            src="/images/left_side_hero_image.avif"
                            alt="Maximus Enclomiphene"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block bg-gray-200 w-px self-stretch"></div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-4 pt-0 lg:pt-2">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-bold text-gray-900">Great</span>
                            <span className="text-gray-600">4.1 out of 5</span>
                            <span className="text-green-500 font-bold flex items-center gap-1">★ Trustpilot</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif text-navy leading-none tracking-tight">
                            Enclomiphene
                        </h1>

                        <div className="bg-[#EAEFF2] rounded-lg p-5 mt-2">
                            <span className="bg-navy text-white text-[10px] font-bold px-2 py-1 rounded-sm mb-2 inline-block tracking-widest">BEST FOR</span>
                            <p className="text-navy font-bold text-sm leading-snug">
                                Men who want to naturally boost testosterone while preserving fertility and supporting daily energy in a once-a-day pill.
                            </p>
                        </div>

                        <ul className="space-y-2 mt-1">
                            <li className="flex items-start gap-3 text-navy text-sm">
                                <span className="text-navy mt-0.5">✓</span>
                                <span>Stimulates your body's natural testosterone production.</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy text-sm">
                                <span className="text-navy mt-0.5">✓</span>
                                <span>No testicular shutdown associated with traditional TRT.</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy text-sm">
                                <span className="text-navy mt-0.5 italic">✓</span>
                                <span className="italic">Improves energy, mood, and strength without dependency.</span>
                            </li>
                        </ul>

                        <div className="mt-6 border border-[#001A40] rounded-xl overflow-hidden bg-white">
                            <div className="p-6">
                                <div className="flex justify-between items-end">
                                    <span className="text-3xl text-[#001A40] tracking-tight">Prescription</span>
                                    <span className="text-4xl font-bold text-[#001A40]">$49.99</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs text-gray-500 font-medium">$99.99/mo after first month with annual commitment.</span>
                                    <span className="bg-[#00C853] text-white font-bold px-3 py-1 rounded text-[10px] tracking-wide">50% OFF FIRST MONTH</span>
                                </div>
                            </div>

                            {/* Features Icons */}
                            <div className="grid grid-cols-3 text-center border-t border-[#001A40]">
                                <div className="flex flex-col items-center justify-center gap-2 p-4 border-r border-[#001A40]">
                                    <svg className="w-6 h-6 text-[#001A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                    <span className="text-[11px] text-[#001A40] font-medium leading-tight px-1">Free priority shipping</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 p-4 border-r border-[#001A40]">
                                    <svg className="w-6 h-6 text-[#001A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="text-[11px] text-[#001A40] font-medium leading-tight px-1">FDA approved pharmacies</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 p-4">
                                    <svg className="w-6 h-6 text-[#001A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    <span className="text-[11px] text-[#001A40] font-medium leading-tight px-1">Board-certified doctors</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#0055CC] hover:bg-blue-800 text-white py-4 rounded-full font-bold text-base mt-2 transition-all">
                            Start my evaluation
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
