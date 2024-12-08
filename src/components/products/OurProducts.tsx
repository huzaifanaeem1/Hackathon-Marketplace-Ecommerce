import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const OurProduct = () => {
    return (
        <section className="w-full max-w-[1320px] mx-auto py-[50px] px-[20px] sm:px-[50px] lg:px-0">
            {/* Title */}
            <div className="text-center mb-[40px]">
                <h2 className="text-[#272343] font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] capitalize">
                    Our Products
                </h2>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[30px]">
                {/* Product Card 1 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/product/product1.png')",
                        }}
                    ></div>
                    <div
                        className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#01AD5A]`}
                    >
                        <span className="text-xs font-medium text-white capitalize">New</span>
                    </div>
                </div>

                {/* Product Card 2 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/product/product2.png')",
                        }}
                    ></div>
                    <div
                        className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#F5813F]`}
                    >
                        <span className="text-xs font-medium text-white capitalize">Sale</span>
                    </div>
                </div>

                {/* Product Card 3 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/product/product3.png')",
                        }}
                    ></div>
                </div>

                {/* Product Card 4 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/product/product4.png')",
                        }}
                    ></div>
                </div>

                {/* Product Card 5 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/categories/category1.png')",
                        }}
                    ></div>
                    <div
                        className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#01AD5A]`}
                    >
                        <span className="text-xs font-medium text-white capitalize">New</span>
                    </div>
                </div>

                {/* Product Card 6 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/categories/Hot3.png')",
                        }}
                    ></div>
                    <div
                        className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#F5813F]`}
                    >
                        <span className="text-xs font-medium text-white capitalize">Sale</span>
                    </div>
                </div>

                {/* Product Card 7 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/product/product7.png')",
                        }}
                    ></div>
                </div>

                {/* Product Card 8 */}
                <div className="relative bg-cover bg-center rounded-lg">
                    <div
                        className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
                        style={{
                            backgroundImage: "url('/images/product/product1.png')",
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default OurProduct;
