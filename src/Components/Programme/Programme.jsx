import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import FadeIn from '../fadein';

const Programme = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <FadeIn>
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
              Electronics Buy-Back Programme
            </h1>
            <p className="text-customGreen font-semibold uppercase tracking-widest mb-4">
              Maximize Value from Used Technology
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Zewa Group is a leading provider of electronics recovery, repair, and remarketing solutions, supporting clients in maximizing value from used technology assets across the region. Through our Electronics Buy-Back and Remarketing Program, we help organizations recover optimal returns while ensuring full data security, environmental compliance, and responsible recycling practices. Our dedicated team manages equipment collection, testing, refurbishment, and resale through established nationwide channels to guarantee the highest possible residual value...
            </p>
            {/* Read More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 inline-flex items-center gap-2 text-customGreen font-semibold hover:text-white hover:bg-customGreen border border-customGreen px-6 py-2 rounded-full transition-all duration-300"
            >
              {showMore ? "Show Less" : "More"}
              {showMore ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {/* Expanded Content */}
          {showMore && (
            <div className="bg-white p-10 rounded-3xl shadow-md border border-gray-100 space-y-8">
              {/* Remarketing Profit Share Model */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Remarketing – Profit Share Model
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In the profit-share service, clients submit an inventory or asset list outlining equipment specifications, quantities, and locations. Zewa Group provides an upfront forecast of resale values before equipment is transported to our processing facility. Upon arrival, devices undergo key technical assessments including electrical safety tests, full functionality checks, certified data wiping, and cosmetic grading. Once processed, equipment is sold through Zewa Group’s trusted remarketing platforms, and clients receive monthly reports detailing achieved resale values and shared profits.
                </p>
              </div>

              {/* Buy-Back Model */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Buy-Back Model
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our buy-back solution is designed to deliver market-leading returns while upholding strict data-protection standards and environmental regulations. Following receipt of an equipment list, Zewa Group issues a pre-agreed purchase quotation per item. After arrival, equipment is processed through our standard technical workflow—electrical safety testing, functionality evaluation, secure data deletion, and cosmetic grading—to confirm the final purchase value. Qualifying devices are then acquired by Zewa Group and remarketed through our established sales channels. Clients receive a detailed condition report and final purchase price for each item, enabling accurate budgeting and planning over time.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
};

export default Programme;
