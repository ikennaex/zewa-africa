import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const logos = [
    { src: hp, alt: "HP" },
    { src: birger, alt: "Birger" },
    { src: ltc, alt: "LTC" },
    { src: wfp, alt: "WFP" },
    { src: unep, alt: "UNEP" },
    { src: gassytour, alt: "GassyTour" },
    { src: ingedata, alt: "Ingedata" },
    { src: epa, alt: "EPA" },
    { src: vodafone, alt: "Vodafone" },
    { src: canal, alt: "Canal" },
    { src: bankofafrica, alt: "Bank of Africa" },
    { src: multichoice, alt: "Multichoice" },
    { src: "images/zte.png", alt: "ZTE" },
    { src: "images/transcontinent.png", alt: "transcontinent" },
    { src: "images/firstimmo.png", alt: "firstimmo" },
    { src: "images/minstere.jpg", alt: "minstere" },
  ];

  const half = Math.ceil(logos.length / 2);
  const firstHalf = logos.slice(0, half);
  const secondHalf = logos.slice(half);

  return (
    <div className="bg-white py-16">
      <h1 className="text-center text-gray-900 text-3xl md:text-4xl font-semibold mb-6">
        {t("companies.heading")}
      </h1>

      <Marquee gradient={false} speed={40} pauseOnHover={true} className="mb-6">
        {firstHalf.map((logo, index) => (
          <div
            key={index}
            className="mx-6 flex items-center justify-center w-32 h-20"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>

      <Marquee gradient={false} speed={40} pauseOnHover={true} direction="right">
        {secondHalf.map((logo, index) => (
          <div
            key={index}
            className="mx-6 flex items-center justify-center w-32 h-20"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
