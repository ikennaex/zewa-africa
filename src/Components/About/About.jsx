import React from "react";
import { FaGlobeAfrica, FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { ShieldCheck, Globe2, InfoIcon } from "lucide-react";
import { zewastaff } from "../../imports";
import FadeIn from "../fadein";
import AfricaMap from "../Map/AfricaMap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <FadeIn duration={120}>
      {/* MAIN WRAPPER */}
      <section className="py-24 px-6 lg:px-20 bg-white text-gray-800">
        {/* INTRO SECTION */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={zewastaff}
              alt="ZEWA Waste Management"
              className="rounded-3xl shadow-xl w-full object-cover h-[420px] lg:h-[520px] border border-gray-100"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-customGreen">
                About ZEWA Group
              </h1>
              <div className="mt-3 h-1.5 w-32 bg-customGreen rounded-md"></div>
            </div>

            <p className="text-lg font-bold lg:text-lg leading-relaxed text-gray-700">
              Our History
            </p>

            <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              ZEWA Group began with a simple vision: to protect Africa’s
              environment by transforming the way electronic waste is managed.
              What started as a small initiative grew into a national movement
              for responsible recycling. Today, ZEWA partners with leading
              companies to recover, process, and recycle e-waste safely and
              transparently. Each piece of discarded equipment becomes an
              opportunity to create value, not pollution. Driven by innovation
              and environmental commitment, we work to build a circular,
              sustainable future for all.
            </p>

            <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900">
                ZEWA Group (Zero E-Waste Africa)
              </span>{" "}
              is a leading Waste Electrical and Electronic Equipment (WEEE)
              management company dedicated to advancing a{" "}
              <span className="text-customGreen font-semibold">
                sustainable circular economy
              </span>{" "}
              for electronic waste across Africa.
            </p>

            <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              Our mission is to reduce environmental harm, promote responsible
              recycling, and recover valuable materials from discarded
              electronics through innovative, compliant, and eco-efficient waste
              management practices. We support corporate organizations across
              Africa with seamless collection, pre-processing, and safe disposal
              of obsolete, damaged, or end-of-life electronics.
            </p>
          </div>
        </div>

        {/* COMPLIANCE SECTION */}
        <div className="max-w-7xl mx-auto mt-28">
          <h1 className="text-3xl lg:text-4xl font-bold text-customGreen text-center">
            Environmental Compliance and Commitment
          </h1>
          <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
            Our operations align with globally recognized environmental laws and
            sustainability frameworks.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {[
              {
                icon: <ShieldCheck size={42} className="text-customGreen" />,
                title: "The Basel Convention",
                text: "We ensure all hazardous and electronic waste is collected, handled, and processed responsibly, safely, and legally.",
              },
              {
                icon: <FaHandshake size={40} className="text-customGreen" />,
                title: "Sustainability Partnerships",
                text: "We collaborate with governments, NGOs, and private organizations to promote refurbishment, reuse, and public awareness initiatives.",
              },
              {
                icon: <Globe2 size={40} className="text-customGreen" />,
                title: "Local and Global Standards",
                text: "We comply fully with national and international environmental regulations, aligning with best practices such as the EU WEEE Directive.",
              },
              {
                icon: <FaLeaf size={40} className="text-customGreen" />,
                title: "ISO 14001 Certification",
                text: "Our Environmental Management System follows ISO 14001 standards for sustainability performance.",
              },
              {
                icon: <FaRecycle size={40} className="text-customGreen" />,
                title: "Circular Economy Vision",
                text: "We transform Africa’s e-waste challenges into opportunities by powering a greener, circular economy.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-customGreen/15 rounded-2xl shadow-md p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mx-auto bg-customGreen/10 p-5 rounded-full w-fit group-hover:bg-customGreen/20 transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mt-6 text-customGreen">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/about"
              className="bg-customGreen hover:bg-customGreen/80 transition-colors text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-3"
            >
              <InfoIcon size={22} />
              Learn More
            </Link>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="max-w-7xl mx-auto mt-28 text-center">
          <FaGlobeAfrica size={56} className="text-customGreen mx-auto" />
          <h1 className="text-3xl lg:text-4xl font-bold text-customGreen mt-4">
            Our Presence in Africa
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            We operate across multiple African nations.
          </p>
        </div>

        <div className="mt-12">
          <AfricaMap />
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
