import React from "react";
import { motion } from "framer-motion";
import { Leaf, Globe2, Recycle, Users, Building2, Sprout } from "lucide-react";
import sdgImage from "/images/sustainable.png";

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
      <div className="relative w-full min-h-[80vh] flex flex-col justify-center items-center text-left px-6 md:px-20">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/videos/forest.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our Sustainability Goal
            </h1>
            <p className="text-lg md:text-xl mb-2">
              “By 2030, ZEWA Group aims to reduce its operational carbon
              emissions by <span className="font-semibold text-white">65%</span>{" "}
              through optimized waste collection, renewable energy adoption, and
              active participation in reforestation initiatives.”
            </p>
          </motion.div>

          {/* Circular SDG Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
          >
            <img
              src={sdgImage}
              alt="Sustainable Development Goals"
              className="w-80 md:w-[400px]"
            />
          </motion.div>
        </div>
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
    </section>
  );
};

export default Sustainability;
