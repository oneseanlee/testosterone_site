import { Pill, Sun, Zap, Moon } from 'lucide-react';

const ProductBreakdownSection = () => {
    const ucosProducts = [
        {
            icon: Sun,
            name: "Activate365 Longevity Boost",
            timing: "Morning Cellular Activation",
            ingredients: [
                "Spermidine 10mg: Activates autophagy (cellular cleanup)",
                "NAD+ 20mg: Immediate cellular energy boost",
                "Boron 10mg: Hormone optimization benefits",
                "MODS Max Technology: 10x enhanced absorption"
            ]
        },
        {
            icon: Zap,
            name: "Mito365 Biohacking Matrix",
            timing: "Peak Performance Enhancement",
            ingredients: [
                "Methylene Blue 10mg: 30-40% ATP increase",
                "GHK-Cu Peptide 10mg: 200-300% faster tissue repair",
                "PQQ 20mg: Creates new mitochondria",
                "NAD+ 150mg: Powers 500+ enzymatic reactions",
                "B12 & Vitamin C: Neurotransmitter and immune support"
            ]
        },
        {
            icon: Moon,
            name: "Restore365 Sleep Optimization",
            timing: "Overnight Recovery Optimization",
            ingredients: [
                "Enhanced Melatonin: 50-70% faster sleep onset",
                "GABA 50mg: Crosses blood-brain barrier for deep sleep",
                "Boron 10mg: Supports growth hormone release during sleep",
                "Zinc: Immune and tissue repair support"
            ]
        }
    ];

    return (
        <div id="bundle" className="w-full py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <div className="bg-soft-blue rounded-3xl p-8 md:p-12 lg:p-16">
                    {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                        WHAT'S INCLUDED
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy">
                        Complete Product Breakdown
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Product Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Pill className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Rx Formula
                                </span>
                                <h3 className="text-2xl font-serif text-navy mt-2">
                                    Non-Hormonal Testosterone Optimizer
                                </h3>
                                <p className="text-sm text-gray-500 italic mt-1">
                                    Powered by MODS Max
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary mt-1">•</span>
                                <span>30-day sublingual formula</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary mt-1">•</span>
                                <span>Clinical-grade Enclomiphene, Boron, Vitamin C</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary mt-1">•</span>
                                <span>Patent-pending 10X absorption delivery system</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary mt-1">•</span>
                                <span>Stimulates natural testosterone production</span>
                            </li>
                        </ul>
                    </div>

                    {/* UCOS System Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif text-navy">
                                UCOS System (3 Products)
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                24/7 Cellular Support
                            </p>
                        </div>

                        <div className="space-y-6">
                            {ucosProducts.map((product, idx) => {
                                const IconComponent = product.icon;
                                return (
                                    <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-navy text-sm">{product.name}</h4>
                                                <p className="text-xs text-gray-500">{product.timing}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-1 pl-13">
                                            {product.ingredients.slice(0, 3).map((ing, i) => (
                                                <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                                                    <span className="text-primary">•</span>
                                                    {ing}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Consultation Card */}
                <div className="mt-8 bg-navy rounded-3xl p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                                <span className="text-2xl">🩺</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Licensed Physician Consultation</h3>
                                <p className="text-sm text-gray-300">via happyMD</p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <span className="bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-full">
                                $200 Value
                            </span>
                        </div>
                    </div>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            Board-certified physician review
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            Personalized optimization protocol
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            Prescription issued if medically approved
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBreakdownSection;
