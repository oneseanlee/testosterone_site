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
            <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
        ))}
    </div>
);

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
            {/* Background Image - Grayscale */}
            <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                className="absolute inset-0 w-full h-full object-cover grayscale"
                loading="lazy"
            />
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating Quote Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <StarRating />
                
                <p className="text-gray-800 text-sm font-medium mt-3 leading-relaxed line-clamp-4">
                    "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3 mt-4">
                    {/* Small Avatar */}
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-navy text-sm truncate">
                                {testimonial.name}
                            </span>
                            {testimonial.hasVerifiedBadge && (
                                <CheckCircle2 size={14} className="text-primary fill-primary/20 flex-shrink-0" />
                            )}
                        </div>
                        <p className="text-xs text-gray-500 truncate">
                            {testimonial.handle || testimonial.credential}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="w-full px-4 md:px-[7.8125vw]">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                        Real results from <span className="text-primary italic">real men.</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
