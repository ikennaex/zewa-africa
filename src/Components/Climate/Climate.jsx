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

const PRIMARY_COLOR = "text-customGreen";
const ACCENT_COLOR = "text-customGreen";
const ACCENT_BG = "bg-customGreen/10";

const Climate = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src="/images/garden.jpg"
          alt="Climate impact overview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-white">
            Environmental Impact
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-4xl mt-4 leading-tight">
            ZEWA Group’s Contribution to Climate Action
          </h1>
          <p className="text-gray-200 max-w-3xl mt-6 text-lg">
            ZEWA Group is dedicated to reducing greenhouse gas emissions through sustainable electronic waste management and circular economy practices.
          </p>
        </motion.div>
      </div>

      {/* MAIN BODY */}
      <div className="max-w-7xl mx-auto py-24 px-6 md:px-16">

        {/* COMMITMENT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border-t-8 border-customGreen p-10 mb-24"
        >
          <h3 className={`text-3xl font-bold ${PRIMARY_COLOR} mb-4 flex items-center gap-3`}>
            <Globe className={`w-8 h-8 ${ACCENT_COLOR}`} />
            Our Environmental Commitment
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            ZEWA Group supports the global fight against climate change by reducing the carbon footprint associated with electronic waste. Our model focuses on minimizing environmental impact while enabling organizations to achieve sustainability goals.
          </p>
        </motion.div>

        {/* SECTION TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Our Pillars of Climate Mitigation
        </h1>

        {/* GRID CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {[
            {
              icon: Recycle,
              title: "Sustainable Waste Management",
              desc: "Recycling and reuse prevent e-waste from producing toxic gases and greenhouse emissions.",
            },
            {
              icon: Leaf,
              title: "Circular Economy Principles",
              desc: "Refurbishment reduces the need for new manufacturing, conserving energy and resources.",
            },
            {
              icon: Factory,
              title: "Low-Emission Operations",
              desc: "Energy-efficient equipment and route optimization reduce operational emissions.",
            },
            {
              icon: GraduationCap,
              title: "Carbon Education",
              desc: "We provide guidance that helps organizations integrate sustainability into operations.",
            },
            {
              icon: ShieldCheck,
              title: "Carbon-Neutral Support",
              desc: "Our recycling pathways help businesses meet carbon offsetting obligations.",
            },
            {
              icon: Handshake,
              title: "Ethical Partnership",
              desc: "We align partners with environmental governance and compliance standards.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-customGreen transition-all duration-300 group"
            >
              <div className={`flex items-center justify-center mb-6 w-20 h-20 rounded-full ${ACCENT_BG} group-hover:bg-customGreen transition-all`}>
                <item.icon className={`w-10 h-10 ${ACCENT_COLOR} group-hover:text-white transition-all`} />
              </div>
              <h4 className={`text-xl font-bold ${PRIMARY_COLOR} mb-3`}>{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* LONG TERM COMMITMENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-customGreen/20 rounded-3xl p-10 border-l-8 border-customGreen mb-24 shadow-inner"
        >
          <h3 className={`text-3xl font-bold ${PRIMARY_COLOR} mb-6 flex items-center gap-3`}>
            <Rocket className={`w-8 h-8 ${ACCENT_COLOR}`} />
            Our Long-Term Commitment
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>Investment in green and renewable systems.</li>
            <li>Expansion of recycling networks across Africa.</li>
            <li>Support for environmental policies and carbon standards.</li>
          </ul>
        </motion.div>

        {/* PARTNERSHIP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center bg-customGreen p-12 md:p-20 rounded-3xl shadow-xl text-white gap-10"
        >
          <div className="w-full md:w-1/2">
            <img
              src={ewasteImg}
              alt="E-waste recycling"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <Handshake className="w-14 h-14 text-white mb-6" />
            <h3 className="text-3xl font-bold mb-4">Partnering for a Cleaner Future</h3>
            <p className="text-gray-200 leading-relaxed text-lg mb-6">
              Organizations that work with ZEWA contribute to a continental effort to reduce emissions and conserve resources.
            </p>
            <p className="text-white font-bold text-xl">
              Together, we build a circular and low-carbon Africa.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Climate;
