import React from "react";
import { Quote } from "lucide-react";

const AboutContent2 = () => {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image */}
        <div>
          <img
            src="/image/unsplash_7BjmDICVloE.png" // Replace with actual image path
            alt="Founder"
            className="rounded-[80px] object-cover w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div>
          <Quote className="w-10 h-10 text-black mb-4" />
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            porttitor sapien et urna tincidunt fringilla. Vivamus at augue
            interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
            Suspendisse suscipit est et neque.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Mauris tempor tellus ante, ut fermentum erat gravida vel. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a
            malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a,
            accumsan justo.
          </p>
          <h3 className="font-bold text-xl mb-1">Siti Sarah</h3>
          <p className="text-sm text-gray-500">Founder Travasca</p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent2;
