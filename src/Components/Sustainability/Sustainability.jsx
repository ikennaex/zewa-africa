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
      <div className="relative w-full lg:min-h-[80vh] min-h-[100vh] flex flex-col justify-center items-center text-left px-6 md:px-20">
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
              Our sustainability goal is to minimize environmental impact by
              driving responsible e-waste recovery and recycling, also to
              promote a circular economy that keeps valuable materials in use
              and out of landfills. By 2030, ZEWA Group aims to reduce its
              operational carbon emissions by 65% through optimized waste
              collection, renewable energy adoption, and active participation in
              reforestation initiatives.
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
    </section>
  );
};

export default Sustainability;
