import React from "react";
import { FaGlobeAfrica, FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { ShieldCheck, Globe2 } from "lucide-react";
import { staffImg } from "../../imports";
import FadeIn from "../fadein";

const About = () => {
  return (
    <FadeIn duration={100}>
      <section className=" py-20 px-6 lg:px-20 text-gray-800">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={staffImg}
              alt="ZEWA Waste Management"
              className="w-full rounded-3xl shadow-lg object-cover h-[400px] lg:h-[500px]"
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl  font-extrabold text-customGreen mb-4">
              About <span className="text-black">ZEWA</span> Group
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>ZEWA Group (Zero E-Waste Africa)</strong> is a leading
              Waste Electrical and Electronic Equipment (WEEE) management
              company dedicated to advancing a sustainable circular economy for
              electronic waste across Africa.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Our mission is to reduce environmental harm, promote responsible
              recycling, and recover valuable materials from discarded
              electronics through innovative, compliant, and eco-efficient waste
              management practices.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="bg-customGreen/10 border border-customGreen/20 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl  font-bold text-customGreen mb-4">
              What We Do
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We proudly support local and international corporate organizations
              across Africa by providing seamless collection, pre-processing, and
              safe disposal of obsolete, damaged, or end-of-life office and
              household electronic equipment.
            </p>
          </div>
        </div>

        {/* Africa Presence */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-8">
            <FaGlobeAfrica size={50} className="mx-auto text-customGreen mb-3" />
            <h1 className="text-3xl font-bold text-customGreen mb-2">
              Our Presence in Africa
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              ZEWA Group operates across multiple African nations, including:
            </p>
          </div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
  {[
    { name: "Nigeria", color: "bg-green-600" },
    { name: "Ghana", color: "bg-yellow-400" },
    { name: "Senegal", color: "bg-green-600" },
    { name: "Sierra Leone", color: "bg-blue-500" },
    { name: "Morocco", color: "bg-red-700" },
    { name: "Tunisia", color: "bg-red-600" },
    { name: "Kenya", color: "bg-red-700" },
    { name: "Ethiopia", color: "bg-green-700" },
    { name: "Tanzania", color: "bg-blue-600" },
    { name: "Comoros", color: "bg-yellow-500" },
    { name: "Madagascar", color: "bg-green-600" },
    { name: "Mozambique", color: "bg-red-600" },
    { name: "South Africa", color: "bg-green-700" },
    { name: "Zambia", color: "bg-green-700" },
    { name: "Botswana", color: "bg-blue-400" },
    { name: "Angola", color: "bg-red-700" },
    { name: "South Sudan", color: "bg-blue-700" },
    { name: "Gabon", color: "bg-green-600" },
  ].map((country, i) => (
    <div
      key={i}
      className={`${country.color} rounded-xl shadow-md py-4 px-2 text-white font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300`}
    >
      {country.name}
    </div>
  ))}
</div>

        </div>

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
        </div>

        {/* Closing */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h1 className="text-3xl md:text-4xl  font-semibold text-customGreen mb-4">
            Together for a Cleaner, Greener Africa
          </h1>
          <p className="text-gray-700 leading-relaxed">
            ZEWA Group remains steadfast in its mission to transform electronic
            waste challenges into environmental and economic opportunities — for
            businesses, communities, and the planet.
          </p>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
