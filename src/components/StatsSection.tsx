import React from 'react';

const StatsSection = () => {
    return (
        <div className="w-full bg-white py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight mb-6">
                            Improved testosterone <br />
                            <span className="text-primary italic">or you don't pay.</span>
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            Most clients see up to 2x increase in Total Testosterone, but if you don't measure a 10% increase, your medication is free. Simple as that.
                        </p>

                        <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md">
                            Start my evaluation
                        </button>

                        <div className="mt-12 border border-navy/30 rounded-lg p-6 bg-blue-50/30">
                            <p className="text-xs text-navy leading-relaxed">
                                1 in 4 men over the age of 30 have low testosterone. ~ 80% of men have no idea what their testosterone levels are and have never tested them. 40% of men over 45 have testosterone levels below normal, though many may not realize it. 500k men in the U.S. are diagnosed with low testosterone each year.
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                        {/* Card 1: Unoptimized */}
                        <div className="absolute top-0 left-10 md:left-20 bg-white p-6 rounded-2xl shadow-xl w-64 transform -rotate-3 hover:rotate-0 transition-all duration-500 z-10 border border-gray-100">
                            <div className="text-center mb-4">
                                <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">Unoptimized</span>
                            </div>
                            <div className="mb-2 text-sm text-gray-500">Total Testosterone</div>
                            <div className="text-3xl font-bold text-navy mb-4">320 ng/dL</div>

                            {/* Progress Bar */}
                            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-orange-400 to-yellow-400"></div>
                                <div className="absolute top-0 bottom-0 left-[30%] w-0.5 bg-navy h-4 -mt-1"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                <span>Normal Range: 300-1000</span>
                            </div>
                        </div>

                        {/* Card 2: Optimized */}
                        <div className="absolute bottom-10 right-0 md:right-10 bg-white p-6 rounded-2xl shadow-2xl w-72 transform rotate-2 hover:rotate-0 transition-all duration-500 z-20 border border-blue-100">
                            <div className="text-center mb-4">
                                <span className="text-xs font-bold text-primary tracking-widest uppercase">Optimized</span>
                            </div>
                            <div className="mb-2 text-sm text-gray-500">Total Testosterone</div>
                            <div className="text-4xl font-bold text-navy mb-4">1052 ng/dL</div>

                            {/* Progress Bar */}
                            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-yellow-400 via-green-400 to-green-600"></div>
                                <div className="absolute top-0 bottom-0 right-[5%] w-0.5 bg-navy h-4 -mt-1"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                <span>Normal Range: 300-1000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
