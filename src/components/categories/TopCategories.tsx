import React from "react";

const TopCategories = () => {
    return (
        <section className="relative w-full max-w-[2216px] h-auto mt-[100px] mx-auto">
            {/* Heading Section */}
            <div className="w-full max-w-[2216px] h-[44px] flex justify-between items-center px-[20px] sm:px-[50px] lg:px-[300px]">
                <div className="text-2xl font-semibold text-[#272343] capitalize">
                    Top Categories
                </div>
                <div className="flex-none w-[106px] h-[44px]"></div>
            </div>

            {/* Product Cards Row */}
            <div className="flex flex-wrap justify-center gap-[20px] sm:gap-[30px] mt-[20px] px-[20px] sm:px-[50px] lg:px-[300px]">
                {/* First Product Card */}
                <div className="w-[90%] max-w-[424px] h-[424px] relative">
                    <div
                        className="w-full h-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/categories/category1.png')" }}
                    >
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 px-3 py-2 rounded-b-lg">
                            <div className="text-lg text-white capitalize">Wing Chair</div>
                            <div className="text-sm text-white opacity-70">3,584 Products</div>
                        </div>
                    </div>
                </div>

                {/* Second Product Card */}
                <div className="w-[90%] max-w-[424px] h-[424px] relative">
                    <div
                        className="w-full h-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/categories/category2.png')" }}
                    >
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 px-3 py-2 rounded-b-lg">
                            <div className="text-lg text-white capitalize">Wooden Chair</div>
                            <div className="text-sm text-white opacity-70">157 Products</div>
                        </div>
                    </div>
                </div>

                {/* Third Product Card */}
                <div className="w-[90%] max-w-[424px] h-[424px] relative">
                    <div
                        className="w-full h-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/categories/category3.png')" }}
                    >
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 px-3 py-2 rounded-b-lg">
                            <div className="text-lg text-white capitalize">Desk Chair</div>
                            <div className="text-sm text-white opacity-70">154 Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
