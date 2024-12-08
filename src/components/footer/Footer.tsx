
import Image from "next/image";
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaFacebook, FaFacebookF, FaInstagram, FaPaypal, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";

export default function Footer() {
    return (
        <>
            <div className="pt-40 w-full">
                <div className="bg-[#F0F2F3] w-full flex flex-col md:flex-row justify-between px-6 md:px-24 py-12">

                    {/* Footer div 1 start */}
                    <div className="w-full md:w-[320px] py-6 md:py-12">
                        <div className="flex py-4 gap-3 pt-4">
                            <div className="w-[40px] h-[40px]">
                                <Image src="/images/icons/middlebar.png" alt="Logo Icon" width={40} height={40} /></div>
                            <p className="text-black text-2xl hover:font-semibold font-medium">Comforty</p>
                        </div>
                        <p className="w-full md:w-48">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>

                        {/* Social Links Section */}
                        <div className="py-2 text-white">
                            <div className="flex gap-3 pt-6">

                                <div className="flex justify-center gap-2 mt-12">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#007580] text-xl p-2 border-2 border-transparent rounded-full border-[#007580]"
                                    >
                                        <FaFacebookF className="w-[28px] h-[28px]" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
                                    >
                                        <FaTwitter className="w-[28px] h-[28px]" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
                                    >
                                        <FaInstagram className="w-[28px] h-[28px]" />
                                    </a>
                                    <a
                                        href="https://pinterest.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
                                    >
                                        <FaPinterestP className="w-[28px] h-[28px]" />
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
                                    >
                                        <FaYoutube className="w-[28px] h-[28px]" />
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* Footer div 1 end */}

                    {/* Footer div 2 start */}
                    <div className="w-full md:w-[320px] py-6 md:py-12">
                        <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">CATEGORY</p>
                        <div className="py-4 text-black gap-3">
                            <p className="pt-2">Sofa</p>
                            <p className="pt-2">ArmChair</p>
                            <p className="pt-2">WingChair</p>
                            <p className="text-[#029fae] pt-2">Desk Chair</p>
                            <p className="pt-2">Wooden Chair</p>
                            <p className="pt-2">Pak Bench</p>
                        </div>
                    </div>
                    {/* Footer div 2 end */}

                    {/* Footer div 3 start */}
                    <div className="w-full md:w-[320px] py-6 md:py-12">
                        <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">Support</p>
                        <div className="py-4 text-black gap-3">
                            <p className="pt-2">Help & Support</p>
                            <p className="pt-2">Terms & Conditions</p>
                            <p className="pt-2">Privacy Policy</p>
                            <p className="pt-2">Help</p>
                        </div>
                    </div>
                    {/* Footer div 3 end */}

                    {/* Footer div 4 start */}
                    <div className="w-full md:w-[320px] py-6 md:py-12">
                        <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">Newsletter</p>
                        <div className="flex gap-6 justify-center py-6">
                            <input type="email" placeholder="Email Address..." className="bg-transparent border-b-2 border-[#029fae] py-4 pr-20 border-none" />
                            <button className="font-medium border-b-2 border-[#029fae]">SUBMIT</button>
                        </div>
                        <p className="mr-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero perferendis at, repellendus explicabo similique nam?</p>
                    </div>
                    {/* Footer div 4 end */}

                </div>

                <div className="flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-8 px-20">
                        <p>
                            © 2021 - Blogy - Designed & Developed by{" "}
                            <a href="#" className="text-[#272343] hover:underline">
                                Zakirsoft
                            </a>
                        </p>
                        <div className="mt-2 mb-2 flex justify-center space-x-4">
                            <FaCcMastercard size={40} />
                            <FaPaypal size={40} />
                            <SiAmericanexpress  size={40} />
                            <FaCcVisa size={40} />
                        </div>
                    </div>


            </div>
        </>
    );
}