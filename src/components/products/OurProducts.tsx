// import React from "react";
// import { PiShoppingCartSimple } from "react-icons/pi";

// const OurProduct = () => {
//     return (
//         <section className="w-full max-w-[1320px] mx-auto py-[50px] px-[20px] sm:px-[50px] lg:px-0">
//             {/* Title */}
//             <div className="text-center mb-[40px]">
//                 <h2 className="text-[#272343] font-medium text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] capitalize">
//                     Our Products
//                 </h2>
//             </div>

//             {/* Products Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[30px]">
//                 {/* Product Card 1 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/product/product1.png')",
//                         }}
//                     ></div>
//                     <div
//                         className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#01AD5A]`}
//                     >
//                         <span className="text-xs font-medium text-white capitalize">New</span>
//                     </div>
//                 </div>

//                 {/* Product Card 2 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/product/product2.png')",
//                         }}
//                     ></div>
//                     <div
//                         className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#F5813F]`}
//                     >
//                         <span className="text-xs font-medium text-white capitalize">Sale</span>
//                     </div>
//                 </div>

//                 {/* Product Card 3 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/product/product3.png')",
//                         }}
//                     ></div>
//                 </div>

//                 {/* Product Card 4 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/product/product4.png')",
//                         }}
//                     ></div>
//                 </div>

//                 {/* Product Card 5 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/categories/category1.png')",
//                         }}
//                     ></div>
//                     <div
//                         className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#01AD5A]`}
//                     >
//                         <span className="text-xs font-medium text-white capitalize">New</span>
//                     </div>
//                 </div>

//                 {/* Product Card 6 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/categories/Hot3.png')",
//                         }}
//                     ></div>
//                     <div
//                         className={`absolute flex items-center px-2 py-1 rounded-[4px] left-4 top-4 bg-[#F5813F]`}
//                     >
//                         <span className="text-xs font-medium text-white capitalize">Sale</span>
//                     </div>
//                 </div>

//                 {/* Product Card 7 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/Product/product7.png')",
//                         }}
//                     ></div>
//                 </div>

//                 {/* Product Card 8 */}
//                 <div className="relative bg-cover bg-center rounded-lg">
//                     <div
//                         className="w-full h-[200px] sm:h-[250px] lg:h-[312px] bg-cover bg-center rounded-lg"
//                         style={{
//                             backgroundImage: "url('/images/Product/product1.png')",
//                         }}
//                     ></div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurProduct;




// import Link from "next/link"
// import Image from "next/image"


// const Products =[
//     {   
//        id : '1',
//         img : '/images/Product/product1.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         off : 'New',
//         offColor : '#01AD5A'
//     },{
//         id : "2",
//         img : '/images/Product/product2.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         RealPrice : '$39',
//         off : 'Sales',
//         offColor : '#F5813F'
//     },{
//         id :  '3',
//         img : '/images/Product/product3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{ 
//         id : '4',
//         img : '/images/Product/product4.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '9',
//         img: '/images/categories/category1.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         off : 'New',
//         offColor : '#01AD5A'
//     },{
//        id : '6',
//         img : '/images/categories/Hot3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         RealPrice : '$39',
//         off : 'Sales',
//         offColor : '#F5813F'
//     },{
//        id :'7',
//         img : '/images/Product/product7.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id :'8',
//         img : '/images/Product/product1.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     }
// ]

// const OurProducts = () => {
//   return (
//     <div className='lg:mx-20 sm:mx-10 mx-3 mb-20 lg:mb-40'>
//     <div>
//         <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-center text-center tracking-normal font-semibold'>Our Products</h2>
//         <div className="products flex  flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28">
//           {Products.map((prod)=>{
//            return(
//             <Link href={`/products/${prod.id}`} key={prod.id}>
//             <div key={prod.img} className='w-[280px] h-[280px] cursor-pointer hover:drop-shadow-md'>
//            <div className="img relative">
//               <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-xl" />
//                {prod.off && (
//                  <span
//                  className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
//                  style={{ backgroundColor: prod.offColor, color: "white" }}
//                 >
//                 {prod.off}
//               </span>
//               )} 
//           </div>
//           <div className="flex items-center justify-between mt-3">
//             <div className="text gap-[10px]">
//                 <h4 className="text-[#272343]">{prod.name}</h4>
//                 <div>
//                     <span className="text-[#272343] text-[18px] font-medium">{prod.discPrice}</span>
//                     <del className="ml-1 text-[#9A9CAA]">{prod.RealPrice}</del>
//                 </div>
//             </div>
//             <div className="cart px-3 py-2 bg-[#F0F2F3] hover:shadow-xl hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
//               <Link href="/cart"><Image src="/images/icons/cart.png" alt="cart" width={24} height={24}  className="size-6"/></Link>
//             </div>
//           </div>
//          </div>
//          </Link>
//             )
//           })}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default OurProducts;


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Make sure the Sanity client is properly configured

// Define the Product type
interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  productImage: string;
  categoryTitle?: string;
  description?: string;
  inventory?: number;
  tags?: string[];
}

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use state to manage fetched products

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"][0...8]{ 
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "productImage": image.asset->url,
        "categoryTitle": category->title,
        description,
        inventory,
        tags
      }`; // Fetch only 8 products
      const result: Product[] = await client.fetch(query); // Fetch the data
      setProducts(result); // Update the state
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 mb-20 lg:mb-40">
      <div>
        <h2 className="text-[#272343] lg:text-[32px] text-2xl md:text-center text-center tracking-normal font-semibold">
          Our Products
        </h2>
        <div className="products flex flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28">
          {products.map((prod) => (
            <Link href={`/product/${prod._id}`} key={prod._id}>
              <div className="w-[280px] h-[280px] cursor-pointer hover:drop-shadow-md">
                <div className="img relative">
                  <img
                    src={prod.productImage}
                    alt={prod.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {prod.badge && (
                    <span
                      className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
                      style={{ backgroundColor: "#F5813F", color: "white" }}
                    >
                      {prod.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text gap-[10px]">
                    <h4 className="text-[#272343]">{prod.title}</h4>
                    <div>
                      <span className="text-[#272343] text-[18px] font-medium">
                        ${prod.price}
                      </span>
                      {prod.priceWithoutDiscount && (
                        <del className="ml-1 text-[#9A9CAA]">
                          ${prod.priceWithoutDiscount}
                        </del>
                      )}
                    </div>
                  </div>
                  <div className="cart px-3 py-2 bg-[#F0F2F3] hover:shadow-xl hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
                    <Link href="/cart">
                      <Image
                        src="/images/icons/cart.png"
                        alt="cart"
                        width={24}
                        height={24}
                        className="size-6"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
