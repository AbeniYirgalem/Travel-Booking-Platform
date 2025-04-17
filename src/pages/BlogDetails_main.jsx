import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaFolderOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import BlogContent from "./BlogContent ";
import Comment from "./Comment";

const BlogDetails_main = () => {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full">
        <img
          src="/image/header_Blog.png"
          alt="Blog Header"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Travel Stories For Now <br /> and the Future
          </h1>
          <div className="text-white text-base flex flex-wrap gap-6 justify-center items-center">
            <span className="flex items-center gap-2">
              <FaUser /> Hasmar
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> January 18, 2021
            </span>
            <span className="flex items-center gap-2">
              <FaFolderOpen /> Stories, Tips
            </span>
          </div>
        </div>
      </div>
      <BlogContent />

     
      <Comment />
      <Footer />
    </div>
  );
};

export default BlogDetails_main;
