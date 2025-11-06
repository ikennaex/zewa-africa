import React from 'react'
import { logo } from '../../imports'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/">
              <img className="h-14 mb-5" src={logo} alt="Boomanage logo" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              Boomanage Properties is a trusted indigenous firm delivering expert services in real estate development, investment consulting, dynamic marketing, and business growth strategies.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>📍 Maryland Mall, Maryland, Lagos</li>
              <li>📧 info@boomanageproperties.net</li>
              <li>📞 +2348139096910, +2348123173582.</li> {/* Replace with actual number if needed */}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex gap-5">
              <a href="https://web.facebook.com/boomanageproperties/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={20} className="hover:text-blue-500 transition" />
              </a>
              <a href="https://www.instagram.com/boomanageproperties/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} className="hover:text-pink-500 transition" />
              </a>
              <a href="https://www.linkedin.com/in/boomanage-properties-2ba629138/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={20} className="hover:text-blue-300 transition" />
              </a>
              <a href="https://x.com/BoomanagePrope1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaXTwitter size={20} className="hover:text-blue-300 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {year} Boomanage Properties. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
