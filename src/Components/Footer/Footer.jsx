import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Globe,
  FileText,
  ShieldCheck,
  Cookie,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">

        {/* Column 1 – Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-400 mt-1" />
              <span>
                <strong>Administrative HQ:</strong> 4 Association Road, Governors
                Road, Lagos, Nigeria.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-400 mt-1" />
              <span>
                <strong>Regional Office Madagascar:</strong> Bat II Afriport
                Warehouse, Forello Tanjumbato, Antananarivo.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-400 mt-1" />
              <span>
                <strong>Regional Office Botswana:</strong> Plot 14361, Gaborone
                West, Botswana.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-green-400 mt-1" />
              <span>
                <strong>Regional Offices:</strong> Ghana, Mozambique, Tanzania,
                Morocco.
              </span>
            </li>
          </ul>
        </div>

        {/* Column 2 – Communication */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-400" />
              <a
                href="mailto:Recyclage@zewa.africa"
                className="hover:text-green-400 transition"
              >
                Recyclage@zewa.africa
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-green-400" />
              <a
                href="mailto:Operations@zewa.africa"
                className="hover:text-green-400 transition"
              >
                Operations@zewa.africa
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a
                href="https://wa.me/261388390349"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                WhatsApp: +261 388 390 349
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a
              href="#"
              className="hover:text-green-400 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 3 – Google Map Embed */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Find Us on the Map
          </h3>
          <div className="rounded-xl overflow-hidden shadow-lg border border-green-800">
            <iframe
              title="ZEWA Group Location"
              src="https://www.google.com/maps?q=4+Association+Road,+Governors+Road,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="220"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-900 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <FileText className="w-4 h-4" /> Terms & Conditions
          </a>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <Cookie className="w-4 h-4" /> Cookies Policy
          </a>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <ShieldCheck className="w-4 h-4" /> Data Privacy
          </a>
        </div>
        <p className="mt-4 md:mt-0 text-gray-500">
          © {new Date().getFullYear()} ZEWA Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
