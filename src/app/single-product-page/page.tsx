import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"


export default function SingleProductPage(){
    return(
        <>
        <Navbar />


        <div className="px-6 md:px-24 py-12 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 pt-80">
  {/* Image Section */}
  <div className="h-[300px] md:h-[500px] w-full md:w-[620px]">
    <Image
      src="/images/Product/product2.png"
      alt="Chair"
      className="object-cover h-full w-full"
      height={500}
      width={620}
    />
  </div>

  {/* Product Details Section */}
  <div className="h-full w-full md:w-[620px] flex flex-col justify-between pr-28">
    <p className="font-semibold text-3xl md:text-5xl">Library Stool Chair</p>

    <div className="py-6 border-b-2 border-[#029fae]">
      <button className="bg-[#029fae] text-white text-base py-3 px-6 rounded-3xl">
        $20.00 USD
      </button>
    </div>

    <p className="text-gray-400 pt-4 w-full md:w-[550px] text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorum saepe? Architecto sint illum ad
      aliquid voluptates officia earum? Et?
    </p>

    <div className="py-6 flex border-b-2 border-gray-400">
      <button className="bg-[#029fae] text-white flex text-base py-3 px-8 gap-4 rounded-xl">
        <ShoppingCart size={32} strokeWidth={1.5} />
        Cart
      </button>
    </div>
  </div>
</div>

            <div className="py-12 justify-between flex px-24">
                <p className="font-semibold">Featured Product</p>
                <button className="font-semibold text-black border-b-2 border-black">View All</button>
            </div>
{/* 5 cards pics */}
            <div className="px-48 py-12">
    <div className="flex flex-wrap justify-center gap-2 md:justify-between">
        <div className="w-full sm:w-[170px] h-42 hover:bg-[#F0F2F3]  py-4 flex flex-col items-center justify-center text-center">
            <Image src="/images/categories/Hot2.png"
            width={270}
            alt="img1"
            height={306}
            className="bg-cover h-full w-full"></Image>
            <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="w-full sm:w-[170px] h-42  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/images/Product/product7.png"
            width={270}
            alt="img2"
            height={306}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="f-full sm:w-[170px] w-44  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/images/Categories/category3.png"
            width={270}
            alt="img3"
            height={306}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="h-full sm:w-[170px] w-44  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
           
        <Image src="/images/categories/Hot.png"
            width={270}
            alt="img4"
            height={306}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="h-full sm:w-[170px] w-44 py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/images/Categories/category1.png"
            width={270}
            alt="img5"
            height={306}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>
    </div>
</div>

            </>
    )
}