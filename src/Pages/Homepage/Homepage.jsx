import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Promise from '../../Components/Promise/Promise'
import Appointment from '../../Components/Appointment/Appointment'
import Counter from '../../Components/Counter/Counter'
import Info from '../../Components/Info/Info'
import OperationsPage from '../../Components/Operation/Operation'
import Benefits from '../../Components/Benefits/Benefits'
import Compliance from '../../Components/Compliance/Compliance'
import Sustainability from '../../Components/Sustainability/Sustainability'
import Companies from '../../Components/Companies/Companies'
import WhyWeMatter from '../../Components/WhyWeMatter/WhyWeMatter'
import Climate from '../../Components/Climate/Climate'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <Counter />
        <Info />
        <About />
        <Services />
        <OperationsPage />
        <Benefits />
        <Compliance />
        <Sustainability />
        <Companies />
        <WhyWeMatter />
        <Climate />
    </div>
  )
}

export default Homepage