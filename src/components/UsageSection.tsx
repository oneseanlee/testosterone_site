const UsageSection = () => {
    return (
        <div className="w-full bg-white py-8">
            <div className="w-full px-2.5">
                {/* Light gray-blue rounded card */}
                <div className="bg-[#E8ECEF] rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

                        {/* Left: Text Content */}
                        <div className="p-8 md:p-12 lg:p-16 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#001A40] leading-tight italic mb-8">
                                One pill, taken at the <br />
                                same time each day.
                            </h2>

                            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md">
                                Start my evaluation
                            </button>
                        </div>

                        {/* Right: Image */}
                        <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] lg:h-full min-h-[400px]">
                            <img
                                src="/images/rnning_man.avif"
                                alt="Man taking a pill with water"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsageSection;
