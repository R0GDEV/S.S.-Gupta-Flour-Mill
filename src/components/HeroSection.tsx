import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/Designer.jpeg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40"></div>

      {/* Content Positioned with Improved Design */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start pl-8 sm:pl-16 md:pl-24 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-md mb-6">
          Quality Flour <br /> for Every Need
        </h1>
        <p className="text-lg sm:text-xl text-white/90 font-light mb-8 drop-shadow-sm">
          Delivering premium flour and customized milling solutions for businesses and households alike.
        </p>
        <div className="flex space-x-4">
          <Link to="/products">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full shadow-md transform transition-all hover:scale-105">
              Explore Products
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 sm:px-8 sm:py-4 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-md transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white/70 text-xs sm:text-sm font-light">
        <p>Fresh ingredients, ground to perfection.</p>
      </div>
    </section>
  );
};

export default HeroSection;
