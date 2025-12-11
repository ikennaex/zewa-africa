import React from "react";
import { FaGlobeAfrica, FaRecycle, FaHandshake, FaLeaf } from "react-icons/fa";
import { ShieldCheck, Globe2, InfoIcon } from "lucide-react";
import { zewastaff } from "../../imports";
import FadeIn from "../fadein";
import AfricaMap from "../Map/AfricaMap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const complianceItems = [
    {
      icon: <ShieldCheck size={42} className="text-customGreen" />,
      key: "basel",
    },
    {
      icon: <FaHandshake size={40} className="text-customGreen" />,
      key: "partnerships",
    },
    {
      icon: <Globe2 size={40} className="text-customGreen" />,
      key: "standards",
    },
    { icon: <FaLeaf size={40} className="text-customGreen" />, key: "iso" },
    {
      icon: <FaRecycle size={40} className="text-customGreen" />,
      key: "circular",
    },
  ];

  return (
    <FadeIn duration={120}>
      <section className="py-24  bg-white text-gray-800">
        {/* INTRO */}
        <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/staff.jpg"
              alt="ZEWA Waste Management"
              className="rounded-3xl shadow-xl w-full object-cover h-[420px] lg:h-[520px] border border-gray-100"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-customGreen">
                {t("about.title")}
              </h1>
              <div className="mt-3 h-1.5 w-32 bg-customGreen rounded-md"></div>
            </div>

            <p className="text-lg font-bold lg:text-lg leading-relaxed text-gray-700">
              {t("about.historyTitle")}
            </p>

            <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              {t("about.historyText1")}
            </p>

            <p className="text-lg font-bold lg:text-lg leading-relaxed text-gray-700">
              {t("about.title")}
            </p>

            <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              {t("about.historyText2")}{" "}
              <Link to="/about" className="transition-colors text-customGreen">
                {t("about.learnMore")}
              </Link>
            </p>

            {/* <p className="text-base lg:text-lg leading-relaxed text-gray-700">
              {t("about.mission")}
            </p> */}
          </div>
        </div>

        {/* COMPLIANCE */}
        <div className="max-w-7xl mx-auto mt-28 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-customGreen">
            {t("about.complianceTitle")}
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            {t("about.complianceText")}
          </p>

          {/* Flex wrapper to center boxes */}
          <div className="flex flex-wrap justify-center gap-10 mt-14">
            {complianceItems.map((item, index) => (
              <a
                href="mailto:recyclage@zewa.africa"
                key={index}
                className="flex"
              >
                <div className="group bg-white border border-customGreen/15 rounded-2xl shadow-md p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full w-72">
                  <div className="mx-auto bg-customGreen/10 p-5 rounded-full w-fit group-hover:bg-customGreen/20 transition-colors duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold mt-6 text-customGreen">
                    {t(`complianceItems.${item.key}.title`)}
                  </h3>

                  <p className="text-gray-700 text-sm mt-3 leading-relaxed flex-grow">
                    {t(`complianceItems.${item.key}.text`)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* MAP */}
        <div className="max-w-7xl mx-auto mt-28 text-center">
          <FaGlobeAfrica size={56} className="text-customGreen mx-auto" />
          <h1 className="text-3xl lg:text-4xl font-bold text-customGreen mt-4">
            {t("about.presenceTitle")}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            {t("about.presenceText")}
          </p>
        </div>

        <div className="">
          <AfricaMap />
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
