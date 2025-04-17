import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations")
      .then(res => setArticles(res.data));
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.id} className="border p-4 rounded shadow">
            <p className="text-gray-500 text-sm">{article.category}</p>
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm">{article.description}</p>
            <Link to={`/articles/${article.id}`}>
              <button className="mt-2 bg-black text-white px-3 py-1 rounded-full text-sm">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllArticles;