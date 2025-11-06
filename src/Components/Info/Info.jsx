import React from "react";
import { carbonEmit, epr, protectEnv, training, wasteManage } from "../../imports";

const infoData = [
  {
    video: wasteManage,
    title: "Sustainable Waste Management",
    text: "At ZEWA Group, we promote a sustainable waste management model built on the principles of: Repair → Refurbish → Reuse → Recycle.",
  },
  {
    video: protectEnv,
    title: "Protecting the Environment",
    text: "We are dedicated to protecting the environment through responsible waste management, reducing pollution, and fostering a circular economy for a cleaner, more sustainable future.",
  },
  {
    video: carbonEmit,
    title: "Reducing Carbon Emissions",
    text: "ZEWA is committed to reducing carbon emissions through sustainable recycling, energy-efficient operations, and green initiatives, helping organizations achieve their low-carbon goals across Africa.",
  },
  {
    video: epr,
    title: "Extended Producer Responsibility (EPR)",
    text: "We uphold Extended Producer Responsibility (EPR) by ensuring responsible collection, recycling, and management of electronic waste, helping organizations and partners meet environmental and regulatory standards.",
  },
  {
    video: training,
    title: "Training & Awareness",
    text: "Through our expert waste management programs, we help organizations adopt sustainable operations by providing training and awareness that promote e-waste management and eco-friendly practices.",
  },
];

const Info = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl  font-extrabold text-customGreen mb-4">
          Our Commitment to a Greener Future
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
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
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full overflow-hidden rounded-xl mb-5 group">
                <video
                  src={item.video}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-customGreen">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-customGreen/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-customGreen/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Info;
