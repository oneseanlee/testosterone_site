

const MarketingBanner = () => {
    return (
        <div className="w-full bg-white py-16 text-center">
            <div className="w-full !px-[7.8125vw]">
                <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                    Natural testosterone. <span className="text-primary italic">Naturally restored.</span>
                </h2>

                <div className="mt-8 border-t border-gray-200 pt-4 flex justify-center items-center gap-2 text-sm text-navy">
                    <span>Enclomiphene: 4 weeks to reach full effect</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MarketingBanner;
