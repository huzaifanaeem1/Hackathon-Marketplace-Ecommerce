// import React from "react"
// import Link from "next/link"
// import Image from "next/image"

// const products =[
//     { 
//         id : '1' , 
//         img : '/images/Product/product1.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         off : 'New',
//         offColor : '#01AD5A'
//     },{
//         id : '2',
//         img : '/images/Product/product2.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         RealPrice : '$39',
//         off : 'Sales',
//         offColor : '#F5813F'
//     },{
//         id:'3' , 
//         img : '/images/Product/product3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '5', 
//         img : '/images/Product/product4.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '5' ,
//         img: '/images/categories/category2.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         off : 'New',
//         offColor : '#01AD5A'
//     },{
//         id : '6', 
//         img : '/images/categories/Hot3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         RealPrice : '$39',
//         off : 'Sales',
//         offColor : '#F5813F'
//     },{
//         id : '7',
//         img : '/images/Product/product7.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '8' ,
//         img : '/images/Product/product1.png',
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
//         id : '10' , 
//         img : '/images/Product/product2.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         RealPrice : '$39',
//         off : 'Sales',
//         offColor : '#F5813F'
//     },{
//         id : '11',
//         img : '/images/Product/product3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '12' , 
//         img : '/images/categories/category3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     }

// ]

// const  ProductPage = () => {
//   return (
//     <div className='lg:mx-20 mx-3 sm:mx-10 mb-40'>
//     <div>
//         <h2 className='text-[#272343] lg:text-[32px] text-2xl mt-6  tracking-normal font-semibold text-center'>All Products</h2>
//         <div className="product flex flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28 z-0">
//           {products.map((prod)=>{
//            return(
//             <Link href={`/product/${prod.id}`} key={prod.id}>
//             <div className='w-[280px] h-[280px] '>
//            <div className="img relative">
//               <img src={prod.img} alt={prod.name} className="w-full h-full object-cover rounded-xl cursor-pointer" />
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
//             <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
//               <Image src="/images/icons/cart.png" alt="cart" width={24} height={24}  className="size-6"/>
//             </div>
//           </div>
//          </div>          
//         </Link>
//           ) })}
//         </div> 
//     </div>
//     </div>
//   )
// }

// export default ProductPage
"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";


interface Product {
  id: string;
  img: string;
  name: string;
  discPrice?: string;
  RealPrice: string;
  off?: string;
  offColor?: string;
}


const query = `*[_type == "products"] | order(_createdAt asc) {
  _id,  // Use _id instead of id if that's the field returned by Sanity
  title,
  price,
  priceWithoutDiscount,
  badge,
  "productImage": image.asset->url,
  "categoryTitle": category->title,
  description,
  inventory,
  tags
}`;

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    client.fetch(query).then((data) => {
      console.log(data);


      
      const formattedProducts = data.map((prod: {
        _id: string;
        title: string;
        price: number;
        priceWithoutDiscount: number;
        productImage: string;
        badge: string;
      }) => {
        const hasDiscount = prod.priceWithoutDiscount < prod.price;
        return {
          id: prod._id,
          img: prod.productImage,
          name: prod.title,
          RealPrice: `${prod.price.toFixed(2)}`,
          discPrice: hasDiscount
            ? `${(prod.price - (prod.price - prod.priceWithoutDiscount)).toFixed(2)}`
            : undefined,
          off: hasDiscount ? "Sale" : undefined,
          offColor: hasDiscount ? "#F5813F" : undefined,
        };
      });
      setProducts(formattedProducts);
    });
  }, []);
  const handleAddToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="lg:mx-20 mx-3 sm:mx-10 mb-40">
      <h2 className="text-[#272343] lg:text-[32px] text-2xl mt-6 tracking-normal font-semibold text-center">
        All Products
      </h2>
      <div className="product flex flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28 z-0">
        {products.length > 0 ? (
          products.map((prod) => (
            prod.id ? (
              <Link href={`/product/${prod.id}`} key={prod.id}>
                <div className="w-[280px] h-[280px]">
                  <div className="img relative">
                    <img
                      src={prod.img}
                      alt={prod.name}
                      className="w-full h-full object-cover rounded-xl cursor-pointer"
                    />
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
                        {prod.discPrice ? (
                          <>
                            <span className="text-[#272343] text-[18px] font-medium">{prod.discPrice}</span>
                            <del className="ml-1 text-[#9A9CAA]">{prod.RealPrice}</del>
                          </>
                        ) : (
                          <span className="text-[#272343] text-[18px] font-medium">{prod.RealPrice}</span>
                        )}
                      </div>
                    </div>
                    <div
                      className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg cursor-pointer"
                      onClick={() => handleAddToCart(prod)}
                    >
                      <Image
                        src="/images/icons/cart.png"
                        alt="cart"
                        width={24}
                        height={24}
                        className="size-6"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ) : null
          ))
        ) : (
          <p className="text-[#272343] text-lg text-center mt-10">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
