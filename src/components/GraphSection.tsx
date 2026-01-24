const GraphSection = () => {
    return (
        <div className="w-full bg-white py-8">
            <div className="w-full !px-[7.8125vw]">
                {/* Dark Navy Card */}
                <div className="bg-[#001A40] rounded-xl py-12 px-8 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Left Side - Text Content */}
                        <div className="z-10 relative">
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Enclomiphene</h2>
                            <ul className="space-y-4 text-gray-300 text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                                    Strategically blocks estrogen receptors to increase testosterone.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                                    Up to 2x increase to testosterone without the testicular shutdown, shrinkage, infertility, and dependence of traditional alternatives.
                                </li>
                            </ul>

                            {/* White Paper Link */}
                            <a href="#" className="inline-block mt-12 text-white text-sm font-medium underline underline-offset-4 hover:text-gray-300 transition-colors">
                                ENCLOMIPHENE WHITE PAPER
                            </a>
                        </div>

                        {/* Right Side - Graph */}
                        <div className="relative h-64 lg:h-72 w-full">
                            {/* Y-axis label */}
                            <div className="absolute -left-2 top-0 text-[10px] text-gray-400 font-mono">NG/DL</div>

                            {/* Y-Axes labels */}
                            <div className="absolute left-4 top-4 bottom-8 flex flex-col justify-between text-[10px] text-gray-500 font-mono">
                                <span>1200</span>
                                <span>900</span>
                                <span>600</span>
                                <span>300</span>
                                <span>0</span>
                            </div>

                            {/* SVG Graph */}
                            <div className="absolute top-4 bottom-0 left-12 right-0">
                                <svg viewBox="0 0 400 220" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                    {/* Grid lines */}
                                    <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                                    {/* Gradient for fill */}
                                    <defs>
                                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.9" />
                                        </linearGradient>
                                    </defs>

                                    {/* Enclomiphene Curve (Solid Blue fill) - bell curve shape */}
                                    <path
                                        d="M0,170 C60,165 100,140 140,60 C180,20 200,10 210,10 C220,10 240,20 280,60 C320,100 360,130 400,140 L400,200 L0,200 Z"
                                        fill="url(#blueGradient)"
                                    />

                                    {/* Top curve line */}
                                    <path
                                        d="M0,170 C60,165 100,140 140,60 C180,20 200,10 210,10 C220,10 240,20 280,60 C320,100 360,130 400,140"
                                        fill="none"
                                        stroke="#60A5FA"
                                        strokeWidth="2"
                                    />

                                    {/* Baseline Curve (Dashed white line) */}
                                    <path
                                        d="M0,160 Q100,155 200,150 T400,155"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.4)"
                                        strokeWidth="2"
                                        strokeDasharray="6 4"
                                    />

                                    {/* Peak marker - vertical dotted line */}
                                    <line x1="210" y1="10" x2="210" y2="0" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
                                    <circle cx="210" cy="10" r="4" fill="white" />

                                    {/* Peak label - TESTOSTERONE LEVELS WITH ENCLOMIPHENE */}
                                    <text x="320" y="25" fill="white" fontSize="7" fontWeight="500">TESTOSTERONE</text>
                                    <text x="320" y="35" fill="white" fontSize="7" fontWeight="500">LEVELS WITH</text>
                                    <text x="320" y="45" fill="white" fontSize="7" fontWeight="500">ENCLOMIPHENE</text>

                                    {/* Baseline marker */}
                                    <circle cx="280" cy="115" r="3" fill="white" />
                                    <line x1="280" y1="115" x2="280" y2="155" stroke="white" strokeWidth="1" strokeDasharray="2 2" />

                                    {/* Baseline label */}
                                    <text x="320" y="110" fill="rgba(255,255,255,0.7)" fontSize="7" fontWeight="500">BASELINE</text>
                                    <text x="320" y="120" fill="rgba(255,255,255,0.7)" fontSize="7" fontWeight="500">TESTOSTERONE</text>
                                    <text x="320" y="130" fill="rgba(255,255,255,0.7)" fontSize="7" fontWeight="500">LEVELS</text>
                                </svg>

                                {/* X-axis time labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] text-gray-500 font-mono translate-y-4">
                                    <span>12AM</span>
                                    <span>4AM</span>
                                    <span>8AM</span>
                                    <span>12PM</span>
                                    <span>4PM</span>
                                    <span>8PM</span>
                                    <span>12AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphSection;
