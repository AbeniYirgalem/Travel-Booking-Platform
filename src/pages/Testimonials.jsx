import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sara Jay',
    role: 'Traveller',
    image: '/image/client 1.png',
    stars: 5,
    message:
      'Before we define any approach, we need to define the brand\'s overall goal. We then need to dive.',
  },
  {
    name: 'Cristian Daniel',
    role: 'Traveller',
    image: '/image/client 2.png',
    stars: 5,
    message:
      'Before we define any approach, we need to define the brand\'s overall goal. We then need to dive.',
  },
  {
    name: 'Kausar Hasan',
    role: 'Traveller',
    image: '/image/client 1.png',
    stars: 5,
    message:
      'Before we define any approach, we need to define the brand\'s overall goal. We then need to dive.',
  },
  {
    name: 'Jessica White',
    role: 'Traveller',
    image: '/image/Mask Group.png',
    stars: 5,
    message:
      'Before we define any approach, we need to define the brand\'s overall goal. We then need to dive.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isMobile = window.innerWidth < 768;
  const visibleCount = isMobile ? 1 : 3;

  const visibleTestimonials = testimonials.slice(index, index + visibleCount);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h5 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Testimonial</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">What our client say</h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base">
          Create a visual identity for your company and a <br className="hidden md:block" />
          overall brand
        </p>

        {/* Arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={prev}
            className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ChevronLeftIcon className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
          >
            <ChevronRightIcon className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center md:justify-start flex-wrap gap-4">
          {visibleTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-xl p-6 text-center w-full md:max-w-xs md:mx-2 relative"
            >
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white -mt-12 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-lg text-black">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <div className="flex justify-center text-yellow-400 my-2">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
