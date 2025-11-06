import React from "react";
import { wasteManage } from "../../imports";
// import benefit1 from "../assets/benefit1.jpg"; // Convenience
// import benefit2 from "../assets/benefit2.jpg"; // Compliance
// import benefit3 from "../assets/benefit3.jpg"; // CSR
// import benefit4 from "../assets/benefit4.jpg"; // Certification

const Benefits = () => {
  const benefits = [
    {
      image: "https://img.freepik.com/free-photo/african-american-woman-recycling-better-environment_23-2148999419.jpg?t=st=1762445048~exp=1762448648~hmac=2cc5a0933e759f10d3527bb3a5ac673d33a0085103daa4aefaa1f4bfd18f7838&w=1480",
      title: "Convenience",
      description:
        "No need to deliver or invest in an in-house recycling system. ZEWA handles collection and processing for you.",
    },
    {
      image: "https://img.freepik.com/free-photo/people-taking-community-action_23-2149232510.jpg?t=st=1762445164~exp=1762448764~hmac=9ba7a823cd90dfdb8153c883aaf59d3c762246ffb9059d060344e297a508ac07&w=1480",
      title: "Compliance",
      description:
        "Ensures full adherence to local and international environmental regulations.",
    },
    {
      image: "https://img.freepik.com/free-vector/organic-flat-csr-concept_52683-60454.jpg?t=st=1762445237~exp=1762448837~hmac=e41d322372680c903111064e41a1f4d31b3bb5c8ea9af7afa0d2eddd9adfb9b7&w=1480",
      title: "Corporate Social Responsibility (CSR)",
      description:
        "Demonstrates your company’s commitment to sustainability and environmental protection.",
    },
    {
      image: "https://img.freepik.com/free-vector/e-waste-reduction-abstract-concept_335657-3200.jpg?t=st=1762445338~exp=1762448938~hmac=5e1b309206fe7c3990b97f0501c221ee7b7c172ec13c04d288742b9047ef1031&w=1480",
      title: "Traceability & Certification",
      description:
        "Receive certified documentation as proof of responsible and transparent e-waste management.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          What ZEWA Clients & Partners Benefit From
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-left overflow-hidden"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
