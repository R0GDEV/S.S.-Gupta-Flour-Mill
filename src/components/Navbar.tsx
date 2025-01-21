import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-3 py-2 md:py-3">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={Logo}
              alt="S.S. Gupta Flour Mill"
              className="w-10 h-10 md:w-14 md:h-14 transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <Link
            to="/"
            className={`text-lg sm:text-xl md:text-3xl font-extrabold tracking-wide ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-yellow-500 transition-all duration-300`}
          >
            S.S. Gupta Flour Mill
          </Link>
        </div>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex space-x-8 ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Our Products", path: "/products" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`group text-sm sm:text-base md:text-lg lg:text-xl ${
                isScrolled ? "text-gray-800" : "text-gray-300"
              } hover:text-yellow-500 font-medium relative transition-all duration-300`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-2xl ${
              isScrolled ? "text-gray-800" : "text-white"
            } focus:outline-none`}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full bg-white text-gray-800 shadow-md md:hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Products", path: "/products" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-sm sm:text-base font-semibold hover:text-yellow-500 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
