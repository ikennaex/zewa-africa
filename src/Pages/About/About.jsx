import React from 'react'
import About from '../../Components/About/About'
import { zewawarehouse } from '../../imports'

const AboutPage = () => {
  return (
    <div className='pt-20'>
            {/* Full-width hero image */}
      <div className="w-full">
        <img
          src={zewawarehouse}
          alt=""
          className="w-full h-[20vh] md:h-[40vh] object-cover"
        />
      </div>
      <About />
    </div>
  )
}

export default AboutPage