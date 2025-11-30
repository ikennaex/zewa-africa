import React from "react";
import { FaGlobeAfrica, FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { ShieldCheck, Globe2 } from "lucide-react";
import { staffImg, zewastaff } from "../../imports";
import FadeIn from "../fadein";
import FlaShopMap from "../Map/AfricaMap";
import AfricaMap from "../Map/AfricaMap";

const About = () => {
  return (
    <FadeIn duration={100}>
      <section className=" py-20 px-6 lg:px-20 text-gray-800 bg-[#54F7DB]/10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={zewastaff}
              alt="ZEWA Waste Management"
              className="w-full rounded-3xl shadow-lg object-cover h-[400px] lg:h-[500px]"
            />
          </div>

          <div className="lg:w-1/2 max-w-2xl">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-customGreen">
                  About Us
                </h1>
                <div className="mt-2 h-1 w-24 bg-customGreen/70 rounded-full"></div>
              </div>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-gray-900">
                    ZEWA Group (Zero E-Waste Africa)
                  </span>{" "}
                  is a leading Waste Electrical and Electronic Equipment (WEEE)
                  management company dedicated to advancing a{" "}
                  <span className="text-customGreen font-semibold">
                    sustainable circular economy
                  </span>
                  for electronic waste across Africa.
                </p>

                <p>
                  Our mission is to reduce environmental harm, promote
                  responsible recycling, and recover valuable materials from
                  discarded electronics through innovative, compliant, and
                  eco-efficient waste management practices. We proudly support
                  local and international corporate organizations across Africa
                  by providing seamless collection, pre-processing, and safe
                  disposal of obsolete, damaged, or end-of-life office and
                  household electronic equipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Africa Presence */}
        <div className="max-w-6xl mx-auto mt-20">
          {/* Environmental Commitment */}
          <div className="max-w-6xl mx-auto mt-20">
            <h1 className="text-3xl md:text-4xl font-bold text-customGreen mb-10 text-center">
              Our Environmental Commitment & Compliance
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck size={40} className="text-customGreen" />,
                  title: "The Basel Convention",
                  text: "We ensure all hazardous and electronic waste is collected, handled, and processed responsibly, safely, and legally.",
                },
                {
                  icon: <FaHandshake size={38} className="text-customGreen" />,
                  title: "Sustainability Partnerships",
                  text: "We collaborate with governments, NGOs, and private organizations to promote refurbishment, reuse, and public awareness initiatives.",
                },
                {
                  icon: <Globe2 size={38} className="text-customGreen" />,
                  title: "Local & Global Standards",
                  text: "We comply fully with national and international environmental regulations, aligning with best practices such as the EU WEEE Directive.",
                },
                {
                  icon: <FaLeaf size={38} className="text-customGreen" />,
                  title: "ISO 14001 Certification",
                  text: "Our Environmental Management System (EMS) follows ISO 14001 standards for continuous improvement and sustainability performance.",
                },
                {
                  icon: <FaRecycle size={38} className="text-customGreen" />,
                  title: "Circular Future Vision",
                  text: "ZEWA continues to drive Africa’s transition toward a cleaner, greener, and circular economy — turning e-waste challenges into opportunities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-8 border border-customGreen/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-customGreen/10 p-4 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-customGreen">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="items-center justify-center flex mt-12">
              <button className="bg-customGreen rounded-lg p-2 text-white ">
                Learn More
              </button>
            </div>
          </div>

          <div className="text-center mb-8 mt-20">
            <FaGlobeAfrica
              size={50}
              className="mx-auto text-customGreen mb-3"
            />
            <h1 className="text-3xl font-bold text-customGreen mb-2">
              Our Presence in Africa
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We operate across multiple African nations, including:
            </p>
          </div>
        </div>

        <div className="w-full">
          <AfricaMap />
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
