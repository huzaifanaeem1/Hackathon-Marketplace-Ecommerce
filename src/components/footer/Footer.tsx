
// import Image from "next/image";
// import { FaCcAmex, FaCcMastercard, FaCcVisa, FaFacebook, FaFacebookF, FaInstagram, FaPaypal, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa6";
// import { SiAmericanexpress } from "react-icons/si";

// export default function Footer() {
//     return (
//         <>
//             <div className="pt-40 w-full">
//                 <div className="bg-[#F0F2F3] w-full flex flex-col md:flex-row justify-between px-6 md:px-24 py-12">

//                     {/* Footer div 1 start */}
//                     <div className="w-full md:w-[320px] py-6 md:py-12">
//                         <div className="flex py-4 gap-3 pt-4">
//                             <div className="w-[40px] h-[40px]">
//                                 <Image src="/images/icons/middlebar.png" alt="Logo Icon" width={40} height={40} /></div>
//                             <p className="text-black text-2xl hover:font-semibold font-medium">Comforty</p>
//                         </div>
//                         <p className="w-full md:w-48">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>

//                         {/* Social Links Section */}
//                         <div className="py-2 text-white">
//                             <div className="flex gap-3 pt-6">

//                                 <div className="flex justify-center gap-2 mt-12">
//                                     <a
//                                         href="https://facebook.com"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-[#007580] text-xl p-2 border-2 border-transparent rounded-full border-[#007580]"
//                                     >
//                                         <FaFacebookF className="w-[28px] h-[28px]" />
//                                     </a>
//                                     <a
//                                         href="https://twitter.com"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
//                                     >
//                                         <FaTwitter className="w-[28px] h-[28px]" />
//                                     </a>
//                                     <a
//                                         href="https://instagram.com"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
//                                     >
//                                         <FaInstagram className="w-[28px] h-[28px]" />
//                                     </a>
//                                     <a
//                                         href="https://pinterest.com"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
//                                     >
//                                         <FaPinterestP className="w-[28px] h-[28px]" />
//                                     </a>
//                                     <a
//                                         href="https://youtube.com"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
//                                     >
//                                         <FaYoutube className="w-[28px] h-[28px]" />
//                                     </a>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                     {/* Footer div 1 end */}

//                     {/* Footer div 2 start */}
//                     <div className="w-full md:w-[320px] py-6 md:py-12">
//                         <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">CATEGORY</p>
//                         <div className="py-4 text-black gap-3">
//                             <p className="pt-2">Sofa</p>
//                             <p className="pt-2">ArmChair</p>
//                             <p className="pt-2">WingChair</p>
//                             <p className="text-[#029fae] pt-2">Desk Chair</p>
//                             <p className="pt-2">Wooden Chair</p>
//                             <p className="pt-2">Pak Bench</p>
//                         </div>
//                     </div>
//                     {/* Footer div 2 end */}

//                     {/* Footer div 3 start */}
//                     <div className="w-full md:w-[320px] py-6 md:py-12">
//                         <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">Support</p>
//                         <div className="py-4 text-black gap-3">
//                             <p className="pt-2">Help & Support</p>
//                             <p className="pt-2">Terms & Conditions</p>
//                             <p className="pt-2">Privacy Policy</p>
//                             <p className="pt-2">Help</p>
//                         </div>
//                     </div>
//                     {/* Footer div 3 end */}

//                     {/* Footer div 4 start */}
//                     <div className="w-full md:w-[320px] py-6 md:py-12">
//                         <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">Newsletter</p>
//                         <div className="flex gap-6 justify-center py-6">
//                             <input type="email" placeholder="Email Address..." className="bg-transparent border-b-2 border-[#029fae] py-4 pr-20 border-none" />
//                             <button className="font-medium border-b-2 border-[#029fae]">SUBMIT</button>
//                         </div>
//                         <p className="mr-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero perferendis at, repellendus explicabo similique nam?</p>
//                     </div>
//                     {/* Footer div 4 end */}

//                 </div>

//                 <div className="flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-8 px-20">
//                         <p>
//                             © 2021 - Blogy - Designed & Developed by{" "}
//                             <a href="#" className="text-[#272343] hover:underline">
//                                 Zakirsoft
//                             </a>
//                         </p>
//                         <div className="mt-2 mb-2 flex justify-center space-x-4">
//                             <FaCcMastercard size={40} />
//                             <FaPaypal size={40} />
//                             <SiAmericanexpress  size={40} />
//                             <FaCcVisa size={40} />
//                         </div>
//                     </div>


//             </div>
//         </>
//     );
// }
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