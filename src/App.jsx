import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
 import Package from "./pages/Package";
 import AllArticles from "./pages/AllArticles";
 import BlogDetails_main from "./pages/BlogDetails_main";
 import ExploreResults from "./pages/ExploreResults"; // 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Packages Routes */}
          <Route path="packages" element={<Package />} />
          <Route path="packages/:type" element={<Package />} />
          
          {/* Articles */}
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:id" element={<BlogDetails_main />} />

          <Route path="/blog/travel-tips" element={<BlogDetails_main />} />
          <Route path="/blog/stories" element={<BlogDetails_main />} />
          {/* New ExploreResults route */}
          <Route path="/explore" element={<ExploreResults />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
