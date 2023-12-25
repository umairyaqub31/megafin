import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";

const HeroAbout = () => {
  return (
    <>
      <div className="bannerAbout">
        <div className="TextBanner_about" style={{ padding: "1.3rem 5rem" }}>
          <div>
            <h2 className="text-light fw-bold">About Us</h2>
            <p className="text-light">
              Home <LiaGreaterThanSolid />{" "}
              <span className="text-orange">About Us</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
