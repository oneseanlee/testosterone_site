import { ClipboardCheck, UserCheck, Package, FileCheck } from 'lucide-react';

const HowItWorksSection = () => {
    const steps = [
        {
            num: "1",
            icon: ClipboardCheck,
            title: "Complete Your Health Intake",
            desc: "Submit your health history through our secure online form. Takes just 5 minutes."
        },
        {
            num: "2",
            icon: UserCheck,
            title: "Licensed Provider Review",
            desc: "An independent licensed physician (via happyMD) reviews your information to determine eligibility."
        },
        {
            num: "3",
            icon: Package,
            title: "Supplements Ship Immediately",
            desc: "Your Ultimate Cellular Optimization bundle \"UCOS\" ships right away — yours to keep regardless of approval."
        },
        {
            num: "4",
            icon: FileCheck,
            title: "Prescription Issued If Approved",
            desc: "If the provider determines you're a candidate, your prescription is issued and fulfilled for the Non-Hormonal Testosterone Optimizer."
        }
    ];

    return (
        <div className="w-full bg-white py-20 md:py-28">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy">
                        It's easy to get started.
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={idx} className="relative">
                                {/* Connection Line (hidden on mobile and last item) */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gray-200 -z-10"></div>
                                )}

                                <div className="flex flex-col items-center text-center group">
                                    {/* Number + Icon */}
                                    <div className="relative mb-6">
                                        <div className="w-24 h-24 bg-soft-blue rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                            <IconComponent className="w-10 h-10 text-primary" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {step.num}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-navy mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
                        Start My Evaluation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
