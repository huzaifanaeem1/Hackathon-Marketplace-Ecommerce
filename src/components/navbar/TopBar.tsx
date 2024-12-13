import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="bg-[#272343] text-[#ffffff]/70 text-[0.5rem] sm:text-xs  xl:text-[13px] lg:px-20 sm:px-10 px-3 py-2 lg:py-[14px]">
       <div className="flex justify-between">
       <div className="flex gap-2 items-center">
        <span><FaCheck/></span>
        <span>Free Shipping On All Order Over $50</span>
        </div> 
        <div className="flex items-center gap-2 xl:gap-6">
        <div className="flex flex-row items-center gap-1 sm:gap-2">
                        <span>Eng</span>
                        <IoIosArrowDown className="size-4 text-sm sm:text-base lg:text-lg" />
                    </div>
            
            <Link href="/faqs">Faqs</Link>
            <div className="flex items-center gap-[6px]">
            
                <span><IoAlertCircleOutline className="size-4"/></span>
                <Link href="/contact">
                <span>Need Help</span>
                </Link>
            </div>
        </div>
       </div>
    </div>
  )
}

export default TopBar;