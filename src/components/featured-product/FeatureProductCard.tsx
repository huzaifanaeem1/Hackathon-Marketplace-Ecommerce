import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const FeaturedProductCard = () => {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto mt-[100px] px-4 sm:px-10 md:px-[100px] lg:px-[300px]">
      {/* Heading Section */}
      <div className="flex justify-start items-start mb-6">
  <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272343] capitalize">
    Featured Products
  </h2>
</div>


      {/* Product Cards Row */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-[20px]">
        {/* First Product Card */}
        <div className="w-[312px] h-auto relative">
          <div
            className="w-[312px]  h-[312px] bg-cover bg-center rounded-lg"
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
              <span className="text-xl text-[#272343]">$20</span>
            </div>
            <button className="bg-[#029FAE] hover:bg-white rounded-lg w-[44px] h-[44px] flex items-center justify-center">
              <PiShoppingCartSimple className="w-[24px] h-[24px] text-white" />
            </button>
          </div>
        </div>

        {/* Second Product Card */}
        <div className="w-[312px] h-auto relative">
          <div
            className="w-[312px]  h-[312px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/images/Product/product2.png')" }}
          ></div>
          <div className="absolute flex items-center px-2 py-1 bg-[#F5813F] rounded-[4px] left-4 top-4">
            <span className="text-xs font-medium text-white capitalize">Sale</span>
          </div>
          <div className="flex items-center justify-between mt-4 px-2">
            <div>
              <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">
                Library Stool Chair
              </span>
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
        <div className="w-[312px] h-auto relative">
          <div
            className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/images/Product/product3.png')" }}
          ></div>
          <div className="flex items-center justify-between mt-4 px-2">
            <div>
              <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">
                Library Stool Chair
              </span>
              <span className="text-xl">$20</span>
            </div>
            <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
              <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
            </button>
          </div>
        </div>

        {/* Fourth Product Card */}
        <div className="w-[312px] h-auto relative">
          <div
            className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/images/Product/product4.png')" }}
          ></div>
          <div className="flex items-center justify-between mt-4 px-2">
            <div>
              <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">
                Library Stool Chair
              </span>
              <span className="text-xl text-[#272343]">$20</span>
            </div>
            <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
              <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductCard;
