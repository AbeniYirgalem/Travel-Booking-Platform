import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black mt-16">
        {/* Subscribe Section */}
        <div
          className="bg-cover bg-center text-white py-16 px-4 text-center"
          style={{ backgroundImage: `url('/image/unsplash_TejFa7VW5e4.png')` }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Subcribe to get special price
          </h2>
          <p className="text-sm md:text-base text-gray-200 mb-6 max-w-xl mx-auto">
            Don’t wanna miss something? Subscribe right now and get special
            promotion and monthly newsletter.
          </p>
          <form className="max-w-2xl mx-auto flex flex-row items-center bg-white rounded-full overflow-hidden shadow-lg px-2 w-full gap-2">
            <input
              type="email"
              placeholder="Type your email here"
              className="flex-grow px-4 py-3 text-black outline-none w-full rounded-full"
            />
            <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded-full cursor-pointer hover:bg-yellow-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 py-12">
          {/* Logo & Description */}
          <div>
            <img
              src="/image/logo 2.png"
              alt="Rebel Rover"
              className="h-10 mb-4"
            />
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <MdLocationOn /> 732 Despard St, Atlanta
              </li>
              <li className="flex items-center gap-2">
                <MdPhone /> +97 888 8888
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> info@traveller.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://www.tour.com/" target="_blank" className="hover:text-yellow-500 transition-colors">
                  Tours
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex items-center gap-4 text-xl text-gray-700">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-black text-white text-center py-4 text-sm">
          Copyright &copy; All rights reserved (Website Developed & Managed by
          CREATIVECHROMA)
        </div>
      </footer>

      {/* Whitespace after footer */}
      <div className="h-20 bg-white"></div>
    </>
  );
};

export default Footer;
