import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Globe,
  Factory,
  Handshake,
  GraduationCap,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { ewasteImg } from "../../imports";

// Define the primary color variables for cleaner use (assuming customGreen is defined elsewhere)
// For this design, let's use a deep green (like #0B5345 or green-800) and a vibrant accent (green-500)
const PRIMARY_COLOR = "text-customGreen";
const ACCENT_COLOR = "text-customGreen";
const ACCENT_BG = "bg-customGreen/10";

const Climate = () => {
  // Common animation variants for reuse
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    // Updated background to a softer green tint
    <section className="bg-gray-50 text-gray-800 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          {/* Subtitle Accent */}
          <p className="text-sm font-bold uppercase tracking-widest text-green-600 mb-2">
            Environmental Impact
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            ZEWA Group’s Contribution to <span className={ACCENT_COLOR}>Climate Action</span>
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
            ZEWA Group is dedicated to reducing greenhouse gas emissions through
            **sustainable electronic waste management**, promoting circular economy
            practices, and empowering organizations across Africa to achieve
            their environmental goals.
          </p>
        </motion.div>

        {/* Overview Section - Highlighted Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border-t-8 border-green-600 p-10 mb-20"
        >
          <h3 className={`text-3xl font-bold ${PRIMARY_COLOR} mb-4 flex items-center gap-3`}>
            <Globe className={`w-8 h-8 ${ACCENT_COLOR}`} />
            Our Environmental Commitment
          </h3>
          <p className="text-gray-700 leading-snug text-lg">
            ZEWA Group (Zero Electronics Waste Africa) supports the global fight
            against climate change by **reducing the carbon footprint** associated
            with electronic waste. Our model focuses on minimizing carbon impact
            while enabling other organizations to achieve their sustainability
            goals through responsible recycling and reuse initiatives.
          </p>
        </motion.div>

        {/* Key Ways ZEWA Supports Climate Action Grid */}
        <h1 className={`text-3xl md:text-4xl  font-bold ${PRIMARY_COLOR} mb-12 text-center`}>
          Our Pillars of Climate Mitigation
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Recycle,
              title: "Sustainable Waste Management",
              desc: "By ensuring safe recycling, repair, and reuse, ZEWA prevents e-waste from releasing toxic gases and greenhouse emissions through landfills or open burning.",
            },
            {
              icon: Leaf,
              title: "Circular Economy Principles",
              desc: "Through refurbishment, reuse, and parts recovery, we extend product lifespans and reduce the need for new manufacturing, cutting down on resource extraction.",
            },
            {
              icon: Factory,
              title: "Low-Emission Operations",
              desc: "We optimize logistics routes, use energy-efficient machinery, and implement waste segregation at source to minimize our operational emissions.",
            },
            {
              icon: GraduationCap,
              title: "Collaboration & Carbon Education",
              desc: "ZEWA partners with governments, NGOs, and businesses to provide training and consultancy on carbon reduction and sustainability integration.",
            },
            {
              icon: ShieldCheck,
              title: "Supporting Carbon-Neutral Goals",
              desc: "Our recycling programs help organizations meet their carbon offsetting targets by diverting waste from emission-heavy disposal methods.",
            },
            {
              icon: Handshake,
              title: "Ethical Partnership",
              desc: "We ensure our partners adhere to strict environmental, social, and governance (ESG) standards throughout the entire e-waste value chain.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-2xl hover:border-green-300 transition-all duration-300 group"
            >
              {/* Icon Container: Use an accented circle */}
              <div className={`flex items-center justify-center mb-5 mx-auto w-16 h-16 rounded-full ${ACCENT_BG} group-hover:bg-green-600 transition-colors`}>
                <item.icon className={`w-8 h-8 ${ACCENT_COLOR} group-hover:text-white transition-colors`} />
              </div>
              <h4 className={`text-xl font-bold ${PRIMARY_COLOR} mb-3`}>
                {item.title}
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Long-term Commitment - Accented list block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-customGreen/20 rounded-3xl p-10 border-l-8 border-green-600 mb-20 shadow-inner"
        >
          <h3 className={`text-3xl font-bold ${PRIMARY_COLOR} mb-6 flex items-center gap-3`}>
            <Rocket className={`w-8 h-8 ${ACCENT_COLOR}`} />
            Our Long-Term Commitment
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <li className="flex items-start">
              <span className={`mr-3 ${ACCENT_COLOR} font-extrabold text-2xl`}>&rarr;</span>
              Continuous investment in **green technologies** and renewable energy sources.
            </li>
            <li className="flex items-start">
              <span className={`mr-3 ${ACCENT_COLOR} font-extrabold text-2xl`}>&rarr;</span>
              Expanding **eco-friendly collection** and high-standard recycling networks across Africa.
            </li>
            <li className="flex items-start">
              <span className={`mr-3 ${ACCENT_COLOR} font-extrabold text-2xl`}>&rarr;</span>
              Supporting environmental policies that integrate **effective carbon management** practices.
            </li>
          </ul>
        </motion.div>

        {/* Partnership Section - Clear Call to Action */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-center bg-customGreen p-10 md:p-16 rounded-3xl shadow-2xl text-white gap-8"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={ewasteImg}
          alt="E-waste recycling"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-5">
          <Handshake className="w-12 h-12 text-green-300" />
        </div>

        <h3 className="text-3xl font-bold text-green-300 mb-4">
          Partnering for a Cleaner Future
        </h3>

        <p className="text-gray-200 leading-relaxed text-lg mb-6">
          Every organization working with ZEWA contributes to a
          continent-wide effort to reduce emissions, conserve resources,
          and promote sustainability.
        </p>

        <p className="text-green-300 font-extrabold text-xl tracking-wider">
          Together, we can build a greener, safer, circular, and low-carbon Africa.
        </p>
      </div>
    </motion.div>

      </div>
    </section>
  );
};

export default Climate;