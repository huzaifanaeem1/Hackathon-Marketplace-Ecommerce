// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         <section className='px-6 py-4 sm:px-8 sm:py-6 lg:px-[300px] lg:py-[14px] gap-[478px] absolute w-full lg:w-[1320px] h-[74px] left-0 top-[158.5px] bg-white shadow-[0px_1px_0px_#E1E3E6]'>
//             <div className="flex flex-row justify-between items-center">
//                 {/* Navigation Links */}
//                 <div className="flex flex-row items-center gap-4 sm:gap-6">
//                     <Link href="/" className="text-[14px] font-medium text-[#757575] capitalize hover:text-[#007580]">
//                         Home
//                     </Link>
//                     <Link href="/single-product-page" className="text-[14px] font-medium text-[#757575] capitalize hover:text-[#007580]">
//                         Shop
//                     </Link>
//                     <Link href="/product" className="text-[14px] font-medium text-[#757575] capitalize hover:text-[#007580]">
//                         Product
//                     </Link>
//                     <Link href="/" className="text-[14px] font-medium text-[#757575] capitalize hover:text-[#007580]">
//                         Pages
//                     </Link>
//                     <Link href="/about" className="text-[14px] font-medium text-[#757575] capitalize hover:text-[#007580]">
//                         About
//                     </Link>
//                     <Link href="/contact" className="text-[14px] font-medium text-[#757575] capitalize hover:text-[#007580]">
//                         Contact
//                     </Link>
//                 </div>

//                 {/* Contact Section */}
//                 <div className="flex flex-row items-center gap-2">
//                     <div className="text-[14px] font-normal text-[#636270]">Contact:</div>
//                     <div className="text-[14px] font-medium text-[#272343]">(808) 555-0111</div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Navbar;

"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const currentPath = usePathname(); 
  return (
   <div className='bg-white lg:py-8 md:px-10 py-4 lg:px-20 md:block hidden '>
     <div className=' text-[#636270] flex justify-between font-medium text-[14px]'>
    <nav className=' space-x-8  '>
    <Link href="/" className={` hover:text-[#007580] ${currentPath === '/' ? ' text-[#007580]' : ''}`} >Home</Link>
    <Link href="/shop" className={` hover:text-[#007580] ${currentPath === '/' ? ' text-[#007580]' : ''}`}>Shop</Link>
    <Link href="/product" className={` hover:text-[#007580] ${currentPath === '/product' ? ' text-[#007580]' : ''}`}>Product</Link>
    <Link href="/pages" className={` hover:text-[#007580] ${currentPath === '/' ? ' text-[#007580]' : ''}`}>Pages</Link>
    <Link href="/about" className={` hover:text-[#007580] ${currentPath === '/about' ? ' text-[#007580]' : ''}`}>About</Link>
    <Link href="/contact" className={` hover:text-[#007580] ${currentPath === '/contact' ? ' text-[#007580]' : ''}`}>Contact</Link>
    </nav>
    <div>
        <p>Contact: <span className='ml-2 text-[#272343]'>(808) 555-0111</span></p>
    </div>
    </div>
   </div>
  )
}

export default Navbar