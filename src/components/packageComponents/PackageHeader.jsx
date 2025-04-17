import React from "react";
import { NavLink } from "react-router-dom"

const PackageHeader = () => {

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url('/image/unsplash_dHHhDXaCh70.png')` }} // <-- replace this with your actual path if needed
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Text content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Packages</h1>
        <p className="text-lg md:text-xl font-medium">
                  <NavLink to="/" className="text-white">Home</NavLink>
                  <span className="mx-2">›</span>
                  <NavLink to="/packages" className="text-gray-200">Package</NavLink>
        </p>
      </div>
    </div>
  );
};

export default PackageHeader;
