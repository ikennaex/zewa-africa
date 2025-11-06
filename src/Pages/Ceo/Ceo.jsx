import React from "react";
import { ceo } from "../../imports";
import FadeIn from '../../Components/fadein';

const Ceo = () => {
  return (
    <section className="bg-customGreen text-white py-16">
      <FadeIn duration = {100} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src={ceo}
              alt="Victor Akinsipe - CRO"
              className="lg:w-96 w-80 h-auto rounded-full border-8 shadow-lg object-cover"
            />
          </div>

          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Victor Akinsipe
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              Chief Responsibilities Officer, Boomanage Properties
            </h3>
            <p className="text-base md:text-lg leading-relaxed tracking-wide">
              Victor Akinsipe serves as the Chief Responsibilities Officer (CRO) at Boomanage Properties, where he plays a pivotal role in aligning the company’s operations with its core values of integrity, innovation, and impact.
              <br /><br />
              A dynamic leader with a strong passion for responsible growth, Victor oversees key strategic initiatives, corporate governance, and stakeholder relations to ensure the company operates with excellence, transparency, and social responsibility.
              <br /><br />
              His work spans across managing partnerships, client success, community engagement, and internal culture development. Victor brings a people-first approach to leadership, fostering trust both within the organization and with clients.
              <br /><br />
              Under his guidance, Boomanage Properties has not only scaled its real estate services but also strengthened its reputation as a reliable, value-driven brand. His commitment to ethical leadership and sustainable business practices continues to shape the company’s vision of becoming a leading force in Nigeria’s property and business development space.
            </p>
          </div>
        </div>
      </div>
          </FadeIn>
    </section>
  );
};

export default Ceo;
