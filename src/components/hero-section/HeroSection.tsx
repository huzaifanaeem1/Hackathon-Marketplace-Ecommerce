// import React from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="flex justify-center items-center pt-80">
//       <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
//         <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
//           <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
//           Welcome to Chairy
//           </h1>
//           <p className="w-full sm:w-[557px] text-[#272343] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
//             Best Furniture Collection for your interior.
//           </p>
//           <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
//             <span>Shop Now</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 12h18M15 18l6-6-6-6"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
//           <Image
//             src="/images/Product/HeroSection.png"
//             alt="Product Image"
//             width={434}
//             height={584}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className='bg-[#F0F2F3] rounded-b-[48px] xl:pb-0 pb-10 sm:mx-10 mx-3 lg:mx-20 lg:h-[850px]'>
   <div className='flex sm:flex-row flex-col justify-between items-center md:px-[60px] pt-10 lg:pt-[115px] '>
    <div className="title text-[#272343] lg:max-w-[557px] md:max-w-[400px] md:text-left text-center">
      <p className='lg:text-[14px] uppercase lg:leading-[14px] text-xs  tracking-wide'>Welcome to Chariy</p>
      <h1 className='font-bold lg:text-6xl text-3xl mt-3 lg:mt-7'>Best Furniture Collection For Your Interior.</h1>
      <Link href="/products" className='flex items-center hover:shadow-lg bg-[#029FAE] w-fit mx-auto md:mx-0 gap-5 rounded-lg py-2 lg:py-[14px] px-4 lg:px-6 mt-3 lg:mt-10 text-white text-[16px]'>Shop Now 
        <span><BsArrowRight className='size-5'/></span>
      </Link >
    </div>
    <div className="hero mt-5 sm:mt-0">
    <Image
             src="/images/Product/HeroSection.png"
             alt="Product Image"
             width={434}
             height={584}
          />
    </div>
   </div>
    </div>
  )
}

export default HeroSection;