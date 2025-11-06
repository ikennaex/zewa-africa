import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Recycle,
  ShieldCheck,
  Handshake,
  FileCheck,
} from "lucide-react";

const Compliance = () => {
  const items = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      title: "The Basel Convention",
      description:
        "Ensuring all activities involving hazardous electronic components are safely collected, processed responsibly, and handled in full legal compliance.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-white" />,
      title: "Sustainability Partnerships",
      description:
        "Collaborating with organizations to design circular economy solutions — including refurbishment, reuse, and awareness programs — that extend product life and reduce waste.",
    },
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Local & Global Standards",
      description:
        "We comply with national environmental laws and global best practices, supporting government frameworks and aligning with the EU WEEE Directive guidance.",
    },
    {
      icon: <FileCheck className="w-10 h-10 text-white" />,
      title: "ISO 14001 Certification",
      description:
        "As part of the ZEWA Africa Group, we hold ISO 14001 — an internationally recognized certification for Environmental Management Systems.",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-customGreen to-green-950 text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl  font-bold mb-4"
        >
          Our Environmental Commitment & Compliance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-gray-200"
        >
          ZEWA Group operates with a deep commitment to sustainability, public
          health, and regulatory compliance — ensuring that our impact benefits
          both people and the planet.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Upholding the Highest Standards
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our environmental operations are guided by internationally
            recognized frameworks and partnerships that ensure transparency,
            sustainability, and safety across every stage of e-waste management.
          </p>
        </motion.div>

        {/* Compliance Items */}
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-customGreen rounded-full flex items-center justify-center mb-5 shadow-md">
                {item.icon}
              </div>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
