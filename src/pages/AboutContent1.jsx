import React from "react";
import { Users, Rocket, LineChart } from "lucide-react";

const AboutContent1 = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
        {/* Teamwork */}
        <div>
          <div className="flex justify-center mb-4">
            <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Great teamwork</h3>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt
            eget sapien eget, maximus convallis massa.
          </p>
        </div>

        {/* Vision */}
        <div>
          <div className="flex justify-center mb-4">
            <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Our vision</h3>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>
        </div>

        {/* Mission */}
        <div>
          <div className="flex justify-center mb-4">
            <LineChart className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Our mission</h3>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent1;
