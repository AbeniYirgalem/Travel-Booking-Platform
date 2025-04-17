import React from "react";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div
      className="relative w-full h-[60vh] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/unsplash_rjfOdiB7k-E.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
          <Link to="/">Home</Link>
          <span className="text-yellow-400 font-bold text-lg sm:text-xl">›</span>
          <Link to="/about">About Us</Link>
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
