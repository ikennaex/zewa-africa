import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import {
  FaRecycle,
  FaTruck,
  FaShieldAlt,
  FaCertificate,
  FaLeaf,
  FaUsers,
  FaTools,
  FaSyncAlt,
  FaCogs,
  FaHandsHelping,
} from "react-icons/fa";
import {
  MdDevices,
} from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import FadeIn from "../fadein";
import { Link } from "react-router";

const services = [
  {
    icon: <FaTruck className="text-4xl" />,
    title: "Collection & Logistics",
    desc: "We offer on-site pickup, secure transport, and community drop-off points to ensure safe and efficient e-waste collection.",
  },
  
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Data Security & Destruction",
    desc: "Certified data wiping, secure equipment handling, and compliance reporting to protect sensitive information.",
  },
  {
    icon: <FaRecycle className="text-4xl" />,
    title: "Recycling & Processing",
    desc: "Safe dismantling, material recovery, and hazardous waste treatment in line with Basel Convention standards.",
  },
  {
    icon: <MdDevices className="text-4xl" />,
    title: "After Sales Service & Device Bulk Upgrade",
    desc: "We provide expert after-sales service and large-scale upgrade solutions to extend the life of IT and electronic assets.",
  },
  {
    icon: <FaTools className="text-4xl" />,
    title: "Extended Services",
    desc: "Includes device refurbishment, buy-back programs, and producer responsibility partnerships under EPR schemes.",
  },
  {
    icon: <FaLeaf className="text-4xl" />,
    title: "Sustainability & Consulting",
    desc: "We offer e-waste management planning, staff training, and circular economy consulting for long-term sustainability.",
  },
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Awareness & Community Engagement",
    desc: "Educational campaigns to promote responsible recycling and reduce the dangers of informal e-waste disposal.",
  },
  {
    icon: <FaCertificate className="text-4xl" />,
    title: "Compliance & Certification",
    desc: "Clients receive recycling certificates, traceability reports, and audit-ready documentation for full transparency.",
  },
];

const industries = [
  "Telecom",
  "Finance",
  "Government",
  "Energy",
  "Media",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail",
  "NGOs",
  "Hospitality",
  "Logistics",
  "Shipping",
  "Aviation",
  "Public Utilities",
  "Real Estate",
  "IT & Software",
];

const categories = [
  {
    label: "Mobile Phone",
    image: "https://cdn-icons-png.flaticon.com/128/644/644458.png",
  },
  {
    label: "Computer",
    image: "https://cdn-icons-png.flaticon.com/128/2933/2933245.png",
  },
  {
    label: "Router/Switch",
    image: "https://cdn-icons-png.flaticon.com/128/1183/1183657.png",
  },
  {
    label: "Cables",
    image: "https://cdn-icons-png.flaticon.com/128/1606/1606120.png",
  },
  {
    label: "Scanner",
    image: "https://cdn-icons-png.flaticon.com/128/10216/10216243.png",
  },
  {
    label: "TV",
    image: "https://cdn-icons-png.flaticon.com/128/1023/1023521.png",
  },
  {
    label: "Radio",
    image: "https://cdn-icons-png.flaticon.com/128/4345/4345664.png",
  },
  {
    label: "Genset",
    image: "https://cdn-icons-png.flaticon.com/128/14461/14461063.png",
  },
  {
    label: "Batteries",
    image: "https://cdn-icons-png.flaticon.com/128/1687/1687413.png",
  },
  {
    label: "Bulb",
    image: "https://cdn-icons-png.flaticon.com/128/1375/1375571.png",
  },
  {
    label: "Fan",
    image: "https://cdn-icons-png.flaticon.com/512/979/979619.png",
  },
  {
    label: "Network Rack",
    image: "https://cdn-icons-png.flaticon.com/128/9504/9504100.png",
  },
  {
    label: "Antenna",
    image: "https://cdn-icons-png.flaticon.com/128/3770/3770310.png",
  },
  {
    label: "Medical Equipment",
    image: "https://cdn-icons-png.flaticon.com/128/3465/3465894.png",
  },
];

const Services = () => {
  return (
    <FadeIn>
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          {/* ===================== Header Section ===================== */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
              Our Core <span className="text-customGreen">Solutions</span> &{" "}
              Services
            </h1>
            <p className="text-customGreen font-semibold uppercase tracking-widest mb-4">
              Comprehensive E-Waste Management
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              At ZEWA Group (Zero E-Waste Africa), we provide sustainable,
              compliant, and circular e-waste management solutions from
              collection to recycling and beyond.
            </p>
          </div>

          {/* ===================== Industries Section ===================== */}
          <div className="bg-white shadow-lg border border-gray-100 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Industries We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {industries.map((ind, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-customGreen/5 text-customGreen rounded-full text-sm font-medium hover:bg-customGreen hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* ===================== What We Accept ===================== */}
          <div className="bg-gray-50 shadow-sm rounded-2xl p-14 border border-gray-200 ">
            <h3 className="text-2xl font-bold text-gray-900 mb-12">
              What We Accept
            </h3>

            <div className="flex flex-wrap lg:gap-16 gap-10 justify-center ">
              {categories.map((cat) => (
                <div className="flex  flex-col items-center justify-center">
                  <img className="lg:h-24 h-14" src={cat.image} alt="" />
                  <p>{cat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===================== Core Services ===================== */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-10">
              Our Core E-Waste Services
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <a
                  href="https://wa.me/261388390349?text=Hello%20Zewa%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-left hover:bg-customGreen group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="mb-4 inline-flex p-4 rounded-full bg-customGreen/10 group-hover:bg-white text-customGreen transition-all duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-white/90 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ===================== Value-Added Services ===================== */}
          <div className="bg-gray-900 text-white p-12 rounded-3xl text-left">
            <h3 className="text-3xl font-extrabold mb-8">
              Value-Driven Solutions
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                <FaRecycle className="text-green-300 mt-1" size={50} />
                <div className="text-gray-300">
                  <strong className="text-white">Recycling & Treatment:</strong>{" "}
                  Responsible recovery of e-waste, batteries, metals, and more —
                  ensuring full compliance.
                </div>
              </li>
              <li className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                <FaSyncAlt className="text-green-300 mt-1" size={50} />
                <div className="text-gray-300">
                  <strong className="text-white">
                    Repurposing & Upcycling:
                  </strong>{" "}
                  Extending the life of devices through refurbishing and
                  creative reuse.
                </div>
              </li>
              <li className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                <FaCogs className="text-green-300 mt-1" size={50} />
                <div className="text-gray-300">
                  <strong className="text-white">
                    Decommissioning & Disassembly:
                  </strong>{" "}
                  Safe dismantling of data centers, telecom sites, and
                  industrial equipment.
                </div>
              </li>
              <li className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                <FaShieldAlt className="text-green-300 mt-1" size={50} />
                <div className="text-gray-300">
                  <strong className="text-white">
                    Data & Brand Protection:
                  </strong>{" "}
                  Certified data destruction to safeguard brand integrity and IP
                  rights.
                </div>
              </li>
              <li className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                <FaTruck className="text-green-300 mt-1" size={50} />
                <div className="text-gray-300">
                  <strong className="text-white">
                    Logistics & Borderless Collection:
                  </strong>{" "}
                  Efficient cross-border collection and transportation of
                  e-waste across Africa.
                </div>
              </li>
              <li className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                <FaHandsHelping className="text-green-300 mt-1" size={50} />
                <div className="text-gray-300">
                  <strong className="text-white">
                    Consulting & CSR Initiatives:
                  </strong>{" "}
                  Environmental audits, CSR programs, and training for
                  sustainable operations.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Services;
