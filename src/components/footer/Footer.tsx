import Link from "next/link";
import Image from "next/image";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterFill } from "react-icons/ri";
import { LiaInstagram } from "react-icons/lia";
import { AiFillPinterest } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";


const Footer = () => {
  return (
    <div className=""> 
       <div className="lg:py-20 sm:py-10 py-3 border-y overflow-hidden sm:px-10 px-3 lg:px-20">
       <div className="flex md:flex-row flex-wrap flex-col gap-3 lg:gap-12">
             {/* Logo */}
         <div className="flex flex-col gap-2 lg:gap-6">
         <div className="logo flex items-center gap-2">
            <Image 
                        src="/images/icons/middlebar.png" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="sm:w-auto" />
            <span className="text-[#272343] md:text-[26px] text-xl font-medium">Comforty</span>
         </div>
         <p className="text-[#272343]/70 lg:text-base text-sm max-w-[350px]">Lorem ipsum dolor, mpora mollitia velit possimus harum eveniet debitis magni!</p>
         <div className="icons flex gap-1 text-[#636270]">
          <Link href='/' className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]" >
          <MdOutlineFacebook className="size-5" />
          </Link>
          <Link href='/' className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]" >
          <RiTwitterFill className="size-5" />
          </Link>
          <Link href='/' className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]" >
          <LiaInstagram className="size-5" />
          </Link>
          <Link href='/' className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]" >
          <AiFillPinterest className="size-5" />
          </Link>
          <Link href='/' className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"  >
          <BiLogoYoutube className="size-5" />
          </Link>
         </div>
         </div>
         <div className="flex justify-between gap-3 md:gap-12">
          {/* Category */}
         <div className="lg:space-y-5 space-y-2" >
            <h6 className="text-[#9A9CAA] uppercase tracking-wider text-[14px] font-medium">Category</h6>
           <div className="flex flex-col text-sm md:text-[16px] space-y-1 lg:space-y-3 text-[#272343]">
           <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580] ">Sofa</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Armchair</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Wing Chair</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Desk Chair</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Wooden Chair</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Park Bench</Link>
           </div>
         </div>
         {/* Support */}
         <div  className="lg:space-y-5 space-y-2" >
            <h6 className="text-[#9A9CAA] uppercase tracking-wider text-[14px] font-medium">Support</h6>
           <div className="flex flex-col text-sm md:text-[16px] space-y-1 lg:space-y-3 text-[#272343]">
           <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Help & Support</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Terms & Conditions</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Privacy Policy</Link>
            <Link href='/' className="hover:underline hover:underline-offset-4 hover:text-[#007580]" >Help</Link>
           </div>
         </div>
         </div>
         {/* News Letter */}
         <div  className="lg:space-y-5 space-y-2 text-[#9A9CAA]" >
            <h6 className=" uppercase tracking-wider text-[14px] font-medium">Newsletter</h6>
            <div className="flex flex-wrap gap-2">
            <p className="border rounded-lg"><input type='email' placeholder="Your email" className="outline-none border-none lg:px-3 px-1 py-2 rounded-lg" /></p>
            <button className="bg-[#007580] text-white py-2 rounded-lg px-1 lg:px-3">Subscribe</button>
            </div>
           <p className="max-w-[350px] lg:text-base text-sm text-[#272343]/70">Lorem ipsum dolor sit amet consectetur, adipisicing eleum hic dolores quae dolor qui.</p>
         </div>
        </div>
       </div>
       {/* copyright */}
       <div className="last flex lg:justify-between justify-center lg:px-10 px-2 py-2 lg:py-3 lg:text-sm text-[0.5rem] items-center">
        <p className="text-[#9A9CAA]">@ 2024 - Blogy - Designed & Developed by <span className="text-[#272343]">Huzaifa Naeem</span> </p>
        <div className="text-[#9A9CAA] mt-2 mb-2 flex justify-center space-x-1 sm:space-x-1 ">
                    <FaCcMastercard size={30} />
                    <FaPaypal size={30} />
                    <SiAmericanexpress size={30} />
                    <FaCcVisa size={30} />
                </div>
       </div>
    </div>
  )
}

export default Footer