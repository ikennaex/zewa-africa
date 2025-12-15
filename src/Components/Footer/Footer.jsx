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
  YoutubeIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const locations = [
    {
      label: t("contact.hqLabel"),
      value: t("contact.hqAddress"),
    },
    {
      label: t("contact.botswana"),
      value: t("contact.botswanaAddress"),
    },
    {
      label: t("contact.madagascar"),
      value: t("contact.madagascarAddress"),
    },
    {
      label: t("contact.ghana"),
      value: t("contact.ghanaAddress"),
    },
  ];

  const socialLinks = [
    { href: "https://web.facebook.com/profile.php?id=61581901981506&sfnsn=wa&_rdc=1&_rdr#", label: "Facebook", Icon: Facebook },
    {
      href: "https://www.linkedin.com/company/zewa-zero-e-wastes-africa/",
      label: "LinkedIn",
      Icon: Linkedin,
    },
    { href: "https://www.instagram.com/zewa.261/", label: "Instagram", Icon: Instagram },
    // Add X and YouTube as needed; placeholders used if empty
    { href: "https://x.com/ZEWA_Group?t=P5-8vAnKPQGKc7bFl7ES8A&s=08", label: "X", Icon: FaXTwitter }, // replace Icon & href if you have X icon/link
    { href: "https://www.youtube.com/@zewagroupzeroe-wasteafrica", label: "YouTube", Icon: YoutubeIcon }, // replace Icon & href if you have YouTube icon/link
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 opacity-95" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-14 z-10">
        {/* Column 1 – Contact Info & Locations */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide mb-5">
            {t("footer.contact")}
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-customOrange/10 shrink-0">
                  <MapPin className="w-4 h-4 text-customOrange" />
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{loc.label}</div>
                  <div className="text-gray-300 text-sm">{loc.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 – Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide mb-5">
            {t("footer.get_in_touch")}
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-customOrange" />
              <a
                href={`mailto:${t("contact.enquiriesemail")}`}
                className="hover:text-customOrange transition-colors"
              >
                {t("contact.enquiriesemail")}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-customOrange" />
              <a
                href={`mailto:${t("contact.partnershipsemail")}`}
                className="hover:text-customOrange transition-colors"
              >
                {t("contact.partnershipsemail")}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-customOrange" />
              <a
                href={`tel:${t("contact.whatsapp")}`}
                className="hover:text-customOrange transition-colors"
              >
                {t("contact.whatsapp")}
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href || "#"}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <s.Icon className="w-4 h-4 text-gray-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 – Map & Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-wide mb-5">
            {t("footer.find_us")}
          </h3>

          <div className="rounded-xl overflow-hidden shadow-xl border border-customOrange/30 hover:border-customOrange transition-all">
            <iframe
              title="ZEWA Group Location"
              src="https://www.google.com/maps?q=4+Association+Road,+Governors+Road,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
{/* 
          <div className="mt-6 text-sm space-y-3">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-customOrange transition-colors"
            >
              <FileText className="w-4 h-4" /> {t("footer.terms")}
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-customOrange transition-colors"
            >
              <Cookie className="w-4 h-4" /> {t("footer.cookies")}
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-customOrange transition-colors"
            >
              <ShieldCheck className="w-4 h-4" /> {t("footer.privacy")}
            </a>
          </div> */}
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${t("contact.whatsapp").replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-2 hover:animate-slide-up transition-all duration-300 z-50"
        aria-label="WhatsApp"
      >
        <img className="lg:h-16 lg:w-16 h-10 " src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="" />
      </a>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 mt-16 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 z-10">
        <div className="flex items-center gap-6">
          <Link to ="/terms&conditions" className="flex items-center gap-2 hover:text-customOrange">
            <FileText className="w-4 h-4" /> {t("footer.terms")}
          </Link>
          <Link to="cookiepolicy" className="flex items-center gap-2 hover:text-customOrange">
            <Cookie className="w-4 h-4" /> {t("footer.cookies")}
          </Link>
          <Link to="datapolicy" className="flex items-center gap-2 hover:text-customOrange">
            <ShieldCheck className="w-4 h-4" /> {t("footer.privacy")}
          </Link>
        </div>

        <p className="mt-4 md:mt-0 text-gray-500 tracking-wide">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
