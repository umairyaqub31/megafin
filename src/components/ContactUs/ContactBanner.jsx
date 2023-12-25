import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";

const ContactBanner = () => {
  return (
    <>
      <div className="bannerContact">
        <div className="TextBanner_about" style={{ padding: "1.3rem 5rem" }}>
          <div>
            <h2 className="text-light fw-bold">Contact Us</h2>
            <p className="text-light">
              Home <LiaGreaterThanSolid />{" "}
              <span className="text-orange">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
