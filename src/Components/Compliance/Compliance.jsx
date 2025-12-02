import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe, Recycle, ShieldCheck, Handshake, FileCheck } from "lucide-react";

const Compliance = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "baselConvention",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
    },
    {
      key: "sustainabilityPartnerships",
      icon: <Handshake className="w-10 h-10 text-white" />,
    },
    {
      key: "localGlobalStandards",
      icon: <Globe className="w-10 h-10 text-white" />,
    },
    {
      key: "iso14001",
      icon: <FileCheck className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section className="">
      <div className="max-w-6xl mx-auto py-20 px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("compliance.title")}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("compliance.description")}
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
                {t(`compliance.items.${item.key}.title`)}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {t(`compliance.items.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
