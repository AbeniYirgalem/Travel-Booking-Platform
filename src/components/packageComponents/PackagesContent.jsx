import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Images = [
  "/image/unsplash__QTeGT478_8.png",
  "/image/unsplash_gsllxmVO4HQ.png",
  "/image/unsplash_IoUnv2cfx1c.png",
  "/image/unsplash_Ncmd8uLe8H0.png",
  "/image/unsplash_okVXy9tG3KY.png",
  "/image/unsplash_QAwciFlS1g4.png",
  "/image/unsplash_sELcHR_bGVs.png",
  "/image/unsplash_TejFa7VW5e4.png",
  "/image/unsplash_UDv1n0xIpU8.png",
];

const PackagesContent = () => {
  const [packages, setPackages] = useState([]);
  const { type } = useParams(); // Get the package type from the URL

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
        );
        const dataWithImages = res.data.map((item, index) => ({
          ...item,
          image: Images[index % Images.length],
        }));
        setPackages(dataWithImages);
      } catch (error) {
        console.error("Failed to fetch packages", error);
      }
    };

    fetchPackages();
  }, []);

  const budgetPackages = packages.filter((p) => parseFloat(p.price) <= 100);
  const adventurePackages = packages.filter(
    (p) => parseFloat(p.price) > 100 && parseFloat(p.price) <= 300
  );
  const luxuryPackages = packages.filter((p) => parseFloat(p.price) > 300);

  // Render packages based on the type from the URL
  const renderSection = (title, data) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-black mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-black text-lg">{item.country}</h3>
                <span className="text-sm font-semibold">
                  ${item.price}/<span className="text-xs">{item.duration}</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {item.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <button className="w-40 py-2 bg-black text-white rounded-full font-medium hover:bg-yellow-600 transition-colors">
                  Booking now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Filter the packages based on the `type` in the URL
  let selectedPackages = [];
  if (type === "adventure") {
    selectedPackages = adventurePackages;
  } else if (type === "luxury") {
    selectedPackages = luxuryPackages;
  } else if (type === "budget") {
    selectedPackages = budgetPackages;
  }

  return (
    <div className="bg-white text-white">
      <div className="max-w-7xl  mx-auto my-10 px-4">
        <div className="flex justify-between flex-wrap gap-3 items-center mt-10 mb-8">
          <div>
            <h1 className="text-black text-2xl lg:text-4xl font-bold mb-2">
              Popular Destination
            </h1>
            <p className="text-sm max-w-md text-black">
              Choose your perfect trip from our packages, whether you’re looking
              for adventure, luxury, or a budget escape.
            </p>
          </div>
          <a
            href="#"
            className="rounded-full px-5 py-2 text-white  bg-black font-semibold hover:text-yellow-500 transition-colors"
          >
            Discover more
          </a>
        </div>

        {/* Render the packages based on the selected type */}
        {selectedPackages.length > 0 ? (
          renderSection(
            `${type.charAt(0).toUpperCase() + type.slice(1)} Packages`,
            selectedPackages
          )
        ) : (
          <p className="text-center text-black">
            No packages available for this type.
          </p>
        )}
      </div>
      <div
        className="relative w-full h-[500px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/image/unsplash_okVXy9tG3KYAS.png')` }}
      ></div>
    </div>
  );
};

export default PackagesContent;
