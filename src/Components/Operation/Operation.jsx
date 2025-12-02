import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Truck, Recycle, ClipboardCheck, Settings2 } from "lucide-react";

const stepsIcons = [Phone, ClipboardCheck, Truck, Settings2, Recycle];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OperationsPage = () => {
  const { t } = useTranslation();

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
          className="text-center font-bold text-3xl md:text-4xl text-customGreen mb-6 leading-tight"
        >
          {t("operations.heading")}
          <span className="block text-customGreen">
            {t("operations.subheading")}
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
          {t("operations.description")}
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


      </div>
    </section>
  );
};

export default OperationsPage;
