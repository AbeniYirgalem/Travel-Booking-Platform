import { useState } from "react";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // Track which mobile dropdown is open

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const handleDropdownClick = (name) => {
    if (openMobileDropdown === name) {
      setOpenMobileDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenMobileDropdown(name); // Open the new dropdown
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-51 z-50 bg-[#120B0B82] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full relative">
        {/* Logo (hidden on mobile dropdown open or search bar on iPad) */}
        <div
          className={`flex items-start ${
            (showSearch || openMobileDropdown) && "hidden lg:flex" // Hide the logo on iPad (768px) and below when search is active or dropdown is open
          }`}
        >
          <Link to="/">
            <img
              src="/image/logo1 1.png"
              alt="Rebel Rover Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About Us
          </Link>

          {/* Package */}
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
              Package
              <FaChevronDown className="text-xs ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="absolute left-0 bg-black text-white rounded shadow-lg w-40 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
              <Link
                to="/packages/adventure"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Adventure
              </Link>
              <Link
                to="/packages/luxury"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Luxury
              </Link>
              <Link
                to="/packages/budget"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Budget
              </Link>
            </div>
          </div>

          {/* Destination */}
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
              Destination
              <FaChevronDown className="text-xs ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="absolute left-0 bg-black text-white rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
              <Link
                to="/destination/europe"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Europe
              </Link>
              <Link
                to="/destination/asia"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Asia
              </Link>
              <Link
                to="/destination/africa"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Africa
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
              Blog
              <FaChevronDown className="text-xs ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="absolute left-0 bg-black text-white rounded shadow-lg w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 z-50">
              <Link
                to="/blog/travel-tips"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Travel Tips
              </Link>
              <Link
                to="/blog/stories"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                Travel Stories
              </Link>
              <Link
                to="/blog/news"
                className="block px-4 py-2 hover:bg-white hover:text-black"
              >
                News & Updates
              </Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>

        {/* Mobile search bar */}
        <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto justify-end">
          {showSearch && (
            <div className="flex w-full items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                onBlur={() => setShowSearch(false)}
                className="flex-grow px-3 py-1 rounded-md text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="text-white text-lg"
              >
                <FaTimes />
              </button>
            </div>
          )}

          {!showSearch && !openMobileDropdown && (
            <>
              <button
                onClick={handleSearchToggle}
                className="text-white text-lg md:ml-6"
              >
                <FaSearch />
              </button>
              <button
                className="md:hidden text-white text-xl"
                onClick={() => {
                  setMobileMenuOpen((prev) => !prev);
                  setShowSearch(false);
                  setOpenMobileDropdown(null);
                }}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-3 text-sm">
          <Link
            to="/"
            className="block py-1 hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-1 hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Package */}
          <div>
            <div
              onClick={() => handleDropdownClick("package")}
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              Package <FaChevronDown className="text-xs ml-1" />
            </div>
            {openMobileDropdown === "package" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/packages/adventure"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Adventure
                </Link>
                <Link
                  to="/packages/luxury"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Luxury
                </Link>
                <Link
                  to="/packages/budget"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Budget
                </Link>
              </div>
            )}
          </div>

          {/* Destination */}
          <div>
            <div
              onClick={() => handleDropdownClick("destination")}
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              Destination <FaChevronDown className="text-xs ml-1" />
            </div>
            {openMobileDropdown === "destination" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/destination/europe"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Europe
                </Link>
                <Link
                  to="/destination/asia"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Asia
                </Link>
                <Link
                  to="/destination/africa"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Africa
                </Link>
              </div>
            )}
          </div>

          {/* Blog */}
          <div>
            <div
              onClick={() => handleDropdownClick("blog")}
              className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer"
            >
              Blog <FaChevronDown className="text-xs ml-1" />
            </div>
            {openMobileDropdown === "blog" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/blog/travel-tips"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Travel Tips
                </Link>
                <Link
                  to="/blog/stories"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  Travel Stories
                </Link>
                <Link
                  to="/blog/news"
                  className="block hover:text-yellow-400"
                  onClick={() => {
                    setMobileMenuOpen(false); // Close the mobile menu when a link is selected
                    setOpenMobileDropdown(null);
                  }}
                >
                  News & Updates
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="block py-1 hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
