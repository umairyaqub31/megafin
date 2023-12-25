import React, { useState } from "react";
import HeroSection from "../components/Home/HeroSection";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import ApplyLoan from "../components/Home/ApplyLoan";
import Testimonial from "../components/Home/Testimonial";
import Partners from "../components/Home/Partners";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <ApplyLoan />
      <Testimonial />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
