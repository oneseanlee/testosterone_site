const testimonials = [
    // Top row
    { name: "Darren Lopez", image: "/testimonials/darren-lopez.png" },
    { name: "Dan Schmidt", image: "/testimonials/dan-schmidt.png" },
    { name: "Brett Earnshaw", image: "/testimonials/brett-earnshaw.png" },
    // Bottom row
    { name: "Kerry Reyes", image: "/testimonials/kerry-reyes.png" },
    { name: "Sean Lee", image: "/testimonials/sean-lee.png" },
    { name: "Mike VanDyke", image: "/testimonials/mike-vandyke.png" }
];

const TestimonialCard = ({ name, image }: { name: string; image: string }) => (
    <div className="rounded-2xl overflow-hidden bg-soft-blue shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
        <img
            src={image}
            alt={name}
            className="w-full h-auto"
            loading="lazy"
        />
    </div>
);

const TestimonialsSection = () => {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            {/* Section Header */}
            <div className="px-[34px] mb-14">
                <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight text-center">
                    Real results from <span className="text-primary italic">real men.</span>
                </h2>
                <p className="text-gray-500 text-center mt-4 text-lg max-w-2xl mx-auto">
                    Hear from men who transformed their health with NHTO
                </p>
            </div>

            {/* 2-row grid layout */}
            <div className="px-[34px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
