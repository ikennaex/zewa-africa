import React from 'react'
import Services from '../../Components/Services/Services'
import { zewawarehouse } from '../../imports'

const ServicesPage = () => {
  return (
    <div className="pt-20">
      
      {/* Full-width hero image */}
      <div className="w-full">
        <img
          src={zewawarehouse}
          alt=""
          className="w-full h-[20vh] md:h-[40vh] object-cover"
        />
      </div>

      <Services />
    </div>
  )
}

export default ServicesPage
