import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../imports";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: "about", link: "/about" },
    { key: "services", link: "/services" },
    { key: "climate", link: "/climate-change" },
    { key: "certifications", link: "/certification" },
    { key: "news", link: "/news" },
    { key: "contact", link: "/contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full bg-[#137d7b] backdrop-blur-sm fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 md:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((menu) => (
            <Link
              key={menu.key}
              to={menu.link}
              className="text-white text-[15px] font-medium transition"
            >
              {t(`menu.${menu.key}`)}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="text-white font-semibold border border-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          >
            {i18n.language === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose size={32} /> : <IoIosMenu size={32} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden flex flex-col bg-white border-t border-gray-200 shadow-md px-6 py-5 space-y-4">
          {menuItems.map((menu) => (
            <Link
              key={menu.key}
              to={menu.link}
              className="text-gray-700 text-[16px] font-medium hover:text-green-600 transition border-b pb-2"
              onClick={() => setOpen(false)}
            >
              {t(`menu.${menu.key}`)}
            </Link>
          ))}

          {/* Mobile language toggle */}
          <button
            onClick={toggleLanguage}
            className="text-gray-700 font-semibold border border-gray-400 px-3 py-1 rounded-lg hover:bg-gray-200 transition mt-2"
          >
            {i18n.language === "en" ? "FR" : "EN"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
