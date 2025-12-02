import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaRecycle, FaTruck, FaShieldAlt, FaCertificate, FaLeaf, FaUsers,
  FaTools, FaSyncAlt, FaCogs, FaHandsHelping
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import FadeIn from "../fadein";
import { Link } from "react-router";

const servicesData = [
  FaTruck, FaShieldAlt, FaRecycle, MdDevices, FaTools,
  FaLeaf, FaUsers, FaCertificate
];

const categoriesImages = [
  "https://cdn-icons-png.flaticon.com/128/644/644458.png",
  "https://cdn-icons-png.flaticon.com/128/2933/2933245.png",
  "https://cdn-icons-png.flaticon.com/128/1183/1183657.png",
  "https://cdn-icons-png.flaticon.com/128/1606/1606120.png",
  "https://cdn-icons-png.flaticon.com/128/10216/10216243.png",
  "https://cdn-icons-png.flaticon.com/128/1023/1023521.png",
  "https://cdn-icons-png.flaticon.com/128/4345/4345664.png",
  "https://cdn-icons-png.flaticon.com/128/14461/14461063.png",
  "https://cdn-icons-png.flaticon.com/128/1687/1687413.png",
  "https://cdn-icons-png.flaticon.com/128/1375/1375571.png",
  "https://cdn-icons-png.flaticon.com/512/979/979619.png",
  "https://cdn-icons-png.flaticon.com/128/9504/9504100.png",
  "https://cdn-icons-png.flaticon.com/128/3770/3770310.png",
  "https://cdn-icons-png.flaticon.com/128/3465/3465894.png"
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
              {t("services.heading")}
            </h1>
            <p className="text-customGreen font-semibold uppercase tracking-widest mb-4">
              {t("services.subheading")}
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              {t("services.description")}
            </p>
          </div>

          {/* Industries */}
          <div className="bg-white shadow-lg border border-gray-100 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              {t("services.industriesTitle")}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {t("services.industries", { returnObjects: true }).map((ind, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-customGreen/5 text-customGreen rounded-full text-sm font-medium hover:bg-customGreen hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gray-50 shadow-sm rounded-2xl p-14 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-12">
              {t("services.categoriesTitle")}
            </h3>
            <div className="flex flex-wrap lg:gap-16 gap-10 justify-center">
              {t("services.categories", { returnObjects: true }).map((cat, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <img className="lg:h-24 h-14" src={categoriesImages[i]} alt={cat} />
                  <p>{cat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-10">
              {t("services.coreServicesTitle")}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {t("services.servicesList", { returnObjects: true }).map((service, index) => {
                const Icon = servicesData[index];
                return (
                  <a
                    key={index}
                    href="https://wa.me/261388390349?text=Hello%20Zewa%20I%20am%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-left hover:bg-customGreen group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="mb-4 inline-flex p-4 rounded-full bg-customGreen/10 group-hover:bg-white text-customGreen transition-all duration-300">
                        <Icon className="text-4xl" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-white/90 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Value-Added Services */}
          <div className="bg-gray-900 text-white p-12 rounded-3xl text-left">
            <h3 className="text-3xl font-extrabold mb-8">
              {t("services.valueSolutionsTitle")}
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {t("services.valueSolutionsList", { returnObjects: true }).map((val, i) => {
                const icons = [FaRecycle, FaSyncAlt, FaCogs, FaShieldAlt, FaTruck, FaHandsHelping];
                const Icon = icons[i];
                return (
                  <li key={i} className="bg-gray-800 p-5 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-xl transition-shadow">
                    <Icon className="text-green-300 mt-1" size={50} />
                    <div className="text-gray-300">
                      <strong className="text-white">{val.title}:</strong> {val.desc}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Services;
