const images = [{
    img: '/images/categories/category2.png',
}, {
    img: '/images/categories/category1.png'
}, {
    img: '/images/Product/product2.png'
}, {
    img: '/images/Product/product1.png'
}, {
    img: '/images/Product/product3.png'
}, {
    img: '/images/categories/category3.png'
}
]

const Subscribe = () => {
    return (
        <div className="lg:px-20 sm:mx-10 mx-3 lg:py-20 py-10 bg-[#F0F2F3]">
            <div className="subscribe">
                <h2 className="text-center lg:text-4xl md:text-3xl text-2xl text-black font-semibold">Or Subscribe to the Newsletter</h2>
                <div className="flex justify-center flex-col sm:flex-row mx-8 sm:mx-0 my-10 lg:mt-14 mt-5 gap-0">
  <input 
    type="text" 
    placeholder="Email Address...." 
    className="font-semibold outline-none bg-inherit md:border-b-2 border-b border-black text-[#1E2832] lg:w-[620px] mx-0 sm:mx-auto p-1 lg:p-3" 
  />
  <button 
    className="md:border-b-2 border-b border-[#1E2832] text-[#1E2832] px-2 w-fit mx-auto md:text-base text-sm uppercase">
    Submit
  </button>
</div>

                
            </div>
            <div className="product">
                <h2 className="text-center w-[300px]  md:w-auto mx-auto lg:text-4xl md:text-3xl text-2xl text-black font-semibold">Follow Products and Discounts On Insatgram</h2>
                <div className="flex flex-wrap md:flex-nowrap justify-center mt-14 gap-6">
                    {images.map((image) => {
                        return (
                            <div key={image.img} className="sm:w-[200px] w-[120px] h-[120px] sm:h-[200px]">
                                <img src={image.img} alt="products" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Subscribe