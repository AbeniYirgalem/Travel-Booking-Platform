import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Define the image arrays
const recentPosts = [
  {
    img: "/image/kyoto.png",
    title: "Travel Stories for Now and the Future",
    date: "14 Dec 2022",
  },
  {
    img: "/image/marrakech.png",
    title: "9 Popular Travel Destination on Sale in 2022",
    date: "15 Dec 2022",
  },
  {
    img: "/image/patagonia.png",
    title: "How Are We Going to Travel in 2022?",
    date: "16 Dec 2022",
  },
];

const blogImages = [
  { img: "/image/bali-feature.png", alt: "Bali Featured Image" },
  { img: "/image/unsplash_XbPG4k-KUwE.png", alt: "Blog Couple" },
];

const BlogContent = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Main Blog */}
        <div className="md:col-span-2 space-y-8">
          {/* Blog Images + Content */}
          {blogImages.map((image, idx) => (
            <div key={idx}>
              <img
                src={image.img}
                alt={image.alt}
                className="rounded-xl w-full"
              />
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          ))}

          {/* Subsection */}
          <h2 className="text-2xl font-semibold">Rice Terraces, Tegallalang</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          {/* Tags and Social */}
          <div className="flex justify-between items-center pt-8 text-sm text-gray-500 border-t">
            <p>
              <span className="font-medium text-black">Tags:</span> Destination,
              Travel
            </p>
            <div className="flex gap-4">
              <span>Share This:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  title="Share on Facebook"
                  className="text-gray-500 hover:text-blue-600 text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  title="Share on Twitter"
                  className="text-gray-500 hover:text-black text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  title="Share on LinkedIn"
                  className="text-gray-500 hover:text-blue-800 text-xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Recent Posts */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
            {recentPosts.map((post, idx) => (
              <div key={idx} className="flex gap-4 mb-4">
                <img
                  src={post.img}
                  alt={`thumb-${idx + 1}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="text-sm">
                  <p className="font-medium text-black leading-tight">
                    {post.title}
                  </p>
                  <p className="text-gray-400 mt-1 text-xs">{post.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            {["Travel", "Tips", "Stories", "Destination"].map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-700 mb-3"
              >
                <ArrowRight className="w-4 h-4" />
                <span>{cat}</span>

                <div className="h-px bg-gray-300 w-3/4 ml-2"></div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="bg-black text-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Have Any Question?</h3>
            <p className="text-sm mb-4">
              Do not hesitate to give us a call. We are an expert team and we
              are happy to talk to you.
            </p>
            <div className="flex items-center gap-2 mb-2 text-sm">
              <Phone className="w-4 h-4" />
              +62 6943 6956
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              contact@domain.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
