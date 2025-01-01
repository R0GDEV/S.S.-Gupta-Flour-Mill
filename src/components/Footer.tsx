import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { companyDetails } from "../assets/companyData"; // Import company data

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">S.S. Gupta Flour Mill</h2>
            <p className="text-sm">
              {companyDetails.description ||
                "Providing premium quality wheat, multigrain, and other flours for households and industries, ensuring freshness and nutritional value."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Products", path: "/products" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-green-600 transition font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <span className="block text-gray-400">Phone: </span>
                <a
                  href={`tel:${companyDetails.phoneNumber}`}
                  className="text-gray-400 hover:text-green-600 transition"
                >
                  {companyDetails.phoneNumber || "+1 234 567 890"}
                </a>
              </li>
              <li>
                <span className="block text-gray-400">Email: </span>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="text-gray-400 hover:text-green-600 transition"
                >
                  {companyDetails.email || "No Email Found"}
                </a>
              </li>
              <li>
                <span className="block text-gray-400">Address: </span>
                <p className="text-gray-400">
                  {companyDetails.address || "456 Agro Industrial Road, City, Country"}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-center space-x-8">
          <a
            href={companyDetails.socialLinks?.facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition text-2xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={companyDetails.socialLinks?.twitter || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href={companyDetails.socialLinks?.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={companyDetails.socialLinks?.instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} S.S. Gupta Flour Mills. All rights reserved.
        </div>

        {/* Credit Section */}
        <div className="mt-4 text-center text-xs text-gray-500">
          Website designed and developed by{" "}
          <a
            href="https://r0gdev.github.io/R0GDEV/"
            className="text-green-600 hover:underline"
          >
            Om Sharma
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
