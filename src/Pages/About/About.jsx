import React from "react";
import { img12 } from "../../imports";
import {
  BuildingOfficeIcon,
  // HandshakeIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
  UsersIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const services = [
  { icon: <BuildingOfficeIcon className="w-5 h-5 text-gold-400" />, text: "Brokerage & Property Sourcing" },
  // { icon: <HandshakeIcon className="w-5 h-5 text-gold-400" />, text: "Deal Negotiation" },
  { icon: <LightBulbIcon className="w-5 h-5 text-gold-400" />, text: "Real Estate Advisory & Development" },
  { icon: <PresentationChartBarIcon className="w-5 h-5 text-gold-400" />, text: "Business Initiation" },
  { icon: <ClipboardDocumentListIcon className="w-5 h-5 text-gold-400" />, text: "Business Development Advisory" },
  { icon: <CurrencyDollarIcon className="w-5 h-5 text-gold-400" />, text: "Investment Analysis" },
  { icon: <CurrencyDollarIcon className="w-5 h-5 text-gold-400" />, text: "Mortgage Loan Advisory" },
  { icon: <WrenchScrewdriverIcon className="w-5 h-5 text-gold-400" />, text: "Construction & Renovations" },
  { icon: <UsersIcon className="w-5 h-5 text-gold-400" />, text: "Real Estate Investment Club" },
  { icon: <HomeModernIcon className="w-5 h-5 text-gold-400" />, text: "Property Management" },
];

const About = () => {
  return (
    <div className="bg-customGreen py-14">
      <div className="container mx-auto px-4 fade-in-bottom">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
              src={img12}
              alt="LumiGrid Panel"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Who are we</h2>

            <p className="text-base leading-relaxed mb-6">
              Boomanage Properties is an indigenous Real Estate and Business Development firm with expertise in Real Estate Development, Dynamic Marketing & Brokerage, Business Initiation & Business Development Advisory, Real Estate Trainings, Management, Investment and Mortgage Advisory and Consultancy.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <MapPinIcon className="w-5 h-5 text-gold-400" />
              <p className="text-sm">Currently located at the Maryland Mall, Maryland, Lagos.</p>
            </div>

            <p className="text-base mb-4">
              We provide professional services that seek to create enduring value for our diverse clientele.
            </p>

            <p className="text-base mb-6">
              If you would like to purchase your property or have a property you would like to sell, kindly put a call through to us today.
            </p>

            <h3 className="text-2xl font-semibold text-gold-400 mb-4">Our Services:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  {service.icon}
                  {service.text}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-gold-400" />
              <p className="text-sm">
                +2348139096910; +2348123173582
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
