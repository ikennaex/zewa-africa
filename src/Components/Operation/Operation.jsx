import React from "react";
import { motion } from "framer-motion";
import { Phone, Truck, Recycle, ClipboardCheck, Settings2 } from "lucide-react";
import { logo } from "../../imports";

const steps = [
  {
    title: "Connect with Us",
    icon: <Phone className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Scheduled E-Waste Collection",
    icon: <ClipboardCheck className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Safe Transportation",
    icon: <Truck className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Pre-Processing and Material Recovery",
    icon: <Settings2 className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Reporting and Certification",
    icon: <Recycle className="w-6 h-6 text-customGreen" />,
  },
];

const fadeIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const OperationsPage = () => {
  const radius = 200; // radius of the circle
  const center = 250; // center point for positioning

  return (
    <section className="bg-customGreen py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-white mb-6 max-w-4xl"
      >
        How We Operate – <span className="text-[#54F7DB]">Turning Waste into Sustainable Value</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-white mb-12 max-w-3xl"
      >
        At ZEWA Group, our operations are built around efficiency,
        transparency, and environmental responsibility. Every step of our
        process ensures that electronic waste is collected, processed, and
        recovered in a safe, traceable, and compliant manner.
      </motion.p>

      {/* Circular Steps */}
      <div className="relative w-[500px] h-[500px]">
        {/* Central Logo */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-black flex items-center justify-center shadow-lg">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Steps around the circle */}
        {steps.map((step, index) => {
          const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2; // start from top
          const x = center + radius * Math.cos(angle) - 40; // adjust for icon size
          const y = center + radius * Math.sin(angle) - 40;

          return (
            <motion.div
              key={index}
              className="absolute w-28 h-20 flex flex-col items-center text-center"
              style={{ top: y, left: x }}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ring-4 ring-gray-100 mb-2">
                {step.icon}
              </div>
              <h3 className="text-[10px] font-semibold text-[#54F7DB] text-center">
                {index + 1}. {step.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OperationsPage;
