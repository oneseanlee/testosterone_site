

const BreadcrumbSection = () => {
    return (
        <div className="w-full !px-[7.8125vw] mt-[90px]">
            <nav className="flex text-base text-[#001A40]">
                <a href="#" className="underline text-[#0055CC] hover:text-blue-800">Home</a>
                <span className="mx-2 text-gray-400">&gt;</span>
                <a href="#" className="underline text-[#0055CC] hover:text-blue-800">Testosterone</a>
                <span className="mx-2 text-gray-400">&gt;</span>
                <span className="text-[#001A40]">Enclomiphene</span>
            </nav>
        </div>
    );
};

export default BreadcrumbSection;
