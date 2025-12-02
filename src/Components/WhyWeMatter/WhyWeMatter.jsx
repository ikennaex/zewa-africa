import React from "react";
import { Leaf, Shield, Briefcase, Globe, RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Shield, Leaf, Briefcase, Globe, RefreshCcw];

const WhyWeMatter = () => {
  const { t } = useTranslation();
  const reasons = t("whyWeMatter.reasons", { returnObjects: true });

  return (
    <section className="bg-gray-200 py-20 px-6 md:px-20 rounded-l-3xl">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t("whyWeMatter.heading")}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t("whyWeMatter.description")}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto place-items-center justify-items-center">
        {reasons.map((item, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="w-fit bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-green-700 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyWeMatter;
