import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import icon1 from "../../images/icon5.png";
import icon2 from "../../images/icon6.png";
import icon3 from "../../images/icon7.png";
import icon4 from "../../images/icon8.png";
import polygon from "../../images/Polygon 17.png";

const WhyUs = () => {
  return (
    <>
      <div className="WhyusImg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mainPolygon">
              <div className="image-container">
                <img src={polygon} alt="" />
              </div>
              <div className="bluePolygon"></div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 mt-3">
              <h2 className="fw-bold text-blue">Why Choose Us</h2>
              <ul>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  The real-time service provider with 100% customer satisfaction{" "}
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Paperwork assistance{" "}
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Contactless Documentation
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Best offers
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Compare multiple options
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  No Hidden Charges
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Low Interest Rates
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Quick approval & disbursal
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Financial solutions to the Indian consumer and various
                  business entities
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Safe, secure, and convenient
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  One-stop Destination for every finance problem
                </li>
                <li className="fs-14" style={{ lineHeight: "26px" }}>
                  Friendly customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          swipeable={true}
          modules={[Autoplay, Pagination]}
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
      <div className="" style={{ backgroundColor: "#E26A4F" }}>
        <div className="col-md-5 mx-auto py-5">
          <h3 className="fw-bold text-light text-center">Our Mission</h3>
          <p
            className="text-light text-center fs-14 fw-400"
            style={{ lineHeight: "30px" }}
          >
            Our mission is to bridge the current niche with innovative and
            flexible lending to SMEs in an efficient way.We wish to bring the
            best deals for you. We combine knowledge, passion, and technology to
            provide the best economic solution and set new benchmarks.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
