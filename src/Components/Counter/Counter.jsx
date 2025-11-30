import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Handshake, Recycle, MapPin, CloudHail } from "lucide-react";

const stats = [
  {
    number: 177201,
    suffix: "+",
    label: "Kg of E-waste Diverted From Landfill",
    icon: Recycle,
  },
  {
    number: 163,
    suffix: "+",
    label: "Happy Clients & Partners",
    icon: Handshake,
  },
  {
    number: 34,
    suffix: "+",
    label: "Projects Executed in 15 African Countries",
    icon: MapPin,
  },
  {
    number: 0.25,
    decimals: 2,
    label: "Tons of CO2 Emissions Reduced",
    icon: CloudHail,
  },
  {
    number: 1.5,
    decimals: 1,
    label: "Metric Tons of E-waste Processed Weekly",
    icon: Recycle,
  },
];

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-[#113225] to-customGreen text-white py-16 px-4 sm:py-20 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
          Our Impact and Capacity
        </h1>
        <p className="text-gray-200 mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Trusted by clients, driven by innovation, and powered by sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="p-3 bg-[#54F7DB]/20 rounded-full">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-customGreen" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                  {inView ? (
                    <CountUp
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix || ""}
                      decimals={stat.decimals || 0}
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-medium text-black text-center">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Counter;
