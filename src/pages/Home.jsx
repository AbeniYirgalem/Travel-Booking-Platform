import React from "react";
import HeroSection from "./HeroSection";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Content1 />
      <Content2 />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
