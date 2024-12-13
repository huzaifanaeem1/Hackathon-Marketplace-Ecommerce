// "use client"
// import Image from "next/image";
// import {
//   Sheet,
//   SheetPortal,
//   SheetOverlay,
//   SheetTrigger,
//   SheetClose,
//   SheetContent,
//   SheetHeader,
//   SheetFooter,
//   SheetTitle,
//   SheetDescription,
// } from "@/components/UiSheet"
// import { FiMenu } from "react-icons/fi";
// import Link from 'next/link'
// import { usePathname } from "next/navigation";
// import { HiPhone } from "react-icons/hi2";

// const MiddleBar = () => {
//   const currentPath = usePathname(); 
//   return (
//     <div className="bg-[#F0F2F3] xl:py-5 py-2 sm:py-3 px-3 sm:px-8 xl:px-20">
//         <div className="flex justify-between">
//          <div className="logo flex items-center gap-1 sm:gap-2">
//             <Image 
//             src="/images/icons/middlebar.png" 
//             alt="Logo" 
//             width={30}
//             height={30}
//             className="sm:w-auto" />
//             <span className="text-[#272343] text-base sm:text-[26px]  font-medium">Comforty</span>
//          </div>
//         <div className="flex gap-3  items-center">
//         <Link href="/cart" className="cart flex items-center bg-white sm:gap-3 gap-2 py-[3px] sm:py-[11px] px-2 sm:px-4 rounded-lg hover:shadow-lg">
//         <Image 
//             src="/images/icons/cart.png" 
//             alt="Logo" 
//             width={22}
//             height={22}
//             className="sm:w-auto sm:size-[22px] size-5" />
          
//           <span className="sm:text-base text-sm"> Cart </span>
//           <span className="rounded-full bg-[#007580] sm:p-[2px] p-[1px] px-[6px] sm:px-[9px] font-sans text-white sm:text-base text-sm align-middle ">2</span>
//          </Link >
         
//          <div className="md:hidden block">
//          <Sheet>
//               <SheetTrigger><FiMenu className="sm:size-8 size-6 " /></SheetTrigger>
//               <SheetContent className="flex justify-center gap-4 items-center">
//                 <SheetHeader className="flex flex-col items-center">
//                   <SheetTitle><Link href="/" className={` hover:text-[#007580] font-medium ${currentPath === '/' ? ' text-[#007580]' : ''}`} >Home</Link></SheetTitle>
//                   <SheetTitle> <Link href="/shop" className={` hover:text-[#007580] font-medium ${currentPath === '/shop' ? ' text-[#007580]' : ''}`}>Shop</Link></SheetTitle>
//                   <SheetTitle><Link href="/product" className={` hover:text-[#007580] font-medium ${currentPath === '/product' ? ' text-[#007580]' : ''}`}>Product</Link></SheetTitle>
//                   <SheetTitle><Link href="/contact" className={` hover:text-[#007580] font-medium ${currentPath === '/pages' ? ' text-[#007580]' : ''}`}>Pages</Link></SheetTitle>
//                   <SheetTitle> <Link href="/about" className={` hover:text-[#007580] font-medium ${currentPath === '/about' ? ' text-[#007580]' : ''}`}>About</Link></SheetTitle>
//                   <div >
//                      <p className="flex gap-2"> <HiPhone className="size-6"/> <span className='ml-2 text-[#272343]'>(808) 555-0111</span></p>
//                   </div>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>
//          </div>
//         </div>

//         </div>
//         </div>
    
//   )
// }

// export default MiddleBar;
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobNavbar from "./MobNavbar";

const MiddleBar = () => {
  const currentPath = usePathname();
  return (
    <div className="bg-[#F0F2F3] xl:py-5 py-2 sm:py-3 px-3 sm:px-8 xl:px-20">
      <div className="flex justify-between">
        {/* Logo Section */}
        <div className="logo flex items-center gap-1 sm:gap-2">
          <Image
            src="/images/icons/middlebar.png"
            alt="Logo"
            width={30}
            height={30}
            className="sm:w-auto"
          />
          <span className="text-[#272343] text-base sm:text-[26px] font-medium">
            Comforty
          </span>
        </div>

        {/* Cart and Mobile Menu Section */}
        <div className="flex gap-3 items-center">
          {/* Cart Link */}
          <Link
            href="/cart"
            className="cart flex items-center bg-white sm:gap-3 gap-2 py-[3px] sm:py-[11px] px-2 sm:px-4 rounded-lg hover:shadow-lg"
          >
            <Image
              src="/images/icons/cart.png"
              alt="Cart"
              width={22}
              height={22}
              className="sm:w-auto sm:size-[22px] size-5"
            />
            <span className="sm:text-base text-sm">Cart</span>
            <span className="rounded-full bg-[#007580] sm:p-[2px] p-[1px] px-[6px] sm:px-[9px] font-sans text-white sm:text-base text-sm align-middle">
              2
            </span>
          </Link>

          {/* Mobile Navbar */}
          <div className="md:hidden z-20">
            <MobNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
