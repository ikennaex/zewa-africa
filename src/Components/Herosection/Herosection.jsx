import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import {
  staffImg,
  ewasteImg,
  facilityImg,
  officeImg,
  carbonImg,
  herovideo,
} from "../../imports";

const slides = [
  {
    id: 1,
    image: herovideo,
    caption: "ZEWA STAFF & TEAM",
    isVideo: true,
  },
  {
    id: 2,
    image: staffImg,
    caption: "ZEWA STAFF & TEAM",
  },
  {
    id: 3,
    image: ewasteImg,
    caption: "E-WASTE PHOTES",
  },
  {
    id: 4,
    image: carbonImg,
    caption: "CARBON FOOTPRINT",
  },
  {
    id: 5,
    image: facilityImg,
    caption: "RECYCLING FACILITY",
  },
  {
    id: 6,
    image: officeImg,
    caption: "OFFICE &WAREHOUSE",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden pt-40">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1200ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.isVideo ? (
            <video
              src={slide.image}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-950/70 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-32 text-center lg:text-left">
        <div className="mx-auto lg:mx-0 animate-fadeInUp">
          <div className="max-w-3xl ">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-snug mb-6">
            Building a Cleaner, Greener & Sustainable Future
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10">
            We are dedicated to responsible recycling, effective waste disposal,
            and sustainable environmental management for communities and
            industries.
          </p>
          </div>

<div className="flex items-center justify-between w-full mt-6">

  {/* Left: Button */}
  <a
    href="https://wa.me/+261388390349"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
      <FaWhatsapp size={22} />
      Recycle your E-Waste today
    </button>
  </a>

  {/* Right: Caption */}
  <p className="text-gray-300 italic text-sm md:text-base">
    {slides[current].caption}
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
