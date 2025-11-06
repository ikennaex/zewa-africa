import React from "react";
import { agent } from "../../imports";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import FadeIn from '../fadein';

const Appointment = () => {
  return (
    <FadeIn duration = {100} >
    <div className="bg-customGreen lg:px-32">
      <div className="container mx-auto py-32 px-4 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-7 bg-cyan-700 rounded-3xl px-6 py-8 lg:py-2">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              className="object-cover h-80 w-full max-w-xs rounded-2xl"
              src={agent}
              alt="Engineer"
            />
          </div>

          {/* Text + Button Section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl lg:text-3xl font-bold leading-snug">
              Need help? Book a call at a time that suits you
            </h1>
            <p className="text-sm lg:text-base leading-relaxed">
              Our experienced real estate professionals and investment
              consultants are dedicated to helping you make informed decisions
              on property acquisitions, developments, and strategic investments
            </p>

            <Link to={"/contact"}>
              <button className="flex flex-row items-center justify-center gap-3 bg-customYellow w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-customGreen hover:opacity-90 transition duration-300">
                Book Appointment
                <FaArrowRight size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </FadeIn>
  );
};

export default Appointment;
