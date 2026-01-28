import { Star, CheckCircle2 } from 'lucide-react';

interface Testimonial {
    name: string;
    quote: string;
    credential: string;
    image: string;
    hasVerifiedBadge: boolean;
    handle?: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Kerry Reyes",
        quote: "I've competed at the highest level. NHTO helped restore energy without hormones.",
        credential: "Former California Championships - NPC, MiddleWeight, 1st",
        image: "/testimonials/kerry-reyes.png",
        hasVerifiedBadge: true,
        handle: "@kerryreyesfitness"
    },
    {
        name: "Sean Lee",
        quote: "I was skeptical of anything 'non-hormonal,' but NHTO surprised me. I feel sharper, more driven, and balanced without the risks I was worried about.",
        credential: "@oneseanlee",
        image: "/testimonials/sean-lee.png",
        hasVerifiedBadge: true
    },
    {
        name: "Darren Lopez",
        quote: "Our goal was simple: create a solution that truly helps people reclaim their energy, resilience, and confidence by optimizing health at the cellular level.",
        credential: "Co-Founder",
        image: "/testimonials/darren-lopez.png",
        hasVerifiedBadge: false
    },
    {
        name: "Dan Schmidt",
        quote: "I'm proud to help build a system that combines the latest science with real-world results—empowering everyone to achieve peak cellular health.",
        credential: "Co-Founder",
        image: "/testimonials/dan-schmidt.png",
        hasVerifiedBadge: false
    },
    {
        name: "Brett Earnshaw",
        quote: "My testosterone went from 658 to 749 in two months—more energy, sharper focus, better performance. This system changed my life.",
        credential: "Early Tester",
        image: "/testimonials/brett-earnshaw.png",
        hasVerifiedBadge: false
    },
    {
        name: "Mike VanDyke",
        quote: "I experienced rapid improvements in energy and cellular performance. It's a game-changer for anyone serious about health.",
        credential: "Early Tester",
        image: "/testimonials/mike-vandyke.png",
        hasVerifiedBadge: false
    }
];

const StarRating = () => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
        ))}
    </div>
);

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="flex-shrink-0 w-[320px] md:w-[380px] group">
            <div className="relative h-[480px] md:h-[540px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                {/* Background Image - Full visibility with contain */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <img
                        src={testimonial.image}
                        alt={`${testimonial.name}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                    />
                </div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60" />

                {/* Floating Quote Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/98 backdrop-blur-md rounded-xl p-5 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-1">
                    <StarRating />
                    
                    <p className="text-gray-800 text-sm leading-relaxed mt-3 line-clamp-3 font-medium">
                        "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                        {/* Small Avatar */}
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-navy text-sm">
                                    {testimonial.name}
                                </span>
                                {testimonial.hasVerifiedBadge && (
                                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                                )}
                            </div>
                            <p className="text-xs text-gray-500 truncate">
                                {testimonial.handle || testimonial.credential}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="w-full bg-white py-20 md:py-28 overflow-hidden">
            {/* Section Header */}
            <div className="px-4 md:px-[7.8125vw] mb-14">
                <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight text-center">
                    Real results from <span className="text-primary italic">real men.</span>
                </h2>
                <p className="text-gray-500 text-center mt-4 text-lg max-w-2xl mx-auto">
                    Hear from men who transformed their health with NHTO
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div 
                    className="flex gap-6 animate-scroll hover:pause-animation"
                    style={{
                        width: 'max-content',
                    }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
