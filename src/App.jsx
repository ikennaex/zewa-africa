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
import ServicesPage from './Pages/Services/Services'
import ClimatePage from './Pages/ClimatePage/ClimatePage'
import ContactPage from './Pages/Contact/Contact'
import News from './Pages/News/News'
import Certifications from './Components/Certifications/Certifications'
import "./i18n";
import TermsandConditions from './Pages/Terms&Conditions/TermsandConditions'
import CookiePolicy from './Pages/CookiePolicy/CookiePolicy'
import DataPolicy from './Pages/DataPolicy/DataPolicy'


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
        <Route path = "/services"  element = {<ServicesPage />}/>
        <Route path = "/climate-change"  element = {<ClimatePage />}/>
        <Route path = "/contact"  element = {<ContactPage />}/>
        <Route path = "/news"  element = {<News />}/>
        <Route path = "/aboutthecro"  element = {<Ceo />}/>
        <Route path = "/certification"  element = {<Certifications />}/>
        <Route path = "/terms&conditions"  element = {<TermsandConditions />}/>
        <Route path = "/cookiepolicy"  element = {<CookiePolicy />}/>
        <Route path = "datapolicy"  element = {<DataPolicy />}/>
        <Route path = "*"  element={<p>Nothing to show</p>} />
      </Routes>
      <Footer />
    </div>
      )}
      </>
  )
}

export default App