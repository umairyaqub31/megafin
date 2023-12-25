import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactMain from "./pages/ContactMain";
import Login from "./pages/Login";
import ApplyLoan from "./pages/ApplyLoan";
import AdminLogin from "./pages/Admin/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard";
import Customer from "./pages/Admin/Customer";
import Password from "./pages/Admin/Password";
import MyAccount from "./pages/MyAccount";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   EffectFade,
//   Autoplay,
// } from "swiper";

const App = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Customer />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loan" element={<ApplyLoan />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/password" element={<Password />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </>
  );
};

export default App;
