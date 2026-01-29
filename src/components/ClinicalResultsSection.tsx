import { TrendingUp, Clock, Shield, Target } from 'lucide-react';

const ClinicalResultsSection = () => {
    const stats = [
        { icon: TrendingUp, value: "664%", label: "Max T Increase" },
        { icon: Clock, value: "3 Weeks", label: "Avg. Results Time" },
        { icon: Shield, value: "100%", label: "Patient Safety" },
        { icon: Target, value: "1000+", label: "ng/dL Achieved" }
    ];

    const transformations = [
        {
            name: "Alex T.",
            age: 32,
            increase: "664%",
            timeframe: "3 weeks",
            before: "120 ng/dL",
            after: "917 ng/dL",
            quote: "I went from feeling like an old man to having the energy of a teenager."
        },
        {
            name: "Marcus L.",
            age: 30,
            increase: "130%",
            timeframe: "6 weeks",
            before: "566 ng/dL",
            after: "1,305 ng/dL",
            quote: "Brain fog lifted, workouts exploded, confidence skyrocketed."
        },
        {
            name: "David R.",
            age: 45,
            increase: "202%",
            timeframe: "4 weeks",
            before: "380 ng/dL",
            after: "1,150 ng/dL",
            quote: "My productivity is through the roof. Best investment I've made in myself."
        },
        {
            name: "Mark",
            age: 60,
            increase: "400%+",
            timeframe: "4 weeks",
            before: "Low 200s",
            after: "1,000+ ng/dL",
            quote: "I feel 20 years younger. My energy is through the roof."
        }
    ];

    return (
        <div id="results" className="w-full py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <div className="bg-soft-blue rounded-3xl p-8 md:p-12 lg:p-16">
                    {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                        CLINICAL RESULTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight mb-4">
                        Real Transformations
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Men across all ages are experiencing dramatic improvements in energy, vitality, and overall wellness.
                    </p>
                </div>

                {/* Zero Adverse Events Banner */}
                <div className="bg-green-500 text-white text-center py-3 rounded-full mb-12 font-bold text-sm">
                    ZERO Adverse Events Across ALL Patients
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, idx) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                                <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Transformation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {transformations.map((person, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                        >
                            {/* Avatar placeholder */}
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                                {person.name.charAt(0)}
                            </div>

                            <h3 className="font-bold text-navy text-lg">{person.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">Age {person.age}</p>

                            {/* Increase Badge */}
                            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                                Up to {person.increase} in {person.timeframe}
                            </div>

                            {/* Before/After */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-red-400 text-sm line-through">{person.before}</span>
                                <span className="text-gray-400">→</span>
                                <span className="text-green-600 font-bold">{person.after}</span>
                            </div>

                            {/* Quote */}
                            <p className="text-gray-600 text-sm italic">
                                "{person.quote}"
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClinicalResultsSection;
