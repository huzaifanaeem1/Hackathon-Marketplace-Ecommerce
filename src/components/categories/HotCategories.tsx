
import React from 'react' 
import Image from 'next/image'
const HotCategories = () => {
  return (
    <div className='lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-28'>
      <div className='flex items-center lg:gap-4'>
      <div className="flex w-[10px] h-[62px] pb-14 translate-y-[240px] transform rotate-[-90deg] text-black font-['Roboto'] font-normal text-[30px] leading-[40px] text-center uppercase whitespace-nowrap">
  Explore New & Popular Styles
</div>



        {/* <p className='uppercase text-black lg:text-2xl sm:text-base text-sm vertical-text'>Explore New and Popular Styles</p> */}
        {/* <div className='flex sm:flex-row lg:items-start items-center flex-col gap-4'>
        <div className='lg:w-1/2 lg:h-[510px]'>
        <img src="/images/categories/grid.png" alt="sofa" />
        </div>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img  src="/images/categories/Hot1.png" alt="sofa" className='w-[275px]'/>
                <img  src="/images/categories/Hot3.png" alt="sofa" className='w-[275px]' />
            </div>
            <div className='flex flex-col gap-4'>
                <img  src="/images/categories/Hot2.png" alt="sofa" className='w-[275px]' />
                <img  src="/images/categories/Hot2.png" alt="sofa" className='w-[275px]'/>
            </div>
        </div>
     */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-[48%]">
            <Image
              src={('/images/categories/grid.png')}
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src={('/images/categories/Hot1.png')}
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={('/images/categories/Hot3.png')}
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={('/images/categories/Hot2.png')}
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={('/images/categories/Hot2.png')}
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotCategories