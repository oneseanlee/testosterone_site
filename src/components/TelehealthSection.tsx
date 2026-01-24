import React from 'react';

const TelehealthSection = () => {
    return (
        <div className="w-full bg-white px-[34px] pb-[34px]">
            <div className="w-full bg-blue-100/50 rounded-3xl py-16 md:py-24 px-6 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Doctor Image */}
                    <div className="relative flex justify-center items-end h-[500px] order-2 lg:order-1">
                        <img
                            src="/images/doca.avif"
                            alt="Doctor"
                            className="h-full object-contain object-bottom"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight mb-8">
                            Not just telehealth. <br />
                            <span className="italic text-primary">We're telehealthcare.</span>
                        </h2>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Unlimited access to your personal doctor and care team.",
                                "Board-certified doctors that treat you, not just numbers.",
                                "100% online. No in-person visits or insurance required.",
                                "Hormone therapy from hormone experts."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-navy">
                                    <span className="text-navy mt-1">✓</span>
                                    <span className="text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
                            Start my evaluation
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TelehealthSection;
