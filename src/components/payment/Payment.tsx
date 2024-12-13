
import Image from "next/image"
import React from "react"
const Company = [
  {
      img : '/images/companyLogos/Logo1.png'
  },{
      img : '/images/companyLogos/Logo2.png'
  },{
      img : '/images/companyLogos/Logo3.png'
  },{
      img : '/images/companyLogos/Logo4.png'
  },{
      img : '/images/companyLogos/Logo5.png'
  },{
      img : '/images/companyLogos/Logo6.png'
  },{
      img : '/images/companyLogos/Logo7.png'
  }
]


const Payment = () => {
return (
  <div className="lg:mx-20 sm:mx-10 mx-3 my-5 lg:my-10">
      <div className="flex items-center flex-wrap gap-3 justify-center lg:justify-around">
         {Company.map((comp)=>{
          return(
              <div key={comp.img}>
                  <Image src={comp.img} alt="" width={85} height={87} />
              </div>
          )
         })}
      </div>
  </div>
)
}

export default Payment;