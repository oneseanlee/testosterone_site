import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-bold text-navy group-hover:text-primary transition-colors pr-8">
                    {question}
                </span>
                <span className="flex-shrink-0 text-primary">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "How is the consultation facilitated?",
            a: "The consultation is facilitated through happyMD, a licensed telehealth platform. An independent licensed physician will review your health intake form and determine if you're a candidate for the prescription treatment."
        },
        {
            q: "What happens if I'm not approved?",
            a: "If the independent physician determines you're not a candidate for prescription treatment, your $140 consultation + optimizer fee is fully refunded. You keep the UCOS supplements ($160 value) regardless of approval."
        },
        {
            q: "Can I use this with my current TRT?",
            a: "Yes! MODS Max is designed to work synergistically with TRT protocols. Many physicians are adding it to their TRT protocols to help maintain testicular function and fertility while optimizing hormone levels."
        },
        {
            q: "Does this preserve fertility?",
            a: "Yes, unlike traditional TRT which can suppress sperm production, our Non-Hormonal Testosterone Optimizer helps maintain natural LH/FSH signaling, which supports sperm production and testicular function."
        },
        {
            q: "How quickly will I see results?",
            a: "Most patients report noticing improvements in energy and mood within the first 2-4 weeks. Clinical results show significant testosterone increases in as little as 3 weeks, with optimal results typically achieved within 4-6 weeks."
        },
        {
            q: "Are there side effects?",
            a: "The Non-Hormonal Testosterone Optimizer is generally well-tolerated with zero adverse events reported across all patients in clinical settings. Potential mild side effects are rare compared to traditional TRT."
        },
        {
            q: "Is this FDA approved?",
            a: "The prescription medication (Enclomiphene) is FDA-regulated and dispensed through licensed pharmacies. The supplement products (UCOS system) are manufactured in FDA-registered facilities following GMP guidelines."
        },
        {
            q: "What's included in the bundle?",
            a: "The complete system includes: Non-Hormonal Testosterone Optimizer (Rx formula), Activate365, Mito365, Restore365 (the UCOS system), and a licensed physician consultation via happyMD."
        },
        {
            q: "How do I take the products?",
            a: "The Non-Hormonal Testosterone Optimizer is a sublingual formula taken daily. Activate365 is taken first thing in the morning, Mito365 15 minutes after, and Restore365 30-60 minutes before bed."
        },
        {
            q: "Who is happyMD?",
            a: "happyMD is an independent licensed telehealth platform that facilitates medical consultations with board-certified physicians. They review your health information and determine prescription eligibility independently."
        }
    ];

    return (
        <div className="w-full bg-white py-20 px-4 md:px-[7.8125vw]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="w-8 h-8 text-primary" />
                        <span className="text-sm font-bold text-primary uppercase tracking-wide">
                            Medical Questions
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-3 text-sm">
                        <p className="text-gray-600">
                            Have more questions? We're here to help.
                        </p>
                        <a href="tel:385-421-5651" className="text-primary font-bold hover:underline">
                            📞 Call: 385-421-5651
                        </a>
                        <a href="mailto:info@best365labs.com" className="text-primary font-bold hover:underline">
                            📧 info@best365labs.com
                        </a>
                    </div>
                </div>

                {/* Right Column - FAQs */}
                <div className="lg:col-span-8">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
