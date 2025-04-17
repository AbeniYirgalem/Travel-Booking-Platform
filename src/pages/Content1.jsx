import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useRef } from 'react';

const images = [
  {
    src: '/image/Rectangle 18.png',
    alt: 'Travelers',
  },
  {
    src: '/image/Group 44.png',
    alt: 'Bali, Indonesia',
  },
  {
    src: '/image/Group 46.png',
    alt: 'New York',
  },
  {
    src: '/image/Rectangle 18.png',
    alt: 'Tokyo',
  },
  {
    src: '/image/unsplash_sELcHR_bGVs.png',
    alt: 'Sydney',
  },
  {
    src: '/image/Group 46.png',
    alt: 'London',
  },
];

const Content1 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Explore new worlds with <br /> exotic natural scenery
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Explore the world with what you love beautiful natural beauty.
        </p>

        {/* Arrows at the top right */}
        <div className="flex justify-between gap-2 mb-6 pr-8">
          <button
            onClick={() => scroll('left')}
            className="bg-white shadow-md rounded-full p-4 hover:bg-gray-100"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white shadow-md rounded-full p-4 hover:bg-gray-100"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Scrollable image cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto lg:px-8 scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`min-w-[300px] relative bg-white rounded-xl overflow-hidden flex-shrink-0 `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-72 object-cover rounded-xl ${
                  idx === 1 ? 'h-100 w-full shadow-xl' : ''
                }`}
              />
              {/* Optional quote section */}
              {img.quote && (
                <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg text-left">
                  <h3 className="font-bold text-black text-lg">{img.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{img.description}</p>
                  <div className="absolute top-0 right-0 mt-[-16px] mr-[-16px] bg-white p-2 rounded-full shadow">
                    <span className="text-2xl">“</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content1;
