import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  const pillars = [
    {
      icon: Recycle,
      title: t("climate.pillars.0.title"),
      desc: t("climate.pillars.0.description"),
    },
    {
      icon: Leaf,
      title: t("climate.pillars.1.title"),
      desc: t("climate.pillars.1.description"),
    },
    {
      icon: Factory,
      title: t("climate.pillars.2.title"),
      desc: t("climate.pillars.2.description"),
    },
    {
      icon: GraduationCap,
      title: t("climate.pillars.3.title"),
      desc: t("climate.pillars.3.description"),
    },
    {
      icon: ShieldCheck,
      title: t("climate.pillars.4.title"),
      desc: t("climate.pillars.4.description"),
    },
    {
      icon: Handshake,
      title: t("climate.pillars.5.title"),
      desc: t("climate.pillars.5.description"),
    },
  ];

  const longTermPoints = t("climate.longTerm.points", { returnObjects: true });

  return (
    <section className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src="/images/garden.jpg"
          alt={t("climate.hero.title")}
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
            {t("climate.hero.subtitle")}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white max-w-4xl mt-4 leading-tight">
            {t("climate.hero.title")}
          </h1>
          <p className="text-gray-200 max-w-3xl mt-6 text-lg">
            {t("climate.hero.description")}
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
            {t("climate.commitmentCard.title")}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("climate.commitmentCard.description")}
          </p>
        </motion.div>

        {/* SECTION TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">
          {t("climate.sectionTitle")}
        </h1>

        {/* GRID CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {pillars.map((item, index) => (
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
            {t("climate.longTerm.title")}
          </h3>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {longTermPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
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
              alt={t("climate.partnershipCTA.title")}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <Handshake className="w-14 h-14 text-white mb-6" />
            <h3 className="text-3xl font-bold mb-4">{t("climate.partnershipCTA.title")}</h3>
            <p className="text-gray-200 leading-relaxed text-lg mb-6">
              {t("climate.partnershipCTA.description")}
            </p>
            <p className="text-white font-bold text-xl">
              {t("climate.partnershipCTA.highlight")}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Climate;
