import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../imports";

const Navbar = () => {
  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Climate Change", link: "/aboutthecro" },
    { name: "News & Events", link: "/news" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Zewa Logo" className="h-10 md:h-14" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((menu, i) =>
            menu.link.includes("#") ? (
              <a
                key={i}
                href={menu.link}
                className="text-gray-700 text-[15px] font-medium hover:text-green-600 transition-all duration-200"
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="text-gray-700 text-[15px] font-medium hover:text-green-600 transition-all duration-200"
              >
                {menu.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer text-gray-700" onClick={() => setOpen(!open)}>
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
                className="text-gray-700 text-[16px] font-medium hover:text-green-600 transition-all duration-200 border-b pb-2"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </a>
            ) : (
              <Link
                key={i}
                to={menu.link}
                className="text-gray-700 text-[16px] font-medium hover:text-green-600 transition-all duration-200 border-b pb-2"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
