import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import icon1 from "../../images/icon5.png";
import icon2 from "../../images/icon6.png";
import icon3 from "../../images/icon7.png";
import icon4 from "../../images/icon8.png";

import img from "../../images/Group 69.png";
import img2 from "../../images/circleres.png";

const ApplyLoan = () => {
  return (
    <>
      <div className="upper_loanImg LoanSectionNormal">
        <div className="col-md-5 mx-auto">
          <h1 className="fw-bold text-center">How to apply for loan</h1>
          <p className="text-center">
            {" "}
            sit amet, consectetur adipiscing elit. Nulla convallis libero eget
            ligula feugiat, sit amet ullamcorper mi commodo.
          </p>
        </div>
        <img className="circles_imgLoan" src={img} width={650} alt="" />
        <div className="d-flex justify-content-center align-items-baseline gap-5 mt-3">
          <div className="">
            <p className="text-center text-orange">Step 1</p>
            <p className="text-center fw-bold">Select LoanType</p>
          </div>
          <div className="">
            <p className="text-center ">Step 2</p>
            <p className="text-center text-orange fw-bold">Fill BasicDetails</p>
          </div>
          <div className="">
            <p className="text-center text-orange">Step 3</p>
            <p className="text-center fw-bold mb-0">We'll get to you </p>
            <p className="text-center fw-bold">within 1 hour </p>
          </div>
          <div className="">
            <p className="text-center ">Step 4</p>
            <p className="text-center text-orange fw-bold">Loan Approval</p>
          </div>
        </div>
      </div>
      {/* responsive............ */}
      <div className="LoanSectionResoponsive upper_loanImg">
        <div className="col-md-5 mx-auto">
          <h1 className="fw-bold text-center">How to apply for loan</h1>
          <p className="text-center">
            {" "}
            sit amet, consectetur adipiscing elit. Nulla convallis libero eget
            ligula feugiat, sit amet ullamcorper mi commodo.
          </p>
        </div>
        <img src={img2} alt="" />
      </div>
      {/* //////////////// */}
      <div className="LoanImage">
        <div className="services_circleMain ">
          <div className="d-flex justify-content-center">
            <div className="col-md-2">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-pill loanBorder mb-2">
                  <img src={icon1} alt="" width={50} />
                </div>
                <p className="text-center text-light mb-0 text-center">
                  Minimum
                </p>
                <p className="text-center text-light text-center">
                  {" "}
                  Documentation
                </p>
              </div>
            </div>
            <div className=" col-md-2">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-pill loanBorder mb-2">
                  <img src={icon2} alt="" width={50} />
                </div>
                <p className="text-center text-light mb-0 text-center">
                  Faster{" "}
                </p>
                <p className="text-center text-light text-center"> Approval</p>
              </div>
            </div>
            <div className=" col-md-2">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-pill loanBorder mb-2">
                  <img src={icon3} alt="" width={50} />
                </div>
                <p className="text-center text-light mb-0 text-center">100%</p>
                <p className="text-center text-light text-center">
                  {" "}
                  Online Process
                </p>
              </div>
            </div>
            <div className=" col-md-2">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="rounded-pill loanBorder mb-2">
                  <img src={icon4} alt="" width={50} />
                </div>
                <p className="text-center text-light mb-0 text-center">Loan</p>
                <p className="text-center text-light text-center">
                  {" "}
                  Up To Rs 56.00 Lac
                </p>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoPlay={true}
          swipeable={true}
          modules={[Pagination]}
          className="mySwiper resp_services_circleMain mx-4"
        >
          <SwiperSlide>
            {" "}
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="rounded-pill loanBorder mb-2">
                <img src={icon1} alt="" width={50} />
              </div>
              <p className="text-center text-light mb-0 text-center">Minimum</p>
              <p className="text-center text-light text-center">
                {" "}
                Documentation
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="rounded-pill loanBorder mb-2">
                <img src={icon2} alt="" width={50} />
              </div>
              <p className="text-center text-light mb-0 text-center">Faster </p>
              <p className="text-center text-light text-center"> Approval</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="rounded-pill loanBorder mb-2">
                <img src={icon3} alt="" width={50} />
              </div>
              <p className="text-center text-light mb-0 text-center">100%</p>
              <p className="text-center text-light text-center">
                {" "}
                Online Process
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="rounded-pill loanBorder mb-2">
                <img src={icon4} alt="" width={50} />
              </div>
              <p className="text-center text-light mb-0 text-center">Loan</p>
              <p className="text-center text-light text-center">
                {" "}
                Up To Rs 56.00 Lac
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ApplyLoan;
