import React from "react";
import Marquee from "react-fast-marquee";

// Import your images
import {
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

  // Split logos into two halves
  const half = Math.ceil(logos.length / 2);
  const firstHalf = logos.slice(0, half);
  const secondHalf = logos.slice(half);

  return (
    <div className="bg-white py-16">
      <h1 className="text-center text-gray-900 text-3xl md:text-4xl font-semibold mb-6">
        Our Trusted Clients
      </h1>

      {/* First row: first half of logos */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="mb-6"
      >
        {firstHalf.map((logo, index) => (
          <div key={index} className="mx-10 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>

      {/* Second row: second half of logos, opposite direction */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        direction="right"
      >
        {secondHalf.map((logo, index) => (
          <div key={index} className="mx-10 flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
