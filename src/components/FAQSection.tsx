import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6">
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
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed">
                    {answer}
                </p>
                {isOpen && (
                    <a href="#" className="inline-block mt-2 text-primary text-sm font-bold hover:underline">Read more</a>
                )}
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "How does the Enclomiphene protocol work?",
            a: "Enclomiphene helps your body increase its own testosterone production over time, rather than replacing it. This can raise testosterone while supporting testicular function and fertility markers. Extensive scientific research and clinical practice have vetted the oral medications used in the Enclomiphene Protocol."
        },
        {
            q: "When will I start noticing results?",
            a: "Most patients report noticing improvements in energy and mood within the first 2-4 weeks, with full benefits typically realized after 3-4 months of consistent use."
        },
        {
            q: "How do I take Enclomiphene?",
            a: "It is a convenient daily pill taken orally. Your specific dosage will be determined by your doctor based on your evaluation."
        },
        {
            q: "What are the potential side effects of Enclomiphene?",
            a: "Enclomiphene is generally well-tolerated. Potential side effects are mild and may include headache or hot flashes, but these are rare compared to traditional TRT."
        },
        {
            q: "Is Enclomiphene as effective as TRT?",
            a: "For many men, yes. It can significantly raise testosterone levels while maintaining fertility, which TRT does not do. However, results vary by individual."
        },
        {
            q: "Do I need lab work before starting Enclomiphene?",
            a: "Yes, baseline lab work is required to ensure you are a good candidate and to measure your progress."
        },
        {
            q: "Can I use recent blood work instead of taking the at-home test?",
            a: "Yes, if your lab work is from within the last 3 months and measures the necessary biomarkers, you may be able to use it."
        }
    ];

    return (
        <div className="w-full bg-white py-20 px-4 md:px-[7.8125vw]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h2 className="text-5xl font-serif text-navy mb-6">
                        Enclomiphene <br /> FAQs
                    </h2>
                    <div className="flex flex-col gap-2 text-sm font-bold text-primary uppercase tracking-wide">
                        <a href="#" className="hover:underline">Contact</a>
                        <a href="#" className="hover:underline">Support</a>
                    </div>
                </div>

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
