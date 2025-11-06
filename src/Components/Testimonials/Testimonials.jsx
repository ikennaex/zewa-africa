import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      '“Boomanage Properties helped me secure my first investment property with ease. Their advisory team was patient, professional, and incredibly knowledgeable.”',
    author: '— Linda O., Lekki'
  },
  {
    quote:
      '“I had no idea where to start with real estate investment until I met Boomanage. They broke down the process and guided me step-by-step. Now I own 2 properties.”',
    author: '— Taiwo T., Abuja'
  },
  {
    quote:
      '“Their team helped me negotiate a great deal on a commercial space. It was a seamless experience from property sourcing to documentation.”',
    author: '— Adewale R., Ikeja'
  },
  {
    quote:
      '“With Boomanage Properties, I joined a real estate investment club that’s already showing returns. Their network and experience are unmatched.”',
    author: '— Johnson P., Victoria Island'
  }
];


const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } }
  }

  return (
    <div className='bg-white px-7 py-14 bg-orange-50'>
      <div className='container mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-bold text-black mb-10'>Our Clients Say It Best</h2>

        <div className='relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='absolute inset-0 flex flex-col justify-center items-center text-black px-6'
            >
              <p className='text-lg sm:text-xl mb-4 italic leading-relaxed'>
                {testimonials[index].quote}
              </p>
              <p className='text-customYellow font-semibold'>{testimonials[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Testimonials