import React from "react";
import { motion } from "framer-motion";
import { Leaf, Globe2, Recycle, Users, Building2, Sprout } from "lucide-react";
import { useTranslation } from "react-i18next";
import sdgImage from "/images/sustainable.png";

const icons = [Building2, Globe2, Users];

const Sustainability = () => {
  const { t } = useTranslation();
  const partners = t("sustainability.partners", { returnObjects: true });

  return (
    <section className="bg-gray-50">
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
              {t("sustainability.heading")}
            </h1>
            <p className="text-lg md:text-xl mb-2">
              {t("sustainability.description")}
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
