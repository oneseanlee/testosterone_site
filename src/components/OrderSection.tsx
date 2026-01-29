import { Shield, Truck, Lock, CreditCard } from 'lucide-react';

const OrderSection = () => {
    return (
        <div className="w-full bg-white py-20">
            <div className="w-full" style={{ paddingLeft: '7.8125vw', paddingRight: '7.8125vw' }}>
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                        ⚡ LIMITED TIME OFFER - ORDER NOW
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy">
                        Get Your Complete System Now!
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        🔥 Transform Your Energy in 24 Hours - Ships Today!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-8 border-2 border-primary shadow-2xl">
                        {/* Pricing Header */}
                        <div className="text-center mb-8">
                            <p className="text-sm text-gray-500 mb-2">
                                🚨 LIMITED TIME SPECIAL OFFER
                            </p>
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <span className="text-gray-400 line-through text-2xl">Regular Price: $459</span>
                            </div>
                            <div className="text-6xl md:text-7xl font-bold text-navy">$300</div>
                            <span className="inline-block bg-green-500 text-white font-bold px-4 py-2 rounded-full mt-3">
                                SAVE $159 — That's 35% OFF!
                            </span>
                        </div>

                        {/* Trust Badges Row */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8 pb-8 border-b border-gray-200">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Truck className="w-5 h-5 text-primary" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Shield className="w-5 h-5 text-primary" />
                                <span>60-Day Money-Back Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Lock className="w-5 h-5 text-primary" />
                                <span>Premium Quality</span>
                            </div>
                        </div>

                        {/* Order Breakdown */}
                        <div className="mb-8">
                            <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                                📦 Order Summary
                            </h3>

                            <div className="space-y-4">
                                {/* UCOS */}
                                <div className="flex justify-between items-start p-4 bg-white rounded-xl border border-gray-100">
                                    <div className="flex-1">
                                        <p className="font-bold text-navy">Ultimate Cellular Optimization System (3 Products)</p>
                                        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mt-1">
                                            NON-REFUNDABLE
                                        </span>
                                        <p className="text-xs text-gray-500 mt-1">Yours to keep regardless of medical approval</p>
                                    </div>
                                    <span className="font-bold text-navy text-lg">$160</span>
                                </div>

                                {/* NHTO */}
                                <div className="flex justify-between items-start p-4 bg-white rounded-xl border border-gray-100">
                                    <div className="flex-1">
                                        <p className="font-bold text-navy">Non-Hormonal Testosterone Optimizer + Physician Consultation</p>
                                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded mt-1">
                                            REFUNDABLE IF NOT APPROVED
                                        </span>
                                        <p className="text-xs text-gray-500 mt-1">Licensed physician (via happyMD) reviews eligibility</p>
                                    </div>
                                    <span className="font-bold text-navy text-lg">$140</span>
                                </div>

                                {/* Shipping */}
                                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100">
                                    <span className="font-medium text-gray-600">Shipping</span>
                                    <span className="font-bold text-green-600">FREE</span>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center p-4 bg-navy rounded-xl text-white">
                                    <span className="font-bold text-lg">Total Package Price</span>
                                    <span className="font-bold text-2xl">$300</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-primary hover:bg-blue-700 text-white py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-xl mb-6">
                            YES! I Want My System + Consultation →
                        </button>

                        {/* Risk-Free Promise */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                            <h4 className="font-bold text-green-800 mb-2">Our Risk-Free Promise</h4>
                            <p className="text-sm text-green-700 leading-relaxed">
                                If the independent physician determines you're not a candidate for prescription treatment, 
                                your $140 consultation + optimizer fee is fully refunded. You keep the UCOS supplements 
                                ($160 value) regardless of approval — so you still get incredible cellular optimization benefits.
                            </p>
                            <p className="text-sm text-green-800 font-bold mt-3">
                                You have NOTHING to lose... except the opportunity to optimize your hormones naturally!
                            </p>
                        </div>

                        {/* Payment Icons */}
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <CreditCard className="w-5 h-5" />
                                <span>We accept PayPal, Visa, Mastercard, American Express, and Discover</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-400">
                                <span className="flex items-center gap-1">
                                    <Lock className="w-4 h-4" /> SSL Encrypted
                                </span>
                                <span>PayPal Secure</span>
                                <span>FREE Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSection;
