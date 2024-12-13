
// import { HeartHandshake, Phone, Trophy, Waves } from "lucide-react";
// import { MapPin } from "lucide-react";



// export default function Contact(){
//     return(
//         <>
//         <div className="text-center py-12 px-24 mt-80">
//             <p className="text-2xl font-semibold">Get In Touch With Us</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <p>Lorem ipsum dolor sit amet adipisicing elit  sit amet consectetur.</p>
//             </div>

// <div className="py-12 px-6 md:px-24">
//         <div className="flex flex-col md:flex-row justify-between pt-16 w-full h-auto md:h-[500px]">
//           {/* Left Side (Contact Information) */}
//           <div className="w-full md:w-[340px] h-full py-8 px-6 md:px-8">
//             <div className="flex gap-4 md:gap-6">
//               <Phone className="pt-1" size={36} strokeWidth={2} />
//               <p className="font-base text-xl md:text-2xl">Call Us</p>
//             </div>
//             <p className="py-4">We are available 24/7, 7 days a week.</p>
//             <p className="border-b pb-6 border-slate-600">Phone: +923123456789</p>

//             <div className="flex pt-3 gap-4 md:gap-6">
//             <MapPin size={32} strokeWidth={1.5} />
//               <p className="font-base text-xl md:text-2xl">Address</p>
//             </div>
//             <p className="py-3">Fill out our form and we will contact you within 24 hours.</p>
//             <p className="border-b pb-8 border-slate-600">Email: anshrahkkhan29@gmail.com</p>
//           </div>

//           {/* Right Side (Form Section) */}
//           <div className="w-full md:w-[1100px] h-auto shadow-lg shadow-slate-500 px-6 md:px-10 py-6 md:py-10">
//             <div className="flex flex-col md:flex-row px-4 md:px-28 pb-12 gap-4 md:gap-6">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 required
//                 className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
//               />
//               <input
//                 type="number"
//                 placeholder="Your Phone"
//                 required
//                 className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
//               />
//             </div>
//             <div className="px-[10px] md:px-[123px]">
//               <textarea
//                 name="message"
//                 className="pt-2 pb-12 px-2 h-48 w-full bg-slate-200"
//                 placeholder="Your Message"
//                 required
//               ></textarea>
//             </div>

//             <div className="px-[10px] md:px-[123px] pt-5">
//               <button className="bg-[#029fae] py-4 px-7 rounded-lg text-white font-semibold w-full md:w-auto">
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 sm:px-12 lg:px-20">
//   <div className="bg-[#F0F2F3] flex flex-col sm:flex-row justify-between py-12 ">
    
//     {/* High Quality Section */}
//     <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 sm:py-12 px-4 sm:px-6">
//       <Trophy size={44} strokeWidth={1.5} />
//       <div>
//         <p className="text-black font-semibold text-lg sm:text-xl">High Quality</p>
//         <p className="text-sm sm:text-base">Crafted from top material</p>
//       </div>
//     </div>

//     {/* Warranty Protection Section */}
//     <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 sm:py-12 px-4 sm:px-6">
//       <Waves size={44} strokeWidth={1.5} />
//       <div>
//         <p className="text-black font-semibold text-lg sm:text-xl">Warranty Protection</p>
//         <p className="text-sm sm:text-center sm:text-base">Over 2 years</p>
//       </div>
//     </div>

//     {/* 24/7 Support Section */}
//     <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 sm:py-12 px-4 sm:px-6">
//       <HeartHandshake size={44} strokeWidth={1.5} />
//       <div>
//         <p className="text-black font-semibold text-lg sm:text-xl">24 / 7 Support</p>
//         <p className="text-sm sm:text-base">Dedicated Support</p>
//       </div>
//     </div>
//   </div>
// </div>

//         </>
//     )
// }
import { IoLocationSharp } from "react-icons/io5";
import { HiPhone } from "react-icons/hi2";
import { FaClock } from "react-icons/fa6";


const Promotion = [{
  img : '/images/icons/trophy.png',
  title : 'High Quality',
  desc : 'crafted from top material'
},{
  img : '/images/icons/guarantee.png',
  title : 'Warranty Protection',
  desc : 'Over 2 Years'
},{
  img : '/images/icons/customer-support.png',
  title : '24 / 7 Support',
  desc : 'Dedicated Support'
}
]


const Page = () => {
  return (
    <div >
        <div className="lg:mx-20 sm:mx-10 mx-3 mb-14 mt-10">
        <div className="title mx-auto max-w-[620px] ">
          <h2 className="lg:text-[36px] text-2xl mb-2 text-black text-center font-semibold">Get in Touch With Us</h2>
          <p className="tracking-wide text-[#9F9F9F] md:text-base text-sm text-center">For more information about our product & services. Please Feel Free to drop us an email. Our staff always be there to help you out. Do not hesitate.!</p>
        </div>
        <div className="flex md:flex-row  flex-col xl:px-20 ">
          {/* Contact Div */}
         <div className="contact space-y-5 lg:mt-24 md:mt-14  mt-5 md:px-12 px-8 md:w-1/2">
          {/* Address */}
           <div className="address flex gap-3">
            <IoLocationSharp className="md:size-8 size-4 "/>
            <div className="md:w-[240px] text-sm md:text-base w-[300px]">
              <h4 className="font-medium text-lg lg:text-[24px]">Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United Stated</p>
            </div>
            </div>
            {/* Phone */}
            <div className="number flex gap-3">
              <HiPhone className="md:size-8 size-4"/>
              <div className="md:w-[240px] text-sm md:text-base w-[300px]">
                <h4 className="font-medium text-lg lg:text-[24px]">Phone</h4>
                <p>Mobile : +(84) 546-6789</p>
                <p>Hotline : +(84) 456-6789</p>
              </div>
            </div>
            {/* Working Time */}
            <div className="time flex gap-3">
              <FaClock className="md:size-8 size-4"/>
              <div className="md:w-[240px] text-sm md:text-base w-[300px]">
                <h4 className="font-medium text-lg lg:text-[24px]">Working Time</h4>
                <p>Monday - Friday : 9:00 - 22:00</p>
                <p>Saturday - Sunday : 9:00 - 21:00</p>
              </div>
            </div>
         </div>
         {/* Form Div */}
         <form action="" className="md:w-1/2 md:space-y-3 space-y-1  mt-14 lg:px-12 flex flex-col gap-3">

          <label htmlFor="name" className="flex flex-col gap-2 md:gap-3">
            <p className="text-[16px] font-medium">Your Name</p>
            <input type="text" name="name" id="name" placeholder="Huzaifa" className="md:px-4 px-2 py-2 md:py-5 rounded-xl border outline-none border-[#9F9F9F] " />
          </label>
         
          <label htmlFor="email" className="flex flex-col gap-2 md:gap-3">
            <p className="text-[16px] font-medium">Email Address</p>
            <input type="text" name="email" id="email" placeholder="huzaifanem1407@gmail.com" className="md:px-4 px-2 py-2 md:py-5 rounded-xl border outline-none border-[#9F9F9F] " />
          </label>
         
         <label htmlFor="Subject" className="flex flex-col gap-2 md:gap-3">
          <p className="text-[16px] font-medium">Subject</p>
            <input type="text" name="Subject" id="Subject" placeholder="This is an optional" className="md:px-4 px-2 py-2 md:py-5 rounded-xl border outline-none border-[#9F9F9F] " />
          </label>
        
          <label htmlFor="msg" className="flex flex-col ggap-2 md:gap-3">
            <p className="text-[16px] font-medium">Message</p>
            <textarea  name="msg" rows={5} cols={10} id="msg" placeholder="Hi! I'd like to ask about" className="md:px-4 px-2 py-2 md:py-5 rounded-xl border outline-none border-[#9F9F9F] " />
          </label>
        <button className="mt-3 w-fit lg:px-20 lg:py-3 px-8 py-2 mx-auto  bg-[#029FAE] text-white rounded-lg">
          Submit
        </button>
         </form>
        </div>
        </div>

        <div className="lg:mx-20 sm:mx-10 mx-3  mb-14 mt-10 bg-[#F4F4F4] flex sm:flex-row flex-col items-center px-5 sm:gap-0 gap-5 text-[#242424] py-10 lg:py-20 sm:justify-around">
          {Promotion.map((card)=>{
            return(
              <div key={card.title} className="flex  gap-2 items-center">
                <div className="img">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="head flex flex-col justify-center">
                  <h6 className="font-semibold text-lg lg:text-[25px]">{card.title}</h6>
                  <p className="font-medium lg:text-base text-sm text-[#898989]">{card.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

    </div>
  )
}

export default Page