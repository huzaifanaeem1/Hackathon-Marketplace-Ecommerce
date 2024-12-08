
import React from 'react'
import { PiShoppingCartSimple } from 'react-icons/pi'

export default function page() {
    return (
        <><section className="">

            <div className="absolute flex flex-row justify-between items-center px-[300px] gap-[846px] w-[1920px] h-[44px] left-0 top-[300px]">
                <div className="text-[32px] font-semibold leading-[1.1] text-[#272343] capitalize">
                    All Products
                </div>
            </div>



            <div className="flex justify-center gap-[30px] mt-[400px] px-[300px]">
                {/* First Row with 4 Product Cards */}
                <div className="flex gap-[30px]">
                    {/* First Product Card */}
                    <div className="w-[312px] h-[377px] relative">
                        <div
                            className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('/images/Product/product1.png')" }}
                        ></div>
                        <div className="absolute flex items-center px-2 py-1 bg-[#01AD5A] rounded-[4px] left-4 top-4">
                            <span className="text-xs font-medium text-white capitalize">New</span>
                        </div>
                        <div className="flex items-center justify-between mt-4 px-2">
                            <div>
                                <span className="block text-[16px] leading-[130%] text-[#007580] capitalize hover:text-[#272343] font-normal">
                                    Library Stool Chair
                                </span>
                                {/* <span className="block text-lg text-[#272343] hover:text-[#007580] capitalize">Library Stool Chair</span> */}
                                <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">
                                    $20
                                </span>
                            </div>
                            <button className="bg-[#029FAE] hover:bg-white rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                                <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                            </button>
                        </div>
                    </div>

                    {/* Second Product Card */}
                    <div className="w-[312px] h-[312px]  relative">
                        <div
                            className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('/images/Product/product2.png')" }}
                        ></div>
                        <div className="absolute flex items-center px-2 py-1 bg-[#F5813F] rounded-[4px] left-4 top-4">
                            <span className="text-xs font-medium text-white capitalize">Sale</span>
                        </div>
                        <div className="flex items-center justify-between mt-4 px-2">
                            <div>
                                <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                                    <span className="text-[14px] leading-[110%] font-normal text-[#9A9CAA] line-through capitalize">
                                        $39
                                    </span>
                                </div>
                            </div>
                            <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                                <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                            </button>
                        </div>
                    </div>

                    {/* Third Product Card */}
                    <div className="w-[312px] h-[312px] relative">
                        <div
                            className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('/images/Product/product3.png')" }}
                        ></div>
                        <div className="flex items-center justify-between mt-4 px-2">
                            <div>
                                <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                                <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                            </div>
                            <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                                <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                            </button>
                        </div>
                    </div>

                    {/* Fourth Product Card */}
                    <div className=" flex justify-center w-[312px] h-[312px] relative">
                        <div
                            className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                            style={{ backgroundImage: "url('/images/Product/product4.png')" }}
                        ></div>
                        <div className="flex items-center justify-between mt-4 px-2">
                            <div>
                                <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                                <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                            </div>
                            <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                                <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-start gap-[30px] mt-[150px] px-[170px]">
                {/* Second Row with 4 Product Cards */}
                {/* First Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/Product/product8.png')" }}
                    ></div>
                    <div className="absolute flex items-center px-2 py-1 bg-[#01AD5A] rounded-[4px] left-4 top-4">
                        <span className="text-xs font-medium text-white capitalize">New</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>

                {/* Second Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/categories/Hot3.png')" }}
                    ></div>
                    <div className="absolute flex items-center px-2 py-1 bg-[#F5813F] rounded-[4px] left-4 top-4">
                        <span className="text-xs font-medium text-white capitalize">Sale</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                                <span className="text-[14px] leading-[110%] font-normal text-[#9A9CAA] line-through capitalize">
                                    $39
                                </span>
                            </div>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>

                {/* third Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/Product/product7.png')" }}
                    ></div>

                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>

                {/* Fourth Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/Product/product1.png')" }}
                    ></div>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>
            </div>



            <div className="flex justify-start gap-[30px] mt-[200px] px-[170px]">
                {/* third Row with 4 Product Cards */}
                {/* First Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/Product/product8.png')" }}
                    ></div>
                    <div className="absolute flex items-center px-2 py-1 bg-[#01AD5A] rounded-[4px] left-4 top-4">
                        <span className="text-xs font-medium text-white capitalize">New</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>

                {/* Second Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/Product/product2.png')" }}
                    ></div>
                    <div className="absolute flex items-center px-2 py-1 bg-[#F5813F] rounded-[4px] left-4 top-4">
                        <span className="text-xs font-medium text-white capitalize">Sale</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                                <span className="text-[14px] leading-[110%] font-normal text-[#9A9CAA] line-through capitalize">
                                    $39
                                </span>
                            </div>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>

                {/* third Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/Product/product3.png')" }}
                    ></div>

                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>

                {/* Fourth Product Card */}
                <div className="w-[312px] h-[312px] relative">
                    <div
                        className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: "url('/images/categories/category3.png')" }}
                    ></div>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <div>
                            <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">Library Stool Chair</span>
                            <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
                        </div>
                        <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
                            <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
                        </button>
                    </div>
                </div>
            </div>

        </section>
            <section className="bg-white relative flex flex-col items-center px-[300px] py-[100px] gap-[70px] mt-[100px]">
                {/* Newsletter Title */}
                <div className="text-[50px] leading-[59px] font-['Roboto'] font-medium text-black capitalize text-center">
                    Or subscribe to the newsletter
                </div>

                {/* Newsletter Form */}
                <div className="relative w-[760px] h-[165px] flex flex-col items-center">
                    {/* Input */}
                    <div className="flex items-center w-full">
                        <input
                            type="email"
                            placeholder="Email address..."
                            className="w-[643px] h-[32px] text-[16px] leading-[19px] font-['Roboto'] font-semibold text-[rgba(30,40,50,0.5)] px-4 capitalize border-x-0 border-t-0 border-b-2 border-[#1E2832] focus:outline-none "
                        />
                        <button className="w-[91px] h-[32px] ml-[16px] bg-transparent text-[16px] leading-[22px] font-['Open_Sans']  text-black  capitalize flex items-center justify-center border-x-0 border-t-0 border-b-2 border-[#1E2832] focus:outline-none">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Instagram Section Title */}
                <div className='w-[1324px] h-[319px] '>
                    <div className="text-[50px] leading-[59px] font-['Roboto'] font-medium capitalize text-center">
                        Follow us on Instagram
                    </div>

                    {/* Instagram Grid */}
                    <div className="flex justify-center items-center gap-[24px] mt-[60px]">
                        {/* Instagram Images */}
                        {["/images/categories/category2.png", "/images/categories/category1.png", "/images/Product/product2.png", "/images/Product/product1.png", "/images/Product/product3.png", "/images/categories/category3.png"].map(
                            (image, index) => (
                                <div
                                    key={index}
                                    className="w-[200px] h-[200px] bg-cover bg-center rounded-[6px]"
                                    style={{
                                        backgroundImage: `url(${image})`,
                                    }}
                                ></div>
                            )
                        )}
                    </div>
                </div>
            </section></>
    )
}
