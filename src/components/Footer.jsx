import React from "react";
import logo from "../images/footer_logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-blue d-flex flex-column align-items-center justify-content-center pt-5 pb-3">
        <img src={logo} width={270} alt="" />
        <div className="footer_main">
          <ul class="d-flex firstFooterRow gap-4 mb-2 mb-lg-0 mt-3">
            <li class="nav-item footer_link">
              <a
                class="nav-link text-light fw-normal"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item footer_link">
              <a class="nav-link text-light fw-normal" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item footer_link">
              <a class="nav-link text-light fw-normal" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item footer_link">
              <a class="nav-link text-light fw-normal" href="#">
                My Account
              </a>
            </li>
            <li class="nav-item footer_link">
              <a class="nav-link text-light fw-normal" href="#">
                DSA Login
              </a>
            </li>
          </ul>
          <ul class="d-flex secondFooterRow gap-4 mb-2 mb-lg-0 mt-3">
            <li class="nav-item footer_link">
              <a
                class="nav-link text-light fw-normal"
                aria-current="page"
                href="#"
              >
                Terms and conditions
              </a>
            </li>
            <li class="nav-item footer_link">
              <a class="nav-link text-light fw-normal" href="#">
                Privacy Policy
              </a>
            </li>

            <li class="nav-item footer_link">
              <a class="nav-link text-light fw-normal" href="#">
                Phone: +91 8018966740
              </a>
            </li>
          </ul>
        </div>
        <ul class="d-flex secondFooterRow gap-4 mb-2 mb-lg-0 mt-3">
          <li class="nav-item footer_link">
            <a
              class="nav-link text-light fw-normal"
              aria-current="page"
              href="#"
            >
              Address: NO.42/2,VTH CROSS STREET,TRUSTPURAM,CHENNAI-26
              TRUSTPURAM,CHENNAI-26 Chennai TN 600024 IN
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
