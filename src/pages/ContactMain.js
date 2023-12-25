import React from "react";
import Navbar from "../components/Navbar";
import ContactBanner from "../components/ContactUs/ContactBanner";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactUs/ContactForm";
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;
