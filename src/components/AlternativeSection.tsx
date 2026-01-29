import { Shield, Baby, Activity, Scale } from 'lucide-react';

const AlternativeSection = () => {
    const benefits = [
        {
            icon: Shield,
            title: "Maintains Testicular Function",
            desc: "Preserves natural size and health while optimizing testosterone production"
        },
        {
            icon: Baby,
            title: "Protects Fertility",
            desc: "Maintains sperm production capacity unlike traditional TRT"
        },
        {
            icon: Activity,
            title: "Stimulates Natural LH/FSH",
            desc: "Keeps your hormone system active and functioning properly"
        },
        {
            icon: Scale,
            title: "Optimizes Hormone Balance",
            desc: "Better overall hormone management without dependency"
        }
    ];

    return (
        <div className="w-full bg-white py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                        The Non-Hormonal Alternative
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                        The Non-Hormonal Alternative<br />
                        <span className="text-primary italic">That Protects Your Vitality</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        MODS Max vs TRT Alone comparison
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, idx) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-soft-blue rounded-2xl p-8 text-center hover:shadow-lg transition-all group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <IconComponent className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AlternativeSection;
