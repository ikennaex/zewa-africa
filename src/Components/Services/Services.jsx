import React from "react";
import {
  FaRecycle,
  FaTruck,
  FaShieldAlt,
  FaCertificate,
  FaLeaf,
  FaUsers,
  FaTools,
} from "react-icons/fa";
import {
  GiBatteryPackAlt,
  GiProcessor,
  GiFactory,
  GiServerRack,
} from "react-icons/gi";
import {
  MdDevices,
  MdOutlineLightbulb,
  MdOutlineSecurity,
} from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import FadeIn from "../fadein";

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
    icon: <FaCertificate className="text-4xl" />,
    title: "Compliance & Certification",
    desc: "Clients receive recycling certificates, traceability reports, and audit-ready documentation for full transparency.",
  },
  {
    icon: <FaLeaf className="text-4xl" />,
    title: "Sustainability & Consulting",
    desc: "We offer e-waste management planning, staff training, and circular economy consulting for long-term sustainability.",
  },
  {
    icon: <FaTools className="text-4xl" />,
    title: "Extended Services",
    desc: "Includes device refurbishment, buy-back programs, and producer responsibility partnerships under EPR schemes.",
  },
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Awareness & Community Engagement",
    desc: "Educational campaigns to promote responsible recycling and reduce the dangers of informal e-waste disposal.",
  },
  {
    icon: <MdDevices className="text-4xl" />,
    title: "After Sales Service & Device Bulk Upgrade",
    desc: "We provide expert after-sales service and large-scale upgrade solutions to extend the life of IT and electronic assets.",
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
  { icon: <MdDevices />, label: "IT & Office Equipment" },
  { icon: <GiServerRack />, label: "Telecommunications Equipment" },
  { icon: <MdOutlineLightbulb />, label: "Lighting & Display Equipment" },
  { icon: <GiBatteryPackAlt />, label: "Batteries & Power Equipment" },
  { icon: <GiProcessor />, label: "Electronic Components & Accessories" },
  { icon: <GiFactory />, label: "Industrial & Medical Equipment" },
  { icon: <MdOutlineSecurity />, label: "Security & Specialized Equipment" },
  { icon: <BsBuildings />, label: "Household & Consumer Electronics" },
];

const Services = () => {
  return (
    <FadeIn>
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-16">

          {/* ===================== Header Section ===================== */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
              Our <span className="text-customGreen">Sustainable</span> Solutions
            </h1>
            <p className="text-customYellow font-semibold uppercase tracking-widest mb-4">
              Comprehensive E-Waste Management
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              At ZEWA Group (Zero E-Waste Africa), we provide sustainable, compliant, and circular e-waste management
              solutions — from collection to recycling and beyond.
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
          <div className="bg-customGreen/10 shadow-2xl rounded-3xl p-10 border-l-4 border-customGreen">
            <h3 className="text-2xl font-bold text-customGreen mb-8">
              What We Accept
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-md border-b-4 border-transparent hover:border-customGreen hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3 text-customGreen">{cat.icon}</div>
                  <p className="font-semibold text-gray-800">{cat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===================== Core Services ===================== */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-10">
              Our Core E-Waste Services
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
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
              ))}
            </div>
          </div>

          {/* ===================== Value-Added Services ===================== */}
          <div className="bg-gray-900 text-white p-12 rounded-3xl shadow-2xl border-t-8 border-customGreen text-left">
            <h3 className="text-3xl font-extrabold mb-6 text-customYellow">
              Value-Driven Solutions
            </h3>
            <ul className="grid md:grid-cols-2 gap-5 text-gray-300 leading-relaxed">
              <li><span className="text-customGreen font-extrabold">✓</span> <strong>Recycling & Treatment:</strong> Responsible recovery of e-waste, batteries, metals, and more — ensuring full compliance.</li>
              <li><span className="text-customGreen font-extrabold">✓</span> <strong>Repurposing & Upcycling:</strong> Extending the life of devices through refurbishing and creative reuse.</li>
              <li><span className="text-customGreen font-extrabold">✓</span> <strong>Decommissioning & Disassembly:</strong> Safe dismantling of data centers, telecom sites, and industrial equipment.</li>
              <li><span className="text-customGreen font-extrabold">✓</span> <strong>Data & Brand Protection:</strong> Certified data destruction to safeguard brand integrity and IP rights.</li>
              <li><span className="text-customGreen font-extrabold">✓</span> <strong>Logistics & Borderless Collection:</strong> Efficient cross-border collection and transportation of e-waste across Africa.</li>
              <li><span className="text-customGreen font-extrabold">✓</span> <strong>Consulting & CSR Initiatives:</strong> Environmental audits, CSR programs, and training for sustainable operations.</li>
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Services;
