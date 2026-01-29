import { Check, X, AlertTriangle } from 'lucide-react';

const ComparisonTable = () => {
    const features = [
        {
            name: "Testicular Function",
            modsMax: { value: "Maintains", status: "good" },
            trtAlone: { value: "Up to 17% atrophy", status: "bad" },
            noTreatment: { value: "Declining", status: "bad" }
        },
        {
            name: "Fertility",
            modsMax: { value: "Preserved", status: "good" },
            trtAlone: { value: "Suppressed", status: "bad" },
            noTreatment: { value: "May decline", status: "bad" }
        },
        {
            name: "Hormone Balance",
            modsMax: { value: "Natural LH/FSH", status: "good" },
            trtAlone: { value: "Shut down", status: "bad" },
            noTreatment: { value: "Imbalanced", status: "bad" }
        },
        {
            name: "Estrogen Control",
            modsMax: { value: "Optimal", status: "good" },
            trtAlone: { value: "Often elevated", status: "bad" },
            noTreatment: { value: "Variable", status: "warn" }
        },
        {
            name: "Dependency Risk",
            modsMax: { value: "Easy to stop", status: "good" },
            trtAlone: { value: "Difficult", status: "bad" },
            noTreatment: { value: "None", status: "good" }
        },
        {
            name: "Total Testosterone",
            modsMax: { value: "Highest", status: "good" },
            trtAlone: { value: "Limited", status: "warn" },
            noTreatment: { value: "Dropping", status: "bad" }
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "good":
                return (
                    <div className="bg-green-500 rounded-full p-1 inline-flex">
                        <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                );
            case "bad":
                return (
                    <div className="bg-red-400 rounded-full p-1 inline-flex">
                        <X size={14} className="text-white" strokeWidth={3} />
                    </div>
                );
            case "warn":
                return (
                    <div className="bg-yellow-500 rounded-full p-1 inline-flex">
                        <AlertTriangle size={14} className="text-white" strokeWidth={3} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div id="compare" className="w-full bg-white py-16 md:py-24">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                        Scientific Comparison
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy">
                        MODS Max vs. Traditional TRT
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto -mx-4 px-4">
                    <table className="w-full min-w-[700px]">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="text-left py-4 px-4 text-navy font-bold">Feature</th>
                                <th className="text-center py-4 px-4">
                                    <div className="bg-primary text-white rounded-xl py-3 px-4 font-bold">
                                        MODS Max + TRT
                                    </div>
                                </th>
                                <th className="text-center py-4 px-4 text-gray-500 font-medium">
                                    TRT Alone
                                </th>
                                <th className="text-center py-4 px-4 text-gray-500 font-medium">
                                    No Treatment
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, idx) => (
                                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="py-5 px-4 font-bold text-navy">
                                        {feature.name}
                                    </td>
                                    <td className="py-5 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            {getStatusIcon(feature.modsMax.status)}
                                            <span className="text-sm font-medium text-navy">
                                                {feature.modsMax.value}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            {getStatusIcon(feature.trtAlone.status)}
                                            <span className="text-sm text-gray-500">
                                                {feature.trtAlone.value}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            {getStatusIcon(feature.noTreatment.status)}
                                            <span className="text-sm text-gray-500">
                                                {feature.noTreatment.value}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
                        Get Your System Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;
