
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { HeartHandshake, Phone, Trophy, Waves } from "lucide-react";
import { MapPin } from "lucide-react";



export default function Contact(){
    return(
        <>
        <Navbar />
        <div className="text-center py-12 px-24 mt-80">
            <p className="text-2xl font-semibold">Get In Touch With Us</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet adipisicing elit  sit amet consectetur.</p>
            </div>

<div className="py-12 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between pt-16 w-full h-auto md:h-[500px]">
          {/* Left Side (Contact Information) */}
          <div className="w-full md:w-[340px] h-full py-8 px-6 md:px-8">
            <div className="flex gap-4 md:gap-6">
              <Phone className="pt-1" size={36} strokeWidth={2} />
              <p className="font-base text-xl md:text-2xl">Call Us</p>
            </div>
            <p className="py-4">We are available 24/7, 7 days a week.</p>
            <p className="border-b pb-6 border-slate-600">Phone: +923123456789</p>

            <div className="flex pt-3 gap-4 md:gap-6">
            <MapPin size={32} strokeWidth={1.5} />
              <p className="font-base text-xl md:text-2xl">Address</p>
            </div>
            <p className="py-3">Fill out our form and we will contact you within 24 hours.</p>
            <p className="border-b pb-8 border-slate-600">Email: anshrahkkhan29@gmail.com</p>
          </div>

          {/* Right Side (Form Section) */}
          <div className="w-full md:w-[1100px] h-auto shadow-lg shadow-slate-500 px-6 md:px-10 py-6 md:py-10">
            <div className="flex flex-col md:flex-row px-4 md:px-28 pb-12 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
              />
              <input
                type="number"
                placeholder="Your Phone"
                required
                className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
              />
            </div>
            <div className="px-[10px] md:px-[123px]">
              <textarea
                name="message"
                className="pt-2 pb-12 px-2 h-48 w-full bg-slate-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="px-[10px] md:px-[123px] pt-5">
              <button className="bg-[#029fae] py-4 px-7 rounded-lg text-white font-semibold w-full md:w-auto">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-12 lg:px-20">
  <div className="bg-[#F0F2F3] flex flex-col sm:flex-row justify-between py-12 ">
    
    {/* High Quality Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 sm:py-12 px-4 sm:px-6">
      <Trophy size={44} strokeWidth={1.5} />
      <div>
        <p className="text-black font-semibold text-lg sm:text-xl">High Quality</p>
        <p className="text-sm sm:text-base">Crafted from top material</p>
      </div>
    </div>

    {/* Warranty Protection Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 sm:py-12 px-4 sm:px-6">
      <Waves size={44} strokeWidth={1.5} />
      <div>
        <p className="text-black font-semibold text-lg sm:text-xl">Warranty Protection</p>
        <p className="text-sm sm:text-center sm:text-base">Over 2 years</p>
      </div>
    </div>

    {/* 24/7 Support Section */}
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 sm:py-12 px-4 sm:px-6">
      <HeartHandshake size={44} strokeWidth={1.5} />
      <div>
        <p className="text-black font-semibold text-lg sm:text-xl">24 / 7 Support</p>
        <p className="text-sm sm:text-base">Dedicated Support</p>
      </div>
    </div>
  </div>
</div>

      <Footer />
        </>
    )
}