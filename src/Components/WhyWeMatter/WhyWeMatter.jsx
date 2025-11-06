import React from "react";
import { Leaf, Shield, Briefcase, Globe, RefreshCcw } from "lucide-react";

const WhyWeMatter = () => {
  const reasons = [
    {
      icon: <Shield className="text-green-700 w-8 h-8" />,
      title: "Environmental Protection",
      desc: "We prevent contamination and pollution by ensuring e-waste is disposed of safely and responsibly.",
    },
    {
      icon: <Leaf className="text-green-700 w-8 h-8" />,
      title: "Human Health & Wellbeing",
      desc: "We support safer communities through responsible recycling practices that protect lives and the environment.",
    },
    {
      icon: <Briefcase className="text-green-700 w-8 h-8" />,
      title: "Green Job Creation",
      desc: "Our operations create sustainable employment opportunities and promote economic independence.",
    },
    {
      icon: <Globe className="text-green-700 w-8 h-8" />,
      title: "Climate Action & SDGs",
      desc: "We actively contribute to Sustainable Development Goals, especially SDG 12 on responsible consumption and production.",
    },
    {
      icon: <RefreshCcw className="text-green-700 w-8 h-8" />,
      title: "Carbon Footprint Reduction",
      desc: "We encourage repairs, refurbishing, and reuse before recycling to minimize environmental impact.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
          Why Do We Matter?
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Electronic waste is one of the fastest-growing waste streams globally. Across Africa,
          where informal disposal is common, ZEWA’s presence makes a vital difference.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWeMatter;
