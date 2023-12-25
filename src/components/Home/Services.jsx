// import React from "react";
// import img1 from "../../images/icon1.png";
// import img2 from "../../images/icon2.png";
// import img3 from "../../images/icon3.png";
// import img4 from "../../images/icon4.png";

// const Services = () => {
//   return (
//     <>
//       <div className="services_bg d-flex align-items-center flex-column">
//         <div className="col-md-6 mx-auto mb-4">
//           <h2 className="fw-bold text-light text-center">Serices We Provide</h2>
//           <p className="text-light text-center mx-4">
//             sit amet, consectetur adipiscing elit. Nulla convallis libero eget
//             ligula feugiat, sit amet ullamcorper mi commodo.
//           </p>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-3 mt-3">
//               <div className="services_card">
//                 <div className="polygonDiv d-flex align-items-center justify-content-center">
//                   <img src={img1} alt="" />
//                 </div>
//                 <h5 className="fw-bold">Personal Loan</h5>
//                 <p className="services_para">
//                   sit amet, consectetur adipiscing elit. Nulla convallis libero
//                   eget ligula feugiat, sit amet ullamcorper mi commodo.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-3 mt-3">
//               <div className="services_card">
//                 <div className="polygonDiv d-flex align-items-center justify-content-center">
//                   <img src={img2} alt="" />
//                 </div>
//                 <h5 className="fw-bold">Business Loan</h5>
//                 <p className="services_para">
//                   sit amet, consectetur adipiscing elit. Nulla convallis libero
//                   eget ligula feugiat, sit amet ullamcorper mi commodo.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-3 mt-3">
//               <div className="services_card">
//                 <div className="polygonDiv d-flex align-items-center justify-content-center">
//                   <img src={img3} alt="" />
//                 </div>
//                 <h5 className="fw-bold">Home Loan</h5>
//                 <p className="services_para">
//                   sit amet, consectetur adipiscing elit. Nulla convallis libero
//                   eget ligula feugiat, sit amet ullamcorper mi commodo.
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-3 mt-3">
//               <div className="services_card">
//                 <div className="polygonDiv d-flex align-items-center justify-content-center">
//                   <img src={img4} alt="" />
//                 </div>
//                 <h5 className="fw-bold">Gold Loan</h5>
//                 <p className="services_para">
//                   sit amet, consectetur adipiscing elit. Nulla convallis libero
//                   eget ligula feugiat, sit amet ullamcorper mi commodo.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React, { useRef, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../images/icon1.png";
import img2 from "../../images/icon2.png";
import img3 from "../../images/icon3.png";
import img4 from "../../images/icon4.png";

const Services = () => {
  return (
    <>
      <div className="services_bg ">
        <div className="d-flex align-items-center flex-column">
          <div className="col-md-6 mx-auto mb-4">
            <h2 className="fw-bold text-light text-center">
              Serices We Provide
            </h2>
            <p className="text-light text-center mx-4">
              sit amet, consectetur adipiscing elit. Nulla convallis libero eget
              ligula feugiat, sit amet ullamcorper mi commodo.
            </p>
          </div>
          <div className="container normalServices">
            <div className="d-flex">
              <div className="col-md-3 mt-3">
                <div className="services_card">
                  <div className="polygonDiv d-flex align-items-center justify-content-center">
                    <img src={img1} alt="" />
                  </div>
                  <h5 className="fw-bold">Personal Loan</h5>
                  <p className="services_para">
                    sit amet, consectetur adipiscing elit. Nulla convallis
                    libero eget ligula feugiat, sit amet ullamcorper mi commodo.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="services_card">
                  <div className="polygonDiv d-flex align-items-center justify-content-center">
                    <img src={img2} alt="" />
                  </div>
                  <h5 className="fw-bold">Business Loan</h5>
                  <p className="services_para">
                    sit amet, consectetur adipiscing elit. Nulla convallis
                    libero eget ligula feugiat, sit amet ullamcorper mi commodo.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="services_card">
                  <div className="polygonDiv d-flex align-items-center justify-content-center">
                    <img src={img3} alt="" />
                  </div>
                  <h5 className="fw-bold">Home Loan</h5>
                  <p className="services_para">
                    sit amet, consectetur adipiscing elit. Nulla convallis
                    libero eget ligula feugiat, sit amet ullamcorper mi commodo.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="services_card">
                  <div className="polygonDiv d-flex align-items-center justify-content-center">
                    <img src={img4} alt="" />
                  </div>
                  <h5 className="fw-bold">Gold Loan</h5>
                  <p className="services_para">
                    sit amet, consectetur adipiscing elit. Nulla convallis
                    libero eget ligula feugiat, sit amet ullamcorper mi commodo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoPlay={true}
          swipeable={true}
          modules={[Pagination]}
          className="mySwiper respServices_bg mx-4"
        >
          <SwiperSlide>
            {" "}
            <div className="services_card">
              <div className="polygonDiv d-flex align-items-center justify-content-center">
                <img src={img1} alt="" />
              </div>
              <h5 className="fw-bold">Personal Loan</h5>
              <p className="services_para">
                sit amet, consectetur adipiscing elit. Nulla convallis libero
                eget ligula feugiat, sit amet ullamcorper mi commodo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="services_card">
              <div className="polygonDiv d-flex align-items-center justify-content-center">
                <img src={img2} alt="" />
              </div>
              <h5 className="fw-bold">Business Loan</h5>
              <p className="services_para">
                sit amet, consectetur adipiscing elit. Nulla convallis libero
                eget ligula feugiat, sit amet ullamcorper mi commodo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="services_card">
              <div className="polygonDiv d-flex align-items-center justify-content-center">
                <img src={img3} alt="" />
              </div>
              <h5 className="fw-bold">Home Loan</h5>
              <p className="services_para">
                sit amet, consectetur adipiscing elit. Nulla convallis libero
                eget ligula feugiat, sit amet ullamcorper mi commodo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="services_card">
              <div className="polygonDiv d-flex align-items-center justify-content-center">
                <img src={img4} alt="" />
              </div>
              <h5 className="fw-bold">Gold Loan</h5>
              <p className="services_para">
                sit amet, consectetur adipiscing elit. Nulla convallis libero
                eget ligula feugiat, sit amet ullamcorper mi commodo.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Services;
