import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
    const features = [
        {
            name: "Increases testosterone",
            desc: "Raises both Free and Total Testosterone levels.",
            maximus: "2x",
            trt: "5x"
        },
        {
            name: "Maintains fertility",
            desc: "A fertility-safe treatment that also maintains size and function of testicles.",
            maximus: true,
            trt: false
        },
        {
            name: "No dependency",
            desc: "Ability to start and stop treatment and return to baseline testosterone levels.",
            maximus: true,
            trt: false
        },
        {
            name: "Ease",
            desc: "Convenient daily pill. No injections or messy creams.",
            maximus: true,
            trt: false
        },
        {
            name: "Risk of side effects",
            desc: "Likelihood of side effects caused by treatment.",
            maximus: "Low",
            trt: "Medium"
        },
        {
            name: "Function",
            desc: "How it improves testosterone.",
            maximus: "Boosts natural production",
            trt: "Adds exogenous hormones"
        },
        {
            name: "Liver safety",
            desc: "Clinically shown to not elevate liver enzymes, a sign of liver damage",
            maximus: true,
            trt: true
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="w-full !px-[7.8125vw]">

                {/* Title - Left aligned */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#001A40]">
                        Enclomiphene <span className="text-gray-400 font-sans font-light">vs.</span> TRT
                    </h2>
                </div>

                <div className="overflow-x-auto pb-16 pt-12 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="min-w-[768px]">
                        {/* Table structure with bordered Enclomiphene column */}
                        <div className="grid grid-cols-12 relative items-stretch">

                            {/* Left feature column */}
                            <div className="col-span-5">
                                {/* Empty header space */}
                                <div className="h-24 border-b border-gray-200"></div>

                                {/* Feature rows */}
                                {features.map((feature, idx) => (
                                    <div key={idx} className="h-20 flex flex-col justify-center border-b border-gray-100 pr-6">
                                        <h3 className="font-bold text-[#001A40] text-base leading-tight">{feature.name}</h3>
                                        <p className="text-xs text-gray-500 mt-1 leading-tight">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Enclomiphene column with border */}
                            <div className="col-span-3 border-2 border-primary rounded-2xl relative bg-white shadow-xl z-10 -my-6 py-6 transform scale-105 origin-center">
                                {/* Header */}
                                <div className="h-20 flex flex-col items-center justify-center">
                                    <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1">MAXIMUS</span>
                                    <span className="text-xl font-serif text-[#001A40]">Enclomiphene</span>
                                </div>

                                {/* Value rows */}
                                {features.map((feature, idx) => (
                                    <div key={idx} className="h-20 flex justify-center items-center">
                                        {feature.maximus === true ? (
                                            <div className="bg-primary rounded-full p-1.5 shadow-sm">
                                                <Check size={16} className="text-white" strokeWidth={3} />
                                            </div>
                                        ) : feature.maximus === false ? (
                                            <div className="bg-gray-300 rounded-full p-1.5">
                                                <X size={16} className="text-white" strokeWidth={3} />
                                            </div>
                                        ) : (
                                            <span className="text-[#001A40] font-bold text-lg">{feature.maximus}</span>
                                        )}
                                    </div>
                                ))}

                                {/* Button inside the bordered column */}
                                <div className="pt-6 pb-2 flex justify-center">
                                    <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md whitespace-nowrap">
                                        Start my evaluation
                                    </button>
                                </div>
                            </div>

                            {/* Traditional TRT column */}
                            <div className="col-span-4 pl-4">
                                {/* Header */}
                                <div className="h-24 flex items-center justify-center border-b border-gray-200">
                                    <span className="text-xl text-gray-500">Traditional TRT</span>
                                </div>

                                {/* Value rows */}
                                {features.map((feature, idx) => (
                                    <div key={idx} className="h-20 border-b border-gray-100 flex justify-center items-center">
                                        {feature.trt === true ? (
                                            <div className="bg-primary rounded-full p-1.5">
                                                <Check size={14} className="text-white" strokeWidth={3} />
                                            </div>
                                        ) : feature.trt === false ? (
                                            <div className="bg-gray-300 rounded-full p-1.5">
                                                <X size={14} className="text-white" strokeWidth={3} />
                                            </div>
                                        ) : (
                                            <span className="text-gray-500 font-medium text-sm">{feature.trt}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComparisonTable;
