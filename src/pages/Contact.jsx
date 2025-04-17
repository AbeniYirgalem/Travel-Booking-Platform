import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header Image Section */}
      <div className="relative">
        <img
          src="/image/cm.jpg" // Replace with actual image path
          alt="Contact"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Contact</h1>
          <p className="text-white font-bold mt-2">
            <Link to="/">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your EMail"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>

            {/* Two Columns of Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
              {[...Array(4)].map((_, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-base mb-1">
                    Lhoksemawe, Aceh
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4" />
                    <span>+62 6943 6956</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@domain.com</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>Jl. Darussalam Hagu selatan</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
