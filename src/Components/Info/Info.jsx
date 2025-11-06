import React from "react";
import {
  Recycle,
  Leaf,
  Factory,
  Globe2,
  BookOpenCheck,
} from "lucide-react";

const infoData = [
  {
    icon: <Recycle size={38} className="text-customGreen" />,
    title: "Sustainable Waste Management",
    text: "At ZEWA Group, we promote a sustainable waste management model built on the principles of: Repair → Refurbish → Reuse → Recycle.",
  },
  {
    icon: <Leaf size={38} className="text-customGreen" />,
    title: "Protecting the Environment",
    text: "We are dedicated to protecting the environment through responsible waste management, reducing pollution, and fostering a circular economy for a cleaner, more sustainable future.",
  },
  {
    icon: <Factory size={38} className="text-customGreen" />,
    title: "Reducing Carbon Emissions",
    text: "ZEWA is committed to reducing carbon emissions through sustainable recycling, energy-efficient operations, and green initiatives, helping organizations achieve their low-carbon goals across Africa.",
  },
  {
    icon: <Globe2 size={38} className="text-customGreen" />,
    title: "Extended Producer Responsibility (EPR)",
    text: "We uphold Extended Producer Responsibility (EPR) by ensuring responsible collection, recycling, and management of electronic waste, helping organizations and partners meet environmental and regulatory standards.",
  },
  {
    icon: <BookOpenCheck size={38} className="text-customGreen" />,
    title: "Training & Awareness",
    text: "Through our expert waste management programs, we help organizations adopt sustainable operations by providing training and awareness that promote e-waste management and eco-friendly practices.",
  },
];

const Info = () => {
  return (
    <section className="relative bg-white text-white py-20 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-customGreen mb-4">
          Our Commitment to a Greener Future
        </h1>
        <p className="text-black text-lg leading-relaxed">
          ZEWA Group is driving Africa’s transition toward a cleaner, circular,
          and sustainable environment through innovation, education, and
          responsible waste management practices.
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="bg-customGreen border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-customGreen/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-customGreen/10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Info;
