import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PackageArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
        );
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching articles.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="bg-white text-black mb-10 px-6 py-10">
       <h1 className="text-[60px] text-bold">Tips & Articles</h1>
      <div className="flex justify-between items-start flex-wrap gap-3 pt-5 mb-6 h-full">
        <p className="max-w-md text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>

        <Link to="/articles" >
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            View more
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6 h-full">
          {articles.slice(0, 2).map((article) => (
            <div
              key={article.id}
              className="bg-white text-black p-6 rounded-lg shadow-md border border-gray-300"
            >
              <p className="text-sm font-medium text-gray-600 mb-2">
                {article.category}
              </p>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {article.description}
              </p>
              <Link to={`/articles/${article.id}`}>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 flex flex-col h-full">
          <div className="bg-white text-black rounded-lg overflow-hidden shadow-md border border-gray-300">
            <div className="w-full h-150 overflow-hidden">
              <img
                src="/image/unsplash_1XLyzi17Z2M.png"
                alt="Travel Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-gray-600 mb-2">
                {articles[2]?.category}
              </p>
              <h3 className="text-lg font-semibold mb-2">
                {articles[2]?.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {articles[2]?.description}
              </p>
              <Link to={`/articles/${articles[2]?.id}`}>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageArticles;