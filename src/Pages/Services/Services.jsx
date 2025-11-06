import React from 'react';
import {
  img1, img10, img2, img3, img4, img5, img6, img7, img8, img9
} from '../../imports';
import FadeIn from '../../Components/fadein';

const serviceList = [
  {
    name: "Brokerage & Property Sourcing",
    desc: "We help clients find high-value residential and commercial properties, leveraging our vast network and market expertise to deliver optimal deals with strong growth potential.",
    img: img1
  },
  {
    name: "Deal Negotiation",
    desc: "Our expert negotiators secure favorable terms for clients in buying, selling, or leasing properties—maximizing ROI and minimizing risks.",
    img: img2
  },
  {
    name: "Real Estate Advisory & Development",
    desc: "From feasibility analysis to full-scale development strategy, we offer end-to-end consulting services for real estate projects across all asset classes.",
    img: img3
  },
  {
    name: "Business Initiation",
    desc: "We support startups and new ventures by providing business structuring, market-entry strategies, and operational blueprints for success in the real estate sector.",
    img: img4
  },
  {
    name: "Business Development Advisory",
    desc: "Boomanage helps businesses scale through structured growth plans, opportunity mapping, stakeholder engagement, and market expansion strategies.",
    img: img5
  },
  {
    name: "Investment Analysis",
    desc: "We provide deep-dive analysis of real estate investment opportunities, considering cash flow, market trends, CAP rates, and long-term appreciation potential.",
    img: img6
  },
  {
    name: "Mortgage Loan Advisory",
    desc: "Our team guides clients through financing processes, connecting them with top mortgage providers and ensuring terms that align with their financial goals.",
    img: img7
  },
  {
    name: "Construction & Renovations",
    desc: "From ground-up construction to premium renovations, we manage building projects with quality assurance, cost efficiency, and regulatory compliance.",
    img: img8
  },
  {
    name: "Real Estate Investment Club",
    desc: "Join our exclusive club for curated investment opportunities, group-buy deals, and access to insider market intelligence and expert insights.",
    img: img9
  },
  {
    name: "Property Management",
    desc: "We offer end-to-end property management services including tenant acquisition, rent collection, maintenance, inspections, and reporting.",
    img: img10
  }
];

const Services = () => {
  return (
    <section className="bg-customGreen py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-white">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Our Services at <span className="text-customYellow">Boomanage Properties</span>
          </h2>
          <p className="text-lg opacity-80">
            Discover our wide range of real estate and business development services tailored to empower your investments and ideas.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => (
            <FadeIn duration = {100} >
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 p-6 rounded-3xl flex flex-col justify-between h-full"
            >
              <img
                src={service.img}
                alt={service.name}
                className="object-cover w-full h-48 rounded-2xl mb-5 shadow"
              />
              <div>
                <h3 className="text-xl font-bold text-customYellow mb-2">{service.name}</h3>
                <p className="text-sm leading-relaxed text-gray-100">{service.desc}</p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
