import { AlertTriangle } from 'lucide-react';

const CriticalInfoSection = () => {
    const sideEffects = [
        {
            title: "Testicular Atrophy",
            stat: "Up to 17%",
            desc: "volume decrease in studies"
        },
        {
            title: "Fertility Impact",
            stat: "Significant",
            desc: "sperm production suppression"
        },
        {
            title: "Hormonal Dependency",
            stat: "Natural",
            desc: "production shutdown"
        },
        {
            title: "Estrogen Issues",
            stat: "Increased",
            desc: "aromatization and side effects"
        }
    ];

    return (
        <div id="benefits" className="w-full bg-navy py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        CRITICAL INFORMATION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        If You're Considering TRT,<br />
                        <span className="text-red-400">You Need to Know This</span>
                    </h2>
                </div>

                {/* Side Effects Label */}
                <p className="text-center text-gray-400 mb-8 font-medium">
                    TRT Side Effects You Can't Ignore:
                </p>

                {/* Side Effects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sideEffects.map((effect, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-400/50 transition-all"
                        >
                            <h3 className="text-lg font-bold text-white mb-2">
                                {effect.title}
                            </h3>
                            <p className="text-2xl font-bold text-red-400 mb-1">
                                {effect.stat}
                            </p>
                            <p className="text-sm text-gray-400">
                                {effect.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CriticalInfoSection;
