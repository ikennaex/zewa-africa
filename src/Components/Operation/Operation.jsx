import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Truck,
  Recycle,
  ClipboardCheck,
  Settings2,
} from "lucide-react";

const steps = [
  {
    title: "Connect with Us",
    icon: Phone,
  },
  {
    title: "Scheduled E-Waste Collection",
    icon: ClipboardCheck,
  },
  {
    title: "Safe Transportation",
    icon: Truck,
  },
  {
    title: "Pre-Processing and Material Recovery",
    icon: Settings2,
  },
  {
    title: "Reporting and Certification",
    icon: Recycle,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OperationsPage = () => {
  return (
    <section className="relative overflow-hidden bg-customGreen py-20">
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-white"></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* TITLE */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center font-bold text-4xl md:text-5xl text-customGreen mb-6 leading-tight"
        >
          How We Operate
          <span className="block text-customGreen">
            Turning Waste into Sustainable Value
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-black max-w-2xl text-lg mb-16"
        >
          At ZEWA Group, we focus on efficiency, transparency, and
          environmental responsibility. Every stage ensures electronic
          waste is collected, processed, and transformed safely, traceably,
          and in full compliance with regulatory standards.
        </motion.p>

        {/* OPERATION IMAGE */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/images/operation.png"
          alt="Operations"
          className="w-full max-w-xl mb-16"
        />

        {/* STEPS */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mt-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-white shadow-xl rounded-full p-5 mb-4">
                <step.icon className="w-8 h-8 text-customGreen" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OperationsPage;
