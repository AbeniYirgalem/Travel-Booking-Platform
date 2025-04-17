import React, { useEffect, useState } from 'react';

const ExploreResults = ({ location, date, people }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch - replace with real API call
    const fetchPackages = async () => {
      setLoading(true);
      try {
        // Replace with your API logic and filters
        const response = await fetch('https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations'); 
        const data = await response.json();

        const filtered = data.filter(pkg =>
          (!location || pkg.location === location) &&
          (!date || pkg.availableDates.includes(date)) &&
          (!people || pkg.maxPeople >= people)
        );

        setPackages(filtered);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
      setLoading(false);
    };

    fetchPackages();
  }, [location, date, people]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Explore Results</h1>

      {loading ? (
        <p>Loading packages...</p>
      ) : packages.length === 0 ? (
        <p className="text-gray-600">No packages found. Try different filters.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{pkg.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{pkg.location}</p>
                <p className="text-base font-medium text-blue-600">${pkg.price}</p>
                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreResults;
