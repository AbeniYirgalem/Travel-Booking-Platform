import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const HeroSection = () => {
  const [date, setDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setShowDatePicker(false); // Close the date picker once a date is selected
  };

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev); // Toggle date picker visibility
  };

  return (
    <section
      className="relative top-0 w-full h-screen flex items-start justify-start bg-cover bg-center"
      style={{
        backgroundImage:
          "url('./image/suitcase-travel-summer-holidays-vacation-travelers-luggage 1.png')",
        height: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-opacity-30"></div>
      <div className="relative text-left text-white px-4 md:px-10">
        <h1 className="text-4xl md:text-8xl  mt-45 font-bold">
          Make in <br /> your journey.
        </h1>
        <p className="mt-15 text-lg md:text-xl max-w-2xl mx-auto">
          Explore the world with what you love, beautiful <br /> natural beauty.
        </p>
        <div className="mt-15 flex justify-start w-full max-w-2xl">
          <div className="bg-white rounded-full shadow-2xl px-6 py-3 flex items-center gap-4 w-full">
            {/* Location */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent text-gray-500 font-semibold focus:outline-none pr-6"
              />
              <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Date (with ChevronDownIcon that triggers date picker) */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Date"
                value={date}
                onClick={toggleDatePicker} // Open the date picker when clicked
                className="w-full bg-transparent text-gray-500 font-semibold focus:outline-none pr-6 cursor-pointer"
              />
              <ChevronDownIcon
                className="w-5 h-5 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={toggleDatePicker} // Open the date picker when ChevronDownIcon is clicked
              />

              {/* Conditionally render the date picker */}
              {showDatePicker && (
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange} // Update date on change
                  className="absolute top-full mt-2 left-0 w-full bg-white shadow-lg rounded-lg"
                />
              )}
            </div>

            {/* People */}
            <div className="relative flex-1">
              <input
                type="number"
                placeholder="People"
                className="w-full bg-transparent text-gray-500 font-semibold focus:outline-none pr-6"
              />
              <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Button */}
            <button className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-900 transition">
              Explore now
            </button>
          </div>
        </div>

        <p className="mt-12 text-sm md:text-base">
          <span className="font-semibold">Popular Place :</span> Bali, Istanbul,
          Rome, Paris.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
