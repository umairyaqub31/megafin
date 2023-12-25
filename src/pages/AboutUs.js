import React from "react";
import BannerAbout from "../components/AboutUs/BannerAbout";
import Navbar from "../components/Navbar";
import Aboutus from "../components/AboutUs/Aboutus";
import WhyUs from "../components/AboutUs/WhyUs";
import Testimonial from "../components/Home/Testimonial";
import Partners from "../components/Home/Partners";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <BannerAbout />
      <Aboutus />
      <WhyUs />
      <Testimonial />
      <Partners />
      <Footer />
    </>
  );
};

export default AboutUs;
