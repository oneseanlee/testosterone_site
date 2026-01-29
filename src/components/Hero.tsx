import { Truck, Shield, Award, Stethoscope, Gift } from 'lucide-react';

const Hero = () => {
    return (
        <div className="w-full bg-white py-8 md:py-12">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left: Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold w-fit">
                            <span>Best365Labs</span>
                            <span className="text-xs opacity-75">- Cellular Optimization</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy leading-tight">
                            Revolutionary Non-Hormonal Testosterone Optimizer
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Restore your testosterone naturally. No injections, no hormones, no fertility risks.
                        </p>

                        {/* Key Benefits */}
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary font-bold mt-0.5">✓</span>
                                <span><strong>Maintains Testicular Function</strong> — Preserves natural size and health</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary font-bold mt-0.5">✓</span>
                                <span><strong>Protects Fertility</strong> — Maintains sperm production capacity</span>
                            </li>
                            <li className="flex items-start gap-3 text-navy">
                                <span className="text-primary font-bold mt-0.5">✓</span>
                                <span><strong>Stimulates Natural LH/FSH</strong> — Keeps hormone system active</span>
                            </li>
                        </ul>

                        {/* CTA */}
                        <p className="text-sm text-gray-500 italic">
                            Get medical consultation with refund protection
                        </p>

                        <button className="w-full md:w-auto bg-primary hover:bg-blue-700 text-white py-4 px-8 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                            YES! I Want My System + Consultation
                        </button>

                        <p className="text-xs text-gray-500 text-center md:text-left">
                            Complete System + Medical Consultation Included
                        </p>
                    </div>

                    {/* Right: Pricing Card */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                            {/* happyMD Badge */}
                            <div className="flex items-center gap-3 mb-6 bg-white rounded-xl p-4 border border-gray-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Gift className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-navy">Consultation Facilitated by happyMD</p>
                                    <p className="text-xs text-gray-500">$200 Value - Includes Licensed Physician Evaluation</p>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="text-center mb-6">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="text-gray-400 line-through text-xl">$459</span>
                                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        SAVE $159
                                    </span>
                                </div>
                                <div className="text-6xl font-bold text-navy">$300</div>
                                <p className="text-gray-500 mt-2">Complete System</p>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                                    <Truck className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-xs font-bold text-navy">Free Shipping</p>
                                        <p className="text-[10px] text-gray-500">Nationwide delivery</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-xs font-bold text-navy">60-Day Guarantee</p>
                                        <p className="text-[10px] text-gray-500">Money-back promise</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                                    <Award className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-xs font-bold text-navy">Premium Quality</p>
                                        <p className="text-[10px] text-gray-500">Made in USA</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                                    <Stethoscope className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-xs font-bold text-navy">Doctor Consultation</p>
                                        <p className="text-[10px] text-gray-500">Included with order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
