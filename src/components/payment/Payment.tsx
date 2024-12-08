import React from "react";

const Payment = () => {
  return (
    <section className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-[40px] w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-16 py-8">
      {/* Logo 1 */}
      <div
        className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[85px] lg:h-[87px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo1.png')" }}
      ></div>

      {/* Logo 2 */}
      <div
        className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[107px] lg:h-[109px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo2.png')" }}
      ></div>

      {/* Logo 3 */}
      <div
        className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[135px] lg:h-[139px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo3.png')" }}
      ></div>

      {/* Logo 4 */}
      <div
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[63px] lg:h-[65px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo4.png')" }}
      ></div>

      {/* Logo 5 */}
      <div
        className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[98px] lg:h-[101px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo5.png')" }}
      ></div>

      {/* Logo 6 */}
      <div
        className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] lg:w-[113px] lg:h-[115px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo6.png')" }}
      ></div>

      {/* Logo 7 */}
      <div
        className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] lg:w-[84px] lg:h-[87px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/companyLogos/logo7.png')" }}
      ></div>
    </section>
  );
};

export default Payment;
