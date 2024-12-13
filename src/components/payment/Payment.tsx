
import Image from "next/image"
const Company = [
  {
      img : '/images/companyLogos/logo1.png'
  },{
      img : '/images/companyLogos/logo2.png'
  },{
      img : '/images/companyLogos/logo3.png'
  },{
      img : '/images/companyLogos/logo4.png'
  },{
      img : '/images/companyLogos/logo5.png'
  },{
      img : '/images/companyLogos/logo6.png'
  },{
      img : '/images/companyLogos/logo7.png'
  }
]


const Companies = () => {
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

export default Companies