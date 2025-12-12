import React from 'react';
import { useTranslation } from 'react-i18next';
import Compliance from '../Compliance/Compliance';

const certificationsData = [
  { key: 'iso9001', image: '/images/iso9001.jpg' },
  { key: 'iso14001', image: '/images/iso14001.jpg' },
  { key: 'ohsas18001', image: '/images/ukas.jpg' },
  { key: 'ceWasa', image: '/images/e-Wasa.jpg' },
  { key: 'ceCertus', image: '/images/certus.jpg' },
  { key: 'ceGoGreen', image: '/images/gogreen.jpg' },
  { key: 'one', image: '/images/one.jpg' },
  { key: 'nesrea', image: '/images/nesrea.png' },
  { key: 'epa', image: '/images/epa.jpg' },
  { key: 'lasepa', image: '/images/lasepa.jpg' },
  { key: 'wee', image: '/images/wee.jpg' },
  { key: 'baselConvention', image: '/images/baselConvention.jpg' },
];

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-24 bg-white mx-auto px-6 md:px-12 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {t('certifications.title')}
        </h1>
        <p className="text-gray-600 mt-2">
          {t('certifications.description')}
        </p>
      </div>

      {/* Certification Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {certificationsData.map((cert, index) => (
          <div key={index} className="flex flex-col justify-center">
            <div className="bg-white border h-full rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
              <img
                src={cert.image}
                alt={t(`certifications.items.${cert.key}`)}
                className="h-24 w-auto object-contain mb-4"
              />
              <h3 className="text-md font-semibold text-gray-800 text-center">
                {t(`certifications.items.${cert.key}`)}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Section */}
      <div>
        <Compliance />
      </div>
    </div>
  );
};

export default Certifications;
