import React from 'react';

const HowItWorksSection = () => {
    const steps = [
        {
            num: "01",
            title: "Complete your evaluation",
            desc: "Choose your Maximus protocol and fill out the intake form. Order an at-home lab test to measure key biomarkers.",
            image: "/images/eval_1.avif"
        },
        {
            num: "02",
            title: "Get your prescription",
            desc: "A licensed doctor finalizes your prescription based on your lab results and goals. Message them 24/7.",
            image: "/images/eval_2.avif"
        },
        {
            num: "03",
            title: "Optimize your results",
            desc: "Monitor your progress and work with your Maximus doctor to adjust your dosage and plan as needed.",
            image: "/images/eval_3.avif"
        }
    ];

    return (
        <div className="w-full bg-white py-20 md:py-28">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <h2 className="text-4xl md:text-5xl font-serif text-navy text-center mb-16">
                    It's easy to get started.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col group cursor-default">
                            <div className="w-full h-64 bg-gray-100 rounded-2xl mb-8 relative overflow-hidden">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <span className="text-xs font-bold text-primary mb-2">{step.num}</span>
                            <h3 className="text-2xl font-serif text-navy mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md">
                        Start my evaluation
                    </button>
                </div>

            </div>
        </div>
    );
};

export default HowItWorksSection;
