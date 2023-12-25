import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";

const BannerLogin = () => {
  return (
    <>
      <div className="bannerContact">
        <div className="TextBanner_about" style={{ padding: "1.3rem 6rem" }}>
          <div>
            <h2 className="text-light fw-bold">Log in</h2>
            <p className="text-light">
              Home <LiaGreaterThanSolid />{" "}
              <span className="text-orange">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerLogin;
