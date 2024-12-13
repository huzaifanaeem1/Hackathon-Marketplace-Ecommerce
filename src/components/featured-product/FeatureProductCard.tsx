// import React from "react";
// import { PiShoppingCartSimple } from "react-icons/pi";

// const FeaturedProductCard = () => {
//   return (
//     <section className="relative w-full max-w-[1920px] mx-auto mt-[100px] px-4 sm:px-10 md:px-[100px] lg:px-[300px]">
//       {/* Heading Section */}
//       <div className="flex justify-start items-start mb-6">
//   <h2 className="text-[24px] md:text-[32px] font-semibold text-[#272343] capitalize">
//     Featured Products
//   </h2>
// </div>


//       {/* Product Cards Row */}
//       <div className="flex flex-wrap md:flex-nowrap justify-center gap-[20px]">
//         {/* First Product Card */}
//         <div className="w-[312px] h-auto relative">
//           <div
//             className="w-[312px]  h-[312px] bg-cover bg-center rounded-lg"
//             style={{ backgroundImage: "url('/images/Product/product1.png')" }}
//           ></div>
//           <div className="absolute flex items-center px-2 py-1 bg-[#01AD5A] rounded-[4px] left-4 top-4">
//             <span className="text-xs font-medium text-white capitalize">New</span>
//           </div>
//           <div className="flex items-center justify-between mt-4 px-2">
//             <div>
//               <span className="block text-[16px] leading-[130%] text-[#007580] capitalize hover:text-[#272343] font-normal">
//                 Library Stool Chair
//               </span>
//               <span className="text-xl text-[#272343]">$20</span>
//             </div>
//             <button className="bg-[#029FAE] hover:bg-white rounded-lg w-[44px] h-[44px] flex items-center justify-center">
//               <PiShoppingCartSimple className="w-[24px] h-[24px] text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Second Product Card */}
//         <div className="w-[312px] h-auto relative">
//           <div
//             className="w-[312px]  h-[312px] bg-cover bg-center rounded-lg"
//             style={{ backgroundImage: "url('/images/Product/product2.png')" }}
//           ></div>
//           <div className="absolute flex items-center px-2 py-1 bg-[#F5813F] rounded-[4px] left-4 top-4">
//             <span className="text-xs font-medium text-white capitalize">Sale</span>
//           </div>
//           <div className="flex items-center justify-between mt-4 px-2">
//             <div>
//               <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">
//                 Library Stool Chair
//               </span>
//               <div className="flex items-center space-x-2">
//                 <span className="text-[18px] leading-[110%] text-[#272343] capitalize font-medium">$20</span>
//                 <span className="text-[14px] leading-[110%] font-normal text-[#9A9CAA] line-through capitalize">
//                   $39
//                 </span>
//               </div>
//             </div>
//             <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
//               <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
//             </button>
//           </div>
//         </div>

//         {/* Third Product Card */}
//         <div className="w-[312px] h-auto relative">
//           <div
//             className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
//             style={{ backgroundImage: "url('/images/Product/product3.png')" }}
//           ></div>
//           <div className="flex items-center justify-between mt-4 px-2">
//             <div>
//               <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">
//                 Library Stool Chair
//               </span>
//               <span className="text-xl">$20</span>
//             </div>
//             <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
//               <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
//             </button>
//           </div>
//         </div>

//         {/* Fourth Product Card */}
//         <div className="w-[312px] h-auto relative">
//           <div
//             className="w-[312px] h-[312px] bg-cover bg-center rounded-lg"
//             style={{ backgroundImage: "url('/images/Product/product4.png')" }}
//           ></div>
//           <div className="flex items-center justify-between mt-4 px-2">
//             <div>
//               <span className="block text-[16px] leading-[130%] text-[#272343] capitalize hover:text-[#007580] font-normal">
//                 Library Stool Chair
//               </span>
//               <span className="text-xl text-[#272343]">$20</span>
//             </div>
//             <button className="bg-white hover:bg-[#029FAE] rounded-lg w-[44px] h-[44px] flex items-center justify-center">
//               <PiShoppingCartSimple className="w-[24px] h-[24px] text-[#272343]" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProductCard;
import Link from "next/link";
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

const Products =[
    {
        id : '1',
        img : '/images/Product/product1.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        off : 'New',
        offColor : '#01AD5A'
    },{
        id : '2',
        img : '/images/Product/product2.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
        RealPrice : '$39',
        off : 'Sales',
        offColor : '#F5813F'
    },{
        id : '3',
        img : '/images/Product/product3.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    },{
        id : '4',
        img : '/images/Product/product4.png',
        name : 'Library Stool Chair',
        discPrice : '$20',
    }
]

const FeaturedProduct = () => {
  return (
    <div className='lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-36'>
    <div>
        <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold '>Featured Product</h2>
        <div className="products flex md:flex-nowrap justify-center flex-wrap mt-5 gap-3 xl:gap-5">
          {Products.map((prod)=>{           
           return(
            <Link href={`/products/${prod.id}`} key={prod.id}>
            <div className=' cursor-pointer  '>
           <div className="img relative">
              <img src={prod.img} alt={prod.name} className="w-[250px] h-[250px] hover:brightness-90 lg:w-full lg:h-full object-cover" />
               {prod.off && (
                 <span
                 className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
                 style={{ backgroundColor: prod.offColor, color: "white" }}
                >
                {prod.off}
              </span>
              )}
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="text gap-[10px]">
                <h4 className="text-[#272343]">{prod.name}</h4>
                <div>
                    <span className="text-[#272343] text-[18px] font-medium">{prod.discPrice}</span>
                    <del className="ml-1 text-[#9A9CAA]">{prod.RealPrice}</del>
                </div>
            </div>
            <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
            <Link href="/cart"><Image src="/images/icons/cart.png" alt="cart" width={24} height={24}  className="size-6"/></Link>
            </div>
          </div>
         </div>
         </Link>
            )
          })}
        </div>
    </div>
    </div>
  )
} 

export default FeaturedProduct
