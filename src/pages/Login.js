import React from "react";
import BannerLogin from "../components/Login/BannerLogin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <>
      <Navbar />
      <BannerLogin />
      <LoginForm/>
      <Footer />
    </>
  );
};

export default Login;
