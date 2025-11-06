import React, { useEffect, useState } from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Ceo from './Pages/Ceo/Ceo'
import ScrollToTop from './Components/ScrollToTop'
import Loader from './Components/Loader/Loader'

const App = () => {
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    // Option 1: Hide loader after a fixed time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // show loader for 2 seconds

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {loading ? (<Loader />) : (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about"  element = {<About />}/>
        <Route path = "/services"  element = {<Services />}/>
        {/* <Route path = "/advantages"  element = {<Advantages />}/> */}
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/aboutthecro"  element = {<Ceo />}/>
        <Route path = "*"  element={<p>Nothing to show</p>} />
      </Routes>
      <Footer />
    </div>
      )}
      </>
  )
}

export default App