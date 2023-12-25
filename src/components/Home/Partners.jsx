import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../images/image 11.png";
import img2 from "../../images/image 7.png";
import img3 from "../../images/image 8.png";
import img4 from "../../images/image 9.png";
import img5 from "../../images/image 10.png";

const Partners = () => {
  return (
    <>
      <div className="py-5" style={{ background: "rgba(241, 251, 255, 1)" }}>
        <h2 className="fw-bold text-center mb-4">Our Partners</h2>
        <div className="partner_Main normalPartner_Main ">
          <div className="d-flex justify-content-center gap-5">
            <div className="">
              <img width={150} src={img1} alt="" />
            </div>
            <div className="">
              <img width={150} src={img2} alt="" />
            </div>
            <div className="">
              <img width={150} src={img3} alt="" />
            </div>
            <div className="">
              <img width={150} src={img4} alt="" />
            </div>
            <div className="">
              <img width={150} src={img5} alt="" />
            </div>
          </div>
        </div>

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          swipeable={true}
          emulateTouch
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          useKeyboardArrows
          className="respPartner_Main mx-4"
        >
          <div>
            <img src={img1} alt="" className="w-50" />
          </div>
          <div>
            <img src={img2} alt="" className="w-50" />
          </div>

          <div>
            <img src={img3} alt="" className="w-50" />
          </div>
          <div>
            <img src={img4} alt="" className="w-50" />
          </div>
          <div>
            <img src={img5} alt="" className="w-50" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Partners;
