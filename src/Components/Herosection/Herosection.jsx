import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { staffImg, ewasteImg, facilityImg, officeImg, carbonImg } from "../../imports";

const slides = [
  { id: 1, image: staffImg, caption: "Our Dedicated ZEWA Team at Work" },
  { id: 2, image: ewasteImg, caption: "Responsible E-Waste Collection" },
  { id: 3, image: carbonImg, caption: "Carbon Footprint" },
  { id: 4, image: facilityImg, caption: "Modern Recycling Facilities" },
  { id: 5, image: officeImg, caption: "Efficient Operations & Management" },
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
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1200ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-green-950/70 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-32 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0 animate-fadeInUp">
          <p className="text-customYellow text-sm md:text-base font-semibold mb-3 tracking-widest uppercase">
            Zewa Group Africa
          </p>

          <h1 className="text-3xl md:text-4xl  font-extrabold text-white leading-snug mb-6">
            Building a Cleaner, Greener & Sustainable Future
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10">
            We are dedicated to responsible recycling, effective waste disposal,
            and sustainable environmental management for communities and
            industries.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fadeInUp delay-200">
            <a
              href="https://wa.me/2348139096910"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
                <FaWhatsapp size={22} />
                Recycle your E-Waste today
              </button>
            </a>
            {/* 
            <a href="mailto:info@zewa.com">
              <button className="flex items-center gap-2 border-2 border-white hover:bg-white hover:text-black text-white px-7 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
                <MdOutlineMail size={22} />
                Email Us
              </button>
            </a> */}
          </div>
        </div>

        {/* Slide Caption */}
        <p className="absolute bottom-8 w-full text-center text-gray-300 italic text-sm md:text-base transition-opacity duration-700">
          {slides[current].caption}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
