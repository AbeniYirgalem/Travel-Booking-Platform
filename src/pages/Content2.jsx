import React, { useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const Content2 = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-[500px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/image/unsplash_okVXy9tG3KY.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-20 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Why choose Us?
        </h2>
        <p className="text-white text-base md:text-lg mb-12">
          our services have been trusted by world travelers.
        </p>

        {/* Arrow buttons - top of cards */}
        <div className="flex justify-between items-center px-4 mb-4">
          <button
            onClick={scrollLeft}
            className="bg-white p-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            <ChevronLeftIcon className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-white p-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            <ChevronRightIcon className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Scrollable Cards on Mobile */}
        <div
          ref={scrollRef}
          className="overflow-x-auto md:overflow-visible no-scrollbar"
        >
          <div className="flex md:grid md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto relative">
            {/* Card 1 */}
            <Card
              icon="/image/Group 31.png"
              title="Best Service"
              text="our service is reliable and convenient, our service is quality."
            />
            {/* Card 2 */}
            <Card
              icon="/image/Group 31 (1).png"
              title="Price Guarantee"
              text="our service is reliable and convenient, our service is quality."
            />
            {/* Card 3 */}
            <Card
              icon="/image/Group 31 (2).png"
              title="Handpicked Hotels"
              text="our service is reliable and convenient, our service is quality."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, text }) => (
  <div
    className="min-w-[280px] md:min-w-0 bg-white rounded-2xl p-6 text-left shadow-xl hover:shadow-2xl transition duration-300 -ml-1/4"
  >
    {/* The -ml-1/4 will shift the cards by 25% outside the container */}
    <div className="mb-4 flex items-start justify-start bg-black p-4 rounded-xl w-14 h-14 ">
      <img src={icon} alt={`${title} Icon`} className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
      {title}
    </h3>
    <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center md:text-left">
      {text}
    </p>
    <a
      href="#"
      className="text-sm font-semibold text-black hover:underline flex items-center gap-1 justify-center md:justify-start"
    >
      Learn more <span>→</span>
    </a>
  </div>
);

export default Content2;
