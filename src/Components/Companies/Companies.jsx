import React from "react";
import Marquee from "react-fast-marquee";

// Import your images (place them in /src/assets/logos)
import {
  epr,
  hp,
  birger,
  ltc,
  wfp,
  unep,
  gassytour,
  ingedata,
  canal,
  epa,
  vodafone,
  bankofafrica,
  multichoice,
  samsung,
} from "../../imports";
const Companies = () => {
  const logos = [
    { src: epr, alt: "EPR" },
    { src: hp, alt: "HP" },
    { src: birger, alt: "Birger" },
    { src: ltc, alt: "LTC" },
    { src: wfp, alt: "WFP" },
    { src: unep, alt: "UNEP" },
    { src: gassytour, alt: "GassyTour" },
    { src: ingedata, alt: "Ingedata" },
    { src: canal, alt: "Canal" },
    { src: epa, alt: "EPA" },
    { src: vodafone, alt: "Vodafone" },
    { src: bankofafrica, alt: "Bank of Africa" },
    { src: multichoice, alt: "Multichoice" },
    { src: samsung, alt: "Samsung" },
  ];

  return (
    <div className="bg-white py-16">
      <h1 className="text-center text-gray-900  text-3xl md:text-4xl font-semibold mb-6">
        Our Trusted Clients & Partners
      </h1>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="flex items-center"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-10 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
