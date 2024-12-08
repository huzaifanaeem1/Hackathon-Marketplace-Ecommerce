import React from "react";

const HotCategories = () => {
    return (
        <section className="relative w-full max-w-[1320px] h-auto mx-auto mt-[100px] px-[20px] sm:px-[50px] lg:px-0">
            {/* Rotated Text */}
            <div className="absolute pl-16 hidden lg:block w-auto h-[52px] top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-black font-['Roboto'] font-normal text-[20px] sm:text-[28px] lg:text-[34px] leading-[40px] text-center uppercase -left-[100px] sm:-left-[200px] lg:-left-[350px]">
                Explore New & Popular Styles
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] h-auto">
                {/* Large Image */}
                <div
                    className="col-span-1 lg:col-span-2 row-span-2 bg-cover bg-center w-full h-[300px] sm:h-[400px] lg:h-[655px]"
                    style={{
                        backgroundImage: "url('/images/categories/Hot.png')",
                    }}
                ></div>

                <div className="grid grid-cols-2 gap-[10px] sm:gap-[20px] lg:gap-[30px] justify-items-center items-center">
                    {/* Small Image 1 */}
                    <div
                        className="w-full max-w-[312px] h-[150px] sm:h-[200px] lg:h-[312px] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/categories/Hot1.png')",
                        }}
                    ></div>

                    {/* Small Image 2 */}
                    <div
                        className="w-full max-w-[312px] h-[150px] sm:h-[200px] lg:h-[312px] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/categories/Hot2.png')",
                        }}
                    ></div>

                    {/* Small Image 3 */}
                    <div
                        className="w-full max-w-[312px] h-[150px] sm:h-[200px] lg:h-[312px] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/categories/Hot3.png')",
                        }}
                    ></div>

                    {/* Small Image 4 */}
                    <div
                        className="w-full max-w-[312px] h-[150px] sm:h-[200px] lg:h-[312px] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/categories/Hot2.png')",
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default HotCategories;
