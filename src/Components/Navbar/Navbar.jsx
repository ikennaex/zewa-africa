import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../imports";

const Navbar = () => {
  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Climate Change", link: "/climate-change" },
    { name: "Certifications", link: "/certification" },
    { name: "News & Events", link: "/news" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");

  // Load Google Translate once
  useEffect(() => {
    if (window.googleTranslateElementInit) return;

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,fr", layout: 0 },
        "google_translate_element"
      );
    };

    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) {
      setTimeout(toggleLanguage, 200); // retry if not ready
      return;
    }
    const newLang = lang === "en" ? "fr" : "en";
    select.value = newLang;
    select.dispatchEvent(new Event("change"));
    setLang(newLang);
  };

  return (
    <nav className="w-full bg-customGreen/80 backdrop-blur-sm fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 md:h-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((menu, i) =>
            menu.link.includes("#") ? (
              <a
                key={i}
                href={menu.link}
                className="text-white text-[15px] font-medium hover:text-green-600 transition"
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="text-white text-[15px] font-medium hover:text-green-600 transition"
              >
                {menu.name}
              </Link>
            )
          )}

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="text-white font-semibold border border-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          >
            {lang === "en" ? "FR" : "EN"}
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
          {menuItems.map((menu, i) =>
            menu.link.includes("#") ? (
              <a
                key={i}
                href={menu.link}
                className="text-gray-700 text-[16px] font-medium hover:text-green-600 transition border-b pb-2"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="text-gray-700 text-[16px] font-medium hover:text-green-600 transition border-b pb-2"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </Link>
            )
          )}

          {/* Mobile language toggle */}
          <button
            onClick={toggleLanguage}
            className="text-gray-700 font-semibold border border-gray-400 px-3 py-1 rounded-lg hover:bg-gray-200 transition mt-2"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
      )}

      {/* Google Translate element (off-screen) */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          left: "-9999px",
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
