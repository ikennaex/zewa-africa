import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Cookie,
  FileText,
  ShieldCheck,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 opacity-95" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-14 z-10">
        {/* Column 1 – Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide mb-5">
            Contact
          </h3>
          <ul className="space-y-4 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-customOrange mt-1" />
              <span>
                <strong>Administrative HQ:</strong> 4 Association Road,
                Governors Road, Lagos, Nigeria.
              </span>
            </li>
          </ul>
        </div>

        {/* Column 2 – Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide mb-5">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-customOrange" />
              <a
                href="mailto:Recyclage@zewa.africa"
                className="hover:text-customOrange transition-colors"
              >
                Recyclage@zewa.africa
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-customOrange" />
              <a
                href="https://wa.me/261388390349"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customOrange transition-colors"
              >
                WhatsApp: +261 38 36 965 27
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://web.facebook.com/Ewrpm?rdid=rGGN7rHA9NPd0xWe&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1ChCCtGkQk%2F%3F_rdc%3D1%26_rdr#"
              className="hover:text-customOrange transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/zewa-zero-e-wastes-africa/"
              className="hover:text-customOrange transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/zewa.261?utm_source=qr&igsh=cjR0NnR5Zzl0eXpj"
              className="hover:text-customOrange transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 3 – Map */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide mb-5">
            Find Us on the Map
          </h3>
          <div className="rounded-xl overflow-hidden shadow-xl border border-customOrange/40 hover:border-customOrange transition-all">
            <iframe
              title="ZEWA Group Location"
              src="https://www.google.com/maps?q=4+Association+Road,+Governors+Road,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+261383696527"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        {" "}
        <FaWhatsapp className="w-6 h-6" />{" "}
      </a>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 mt-16 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 z-10">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-customOrange"
          >
            <FileText className="w-4 h-4" /> Terms & Conditions
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-customOrange"
          >
            <Cookie className="w-4 h-4" /> Cookies Policy
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-customOrange"
          >
            <ShieldCheck className="w-4 h-4" /> Data Privacy
          </a>
        </div>

        <p className="mt-4 md:mt-0 text-gray-500 tracking-wide">
          © {new Date().getFullYear()} ZEWA Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
