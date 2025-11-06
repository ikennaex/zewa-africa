import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Globe2,
  Recycle,
  Users,
  Building2,
  Sprout,
} from "lucide-react";

const Sustainability = () => {
  const partners = [
    {
      title: "Governments & NGOs",
      description:
        "Collaborating with government agencies, local parastatals, and NGOs to develop effective e-waste management and sustainability frameworks.",
      icon: <Building2 className="w-8 h-8 text-white" />,
    },
    {
      title: "International Organizations",
      description:
        "Partnering with international development and recycling organizations to drive global sustainability efforts and circular economy initiatives.",
      icon: <Globe2 className="w-8 h-8 text-white" />,
    },
    {
      title: "Educational Institutions",
      description:
        "Engaging schools and universities through awareness campaigns that inspire eco-consciousness and responsible waste handling among the youth.",
      icon: <Users className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-customGreen to-green-950 text-white px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl  font-bold mb-4"
        >
          Our Sustainability Goal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-gray-200 text-lg"
        >
          “By 2030, ZEWA Madagascar aims to reduce its operational carbon
          emissions by <span className="font-semibold text-white">65%</span> through optimized waste collection, renewable
          energy adoption, and active participation in reforestation initiatives.”
        </motion.p>
      </div>

      {/* Watchword Section */}
      <div className="max-w-5xl mx-auto py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-md p-10"
        >
          <div className="flex justify-center mb-6">
            <Sprout className="w-10 h-10 text-green-700" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Watch Word
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            A cleaner, safer, and more sustainable Africa where waste is
            transformed into opportunity and environmental stewardship is
            embedded in every sector of society.
          </p>
        </motion.div>
      </div>

      {/* Partnerships Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          >
            Strategic Clients & Partnerships
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 max-w-3xl mx-auto mb-12"
          >
            ZEWA Group collaborates with key stakeholders across Africa and the
            globe to drive impactful sustainability initiatives and scalable
            e-waste solutions.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-10">
            {partners.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-customGreen text-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-customGreen rounded-full flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-customGreen py-16 text-center text-white px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          Together, We Build a Sustainable Future for Africa
        </motion.h3>
        <p className="text-gray-200 max-w-2xl mx-auto">
          ZEWA’s sustainability initiatives empower businesses, communities, and
          governments to make impactful environmental choices today — for a
          cleaner tomorrow.
        </p>
      </div>
    </section>
  );
};

export default Sustainability;
