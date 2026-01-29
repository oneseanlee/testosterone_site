import { Quote } from 'lucide-react';

const DoctorTestimonialsSection = () => {
    const doctors = [
        {
            name: "Dr. Steven Warren, MD, PhD",
            credentials: "35+ years experience, Triple Board-Certified",
            quote: "The clinical results with Testosterone Optimizer powered by MODS Max are unprecedented. Men are getting their lives back without compromising their natural hormone production.",
            initials: "SW"
        },
        {
            name: "Board-Certified Urologist",
            credentials: "15+ years TRT experience",
            quote: "I've been prescribing TRT for 15 years. Adding this to my protocols has eliminated most of the side effects I used to see. Testicular atrophy is virtually non-existent now.",
            initials: "MD"
        },
        {
            name: "Dr. K, Cardiologist",
            credentials: "Participant & Medical Professional",
            quote: "As a cardiologist who experienced the benefits firsthand, the cardiovascular safety profile is excellent. The patent-pending delivery system is revolutionary.",
            initials: "DK"
        }
    ];

    return (
        <div className="w-full py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                <div className="bg-navy rounded-3xl p-8 md:p-12 lg:p-16">
                    {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                        DOCTOR TESTIMONIALS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white">
                        What Medical Professionals Say
                    </h2>
                </div>

                {/* Doctor Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctors.map((doctor, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-10 h-10 text-primary/50 mb-6" />

                            {/* Quote */}
                            <p className="text-white/90 leading-relaxed mb-8 italic">
                                "{doctor.quote}"
                            </p>

                            {/* Doctor Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {doctor.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{doctor.name}</h4>
                                    <p className="text-sm text-gray-400">{doctor.credentials}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorTestimonialsSection;
