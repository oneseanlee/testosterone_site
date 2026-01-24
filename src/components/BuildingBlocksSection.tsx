import React from 'react';

const BuildingBlocksSection = () => {
    return (
        <div className="w-full bg-white px-4 md:px-[34px] py-[34px]">
            {/* Main Card Container */}
            <div className="w-full bg-primary text-white h-auto lg:h-[1060px] px-6 md:px-16 flex items-center rounded-3xl overflow-hidden relative isolate">

                {/* Background Image - Full Cover */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    <img
                        src="/images/big_image.avif"
                        alt="Maximus Building Blocks Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Optional Gradient Overlay for Text Readability - adjusts depending on image brightness */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Grid */}
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 lg:py-0">

                    {/* Left Column: Heading & Description */}
                    <div className="lg:col-span-5 text-left flex flex-col justify-start pt-20 lg:pt-32 h-full z-10">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight drop-shadow-lg">
                            Power up your testosterone treatment.
                        </h2>
                        <p className="text-lg opacity-90 leading-relaxed max-w-md drop-shadow-md">
                            Enclomiphene works best when your body isn't deficient in key nutrients. Building Blocks provides prescription-strength vitamins and cofactors to support optimal results.
                        </p>
                    </div>

                    {/* Center Column: Spacer for the background image's subject (e.g. bottle) */}
                    <div className="lg:col-span-2 hidden lg:block"></div>

                    {/* Right Column: details */}
                    <div className="lg:col-span-5 text-left pl-0 lg:pl-28 flex flex-col justify-center lg:pt-32 h-full z-10">
                        <h3 className="text-[40px] font-serif mb-4 drop-shadow-lg">Building Blocks</h3>
                        <p className="text-base italic opacity-100 mb-8 drop-shadow-md">Your regular multivitamin simply doesn't compare.</p>
                        <ul className="space-y-4 text-base font-medium mb-10 drop-shadow-md">
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[10px]">●</span>
                                <span className="leading-snug">Fosters robust hormone production</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[10px]">●</span>
                                <span className="leading-snug">Optimizes your energy, mood, and focus</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1.5 text-[10px]">●</span>
                                <span className="leading-snug">Made with the highest quality bioavailable ingredients for clinically validated absorption</span>
                            </li>
                        </ul>
                        <button className="bg-white text-primary text-base font-bold py-4 rounded-full transition-all hover:bg-gray-100 shadow-lg w-full max-w-md">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BuildingBlocksSection;
