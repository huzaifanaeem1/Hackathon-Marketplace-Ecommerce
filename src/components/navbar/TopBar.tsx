"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-[#272343] z-50">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-2 sm:py-4 gap-4 sm:gap-8">
                {/* Left Section */}
                <div className="flex flex-row items-center gap-2 text-white opacity-70">
                    <FaCheck className="text-sm sm:text-base lg:text-lg" />
                    <span className="text-xs sm:text-sm md:text-base font-normal capitalize">
                        Free shipping on all orders over $50
                    </span>
                </div>

                {/* Right Section */}
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 text-white opacity-70">
                    {/* Language Selector */}
                    <div className="flex flex-row items-center gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm md:text-base font-normal">Eng</span>
                        <IoIosArrowDown className="text-sm sm:text-base lg:text-lg" />
                    </div>

                    {/* FAQs */}
                    <button
                        className="text-xs sm:text-sm md:text-base font-normal bg-transparent border-none cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign("/faqs");
                        }}
                    >
                        FAQs
                    </button>

                    {/* Need Help */}
                    <button
                        className="flex flex-row items-center gap-1 sm:gap-2 bg-transparent border-none cursor-pointer"
                        onClick={() => (window.location.href = "/contact")}
                    >
                        <IoAlertCircleOutline className="text-sm sm:text-base lg:text-lg" />
                        <span className="text-xs sm:text-sm md:text-base font-normal">
                            Need Help
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
