import React from "react";
import { useTranslation } from "react-i18next";
import { carbonEmit, epr, protectEnv, training, wasteManage } from "../../imports";

const infoData = [
  { video: wasteManage, key: 0 },
  { video: "/videos/trees.mp4", key: 1 },
  { video: carbonEmit, key: 2 },
  { video: epr, key: 3 },
  { video: training, key: 4 },
  { video: training, key: 5 },
];

// Expandable text component
const ExpandableText = ({ text, moreText }) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="text-gray-600 text-sm leading-relaxed ">
      <p>{text}</p>

      {!showMore && moreText && (
        <p
          onClick={() => setShowMore(true)}
          className="text-customGreen inline font-medium mt-2"
        >
          ...More
        </p>
      )}

      {showMore && <p className="mt-2">{moreText}</p>}
    </div>
  );
};

const Info = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-customGreen mb-4">
          {t("info.heading")}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t("info.subheading")}
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {infoData.map((item) => (
          <div
            key={item.key}
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
                {t(`info.cards.${item.key}.title`)}
              </h3>

              <ExpandableText
                text={t(`info.cards.${item.key}.text`)}
                moreText={t(`info.cards.${item.key}.more`)}
              />
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
