// import Link from "next/link";
// import Image from "next/image";

// const Products =[
//     {
//         id : '1',
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
//         id : '3',
//         img : '/images/Product/product3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '4',
//         img : '/images/Product/product4.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     }
// ]

// const FeaturedProduct = () => {
//   return (
//     <div className='lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-36'>
//     <div>
//         <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold '>Featured Product</h2>
//         <div className="products flex md:flex-nowrap justify-center flex-wrap mt-5 gap-3 xl:gap-5">
//           {Products.map((prod)=>{           
//            return(
//             <Link href={`/product/${prod.id}`} key={prod.id}>
//             <div className=' cursor-pointer  '>
//            <div className="img relative">
//               <img src={prod.img} alt={prod.name} className="w-[250px] h-[250px] hover:brightness-90 lg:w-full lg:h-full object-cover" />
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
//             <Link href="/cart"><Image src="/images/icons/cart.png" alt="cart" width={24} height={24}  className="size-6"/></Link>
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

// export default FeaturedProduct


"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

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

const FeaturedProduct = () => {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"]{
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
      }`;
      const result: Product[] = await client.fetch(query); 
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-36">
      <div>
        <h2 className="text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold">
          Featured Product
        </h2>
        <div className="products flex md:flex-nowrap justify-center flex-wrap mt-5 gap-3 xl:gap-5">
          {products.slice(0, 4).map((prod) => ( 
            <Link href={`/product/${prod._id}`} key={prod._id}>
              <div className="cursor-pointer">
                <div className="img relative">
                  <img
                    src={prod.productImage}
                    alt={prod.title}
                    className="w-[250px] h-[250px] hover:brightness-90 lg:w-full lg:h-full object-cover"
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
                  <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
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

export default FeaturedProduct;
