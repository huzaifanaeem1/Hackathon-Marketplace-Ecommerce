import Link from "next/link"

const product = [
    {
       id : '13', 
      img: '/images/Product/product7.png',
      name : 'Library Stool Chair',
      discPrice : '$99'
    },{
        id : '14',
        img : '/images/Product/product1.png',
        name : 'Library Stool Chair',
        discPrice : '$99'
    },{
        id :'15',
        img : '/images/categories/category3.png',
        name : 'Library Stool Chair',
        discPrice : '$99'
    },{
        id : '16',
        img : '/images/Product/product3.png',
        name : 'Library Stool Chair',
        discPrice : '$99'
    },{
        id : '17',
        img : '/images/categories/category1.png',
        name : 'Library Stool Chair',
        discPrice : '$99'
    }
]

const SingleProductPage = () => {
  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 lg:mt-10 mt-5 mb-10 lg:mb-24">
     <div className="head flex md:flex-row flex-col gap-3 justify-between items-center">
        <h3 className="uppercase lg:text-[28px] text-[18px] font-bold text-black">Featured Products</h3>
        <Link href='/product' className="text-black font-bold lg:text-[18px] text-sm lg:border-b-2 border-b lg:pb-1 border-black ">View All</Link>
     </div>
     <div className="images mt-12 gap-7 overflow-x-scroll scrollbar-hide flex">
     {product.map((prod)=>{
        return(
        <Link href={`/product/${prod.id}`} key={prod.id}>

        <div className="w-[220px] h-[220px] hover:drop-shadow-md">
        <img src={prod.img} alt="Product" />    
        </div>  
        <div className="flex justify-between mt-3">
            <span className="text-[#272343]">{prod.name}</span>
            <span className="text-black font-bold">{prod.discPrice}</span>
        </div>
        </Link>
        )
     })}
     </div>
    </div>
  )
}

export default SingleProductPage 