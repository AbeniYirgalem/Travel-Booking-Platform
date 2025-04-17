import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations/${id}`)
      .then(res => setArticle(res.data));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 mb-4">{article.category}</p>
      <img src="/image/unsplash_1XLyzi17Z2M.png" alt="" className="mb-4 w-full h-64 object-cover rounded" />
      <p>{article.description}</p>
    </section>
  );
};

export default Blog;
