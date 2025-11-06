import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Recycle,
  Award,
} from "lucide-react"; // Lucide icons (clean + eco feel)

const stats = [
  {
    number: 100,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: 50,
    suffix: "+",
    label: "Projects Delivered",
    icon: Recycle,
  },
  {
    number: 10,
    suffix: "+",
    label: "Years of Experience",
    icon: Award,
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
      className="bg-gradient-to-r from-[#113225] to-customGreen text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Why <span>ZEWA</span> Stands Out
        </h1>
        <p className="text-gray-200 mt-2 text-lg">
          Trusted by clients, driven by innovation, and powered by sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-2xl shadow-lg transform hover:scale-105 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-4 bg-customYellow/20 rounded-full">
                  <Icon className="w-10 h-10 text-customYellow" />
                </div>
                <h3 className="text-5xl font-extrabold text-customYellow">
                  {inView ? (
                    <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-lg font-medium text-gray-100">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Counter;
