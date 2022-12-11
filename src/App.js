import React from "react";
import Navbar from "../src/components/navbar/Navbar";
import Header from "../src/containers/header/Header";
import Brand from "../src/components/brand/Brand";
import WhatGPT3 from "../src/containers/whatGPT3/WhatGPT3";
import Features from "../src/containers/possibility/Possibility";
import Possibility from "../src/containers/possibility/Possibility";
import CTA from "../src/components/cta/CTA";
import Blog from "../src/containers/blog/Blog";
import Footer from "../src/containers/footer/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
