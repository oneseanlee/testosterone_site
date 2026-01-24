import React from 'react';

const BenefitsSection = () => {
    const benefits = [
        {
            title: "Elevates energy, mood, and confidence.",
            image: "/images/box_1.avif"
        },
        {
            title: "Protects fertility and testicular function.",
            image: "/images/box_2.avif"
        },
        {
            title: "Supports natural testosterone production.",
            image: "/images/box_3.avif"
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <h2 className="text-4xl md:text-5xl font-serif text-navy text-center mb-16 leading-tight">
                    A smarter way to raise testosterone, <span className="text-primary italic">naturally.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col text-center group cursor-default">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle overlay for depth */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-xl text-navy leading-snug font-medium max-w-xs mx-auto">
                                {benefit.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
                        Start my evaluation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;
