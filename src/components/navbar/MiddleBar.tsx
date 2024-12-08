"use client";
import React from "react";
import Image from "next/image";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Middle = () => {
  return (
    <section className="flex flex-row justify-between items-center px-[300px] py-[20px] gap-[302px] absolute w-full h-[84px] left-0 top-[45px] bg-[#F0F2F3]">
      
      {/* Left: Logo Container with Icon and Text */}
      <div className="flex flex-row items-center gap-[8px]">
        <div className="w-[40px] h-[40px]">
          <Image src="/images/icons/middlebar.png" alt="Logo Icon" width={40} height={40} />
        </div>
        <h2 className="text-[#272343] font-medium text-[26px] leading-[120%]">Comfortly</h2>
      </div>
      
      <div className="flex flex-row justify-center items-center px-[16px] py-[11px] gap-[12px] w-[120px] h-[44px] bg-white rounded-[8px]">
      {/* Shopping Cart Icon */}
      <PiShoppingCartSimpleBold className="text-[#272343] text-[18px]" />
      
      {/* Cart Text */}
      <button
  className="relative w-[20px] h-[20px] bg-[#007580] rounded-full flex items-center justify-center focus:outline-none"
  aria-label="Go to cart"
  onClick={() => (window.location.href = '/cart')}
>
  <span className="text-white font-medium text-[10px]">2</span>
</button>


    </div>
      
      
    </section>
  );
};

export default Middle;


