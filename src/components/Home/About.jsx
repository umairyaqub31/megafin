import React from "react";
import img1 from "../../images/about.png";

const About = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 my-5">
            <img src={img1} style={{ width: "100%" }} alt="" />
          </div>
          <div className="col-md-6 my-5">
            <h3 className="fw-bold">About MegaFin</h3>
            <p className="fs-15">
              Welcome to MegaFin, Your Trusted Partner in Financial Solutions At
              MegaFin, we understand that life is full of unexpected financial
              challenges and opportunities. Whether you're in need of a personal
              loan, a business loan, or any other type of financing, we're here
              to provide you with the support and resources you require to
              achieve your financial goals.
            </p>
            <h5 className="fw-bold">Who We Are</h5>
            <p className="fs-15">
              We are a dynamic and customer-centric loan company, driven by the
              mission of providing accessible, affordable, and flexible
              financing solutions. Our team of experienced professionals is here
              to guide you through your financial journey, whether you're
              looking to purchase a new home, expand your business, consolidate
              debts, or achieve any other financial goal.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
