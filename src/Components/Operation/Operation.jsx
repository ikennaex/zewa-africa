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
    description:
      "Clients can easily reach us via email, WhatsApp, website contact forms, or through our public collection campaigns and adverts. Our responsive team promptly schedules a collection that fits your convenience and location.",
    icon: <Phone className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Scheduled E-Waste Collection",
    description:
      "We arrange for the secure pickup of recyclable electronic materials — including computers, mobile phones, IT equipment, office electronics, batteries, and cables — directly from clients’ premises or designated drop-off points.",
    icon: <ClipboardCheck className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Safe Transportation",
    description:
      "All collected items are safely transported to our licensed regional recycling and pre-processing facilities, following strict environmental and logistics standards for hazardous and non-hazardous materials.",
    icon: <Truck className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Pre-Processing and Material Recovery",
    description:
      "Upon arrival, items undergo pre-processing, dismantling, and segregation to identify components suitable for refurbishment, reuse, or material recycling. Each stage is carefully documented to ensure traceability and compliance.",
    icon: <Settings2 className="w-6 h-6 text-customGreen" />,
  },
  {
    title: "Reporting and Certification",
    description:
      "After processing, clients receive comprehensive documentation, including Recycling Certificates, Waste Traceability Reports, and Audit Summaries, providing transparent proof of responsible recycling and positive environmental impact.",
    icon: <Recycle className="w-6 h-6 text-customGreen" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OperationsPage = () => {
  return (
    <section className="bg-customGreen py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-6"
        >
          How We Operate – <span className="text-customYellow">Turning Waste into Sustainable Value</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          At ZEWA Group, our operations are built around efficiency,
          transparency, and environmental responsibility. Every step of our
          process ensures that electronic waste is collected, processed, and
          recovered in a safe, traceable, and compliant manner.
        </motion.p>

        {/* Steps Timeline */}
        <div className="relative border-l border-green-600 ml-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon Circle */}
              <div className="absolute -left-9 flex items-center justify-center w-12 h-12 bg-white rounded-full ring-4 ring-gray-100">
                {step.icon}
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-semibold text-customYellow flex items-center gap-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-white mt-2 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsPage;
