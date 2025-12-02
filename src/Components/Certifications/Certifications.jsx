import React from 'react'
import Compliance from '../Compliance/Compliance'

const certificationsData = [
  {
    name: "ISO 9001",
    image: "/images/iso9001.jpg", // replace with actual path
  },
  {
    name: "ISO 14001",
    image: "/images/iso14001.jpg",
  },
  {
    name: "OHSAS 18001",
    image: "/images/ukas.jpg",
  },
  {
    name: "CE Certified",
    image: "/images/e-Wasa.jpg",
  },
  {
    name: "CE Certified",
    image: "/images/certus.jpg",
  },
  {
    name: "CE Certified",
    image: "/images/gogreen.jpg",
  },
]

const Certifications = () => {
  return (
    <div className="mt-24 bg-white mx-auto px-6 md:px-12 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Certifications</h1>
        <p className="text-gray-600 mt-2">Our recognized certifications for quality and compliance</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {certificationsData.map((cert, index) => (
            <div className='flex flex-col justify-cente'>
          <div
            key={index}
            className="bg-gray-50 border rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img src={cert.image} alt={cert.name} className="h-24 w-auto object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 text-center">{cert.name}</h3>
          </div>
          </div>
        ))}
      </div>

      <div>
        <Compliance />
      </div>
    </div>
  )
}

export default Certifications
