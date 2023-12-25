// import React from "react";
// import img1 from "../../images/testimonial1.png";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Testimonial = () => {
//   return (
//     <>
//       <h2 className="fw-900 mt-5 text-center text-blue">
//         What Client Says About Us
//       </h2>
//       <div className="card border-0 col-md-7 mx-auto mt-5 mb-5 my-0">
//         <Carousel interval={100000}>
//           <Carousel.Item>
//             <div className="carousel-caption">
//               <div className="d-flex flex-wrap CrouselFlex">
//                 <div className="col-sm-3">
//                   <img src={img1} alt="" className="rounded-circle img-fluid" />
//                 </div>
//                 <div
//                   className="col-sm-9"
//                   style={{ borderLeft: "2px solid gray" }}
//                 >
//                   <small>
//                     sit amet, consectetur adipiscing elit. Nulla convallis
//                     libero eget ligula feugiat, sit amet ullamcorper mi
//                     commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.
//                   </small>
//                   <h6 className="smallest mute fw-bold mt-2">James Williams</h6>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             <div className="carousel-caption">
//               <div className="d-flex flex-wrap CrouselFlex">
//                 <div className="col-sm-3">
//                   <img src={img1} alt="" className="rounded-circle img-fluid" />
//                 </div>
//                 <div
//                   className="col-sm-9"
//                   style={{ borderLeft: "2px solid gray" }}
//                 >
//                   <small>
//                     sit amet, consectetur adipiscing elit. Nulla convallis
//                     libero eget ligula feugiat, sit amet ullamcorper mi
//                     commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.
//                   </small>
//                   <h6 className="smallest mute fw-bold mt-2">James Williams</h6>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             <div className="carousel-caption">
//               <div className="d-flex flex-wrap CrouselFlex">
//                 <div className="col-sm-3">
//                   <img src={img1} alt="" className="rounded-circle img-fluid" />
//                 </div>
//                 <div
//                   className="col-sm-9"
//                   style={{ borderLeft: "2px solid gray" }}
//                 >
//                   <small>
//                     sit amet, consectetur adipiscing elit. Nulla convallis
//                     libero eget ligula feugiat, sit amet ullamcorper mi
//                     commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.sit amet, consectetur adipiscing elit. Nulla
//                     convallis libero eget ligula feugiat, sit amet ullamcorper
//                     mi commodo.
//                   </small>
//                   <h6 className="smallest mute fw-bold mt-2">James Williams</h6>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </>
//   );
// };

// export default Testimonial;

import React from "react";
import img1 from "../../images/testmale.jpeg";
import img2 from "../../images/testimonial1.png";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonial = () => {
  return (
    <>
      <h2 className="fw-900 mt-5 text-center text-blue">
        What Client Says About Us
      </h2>
      <div className="card border-0 col-md-7 mx-auto mt-5 mb-5 my-0">
        <Carousel interval={100000}>
          <Carousel.Item>
            <div className="carousel-caption">
              <div className="d-flex flex-wrap CrouselFlex">
                <div className="col-sm-3">
                  <img src={img1} alt="" className="rounded-circle img-fluid" />
                </div>
                <div
                  className="col-sm-9"
                  style={{ borderLeft: "2px solid gray" }}
                >
                  <small>
                    Positive experience with this company. Smooth application
                    process, quick approval, and competitive rates. Professional
                    and responsive customer service. Highly recommend for anyone
                    seeking a reliable lending partner.
                  </small>
                  <h6 className="smallest mute fw-bold mt-2">Arjun Singh</h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-caption">
              <div className="d-flex flex-wrap CrouselFlex">
                <div className="col-sm-3">
                  <img src={img2} alt="" className="rounded-circle img-fluid" />
                </div>
                <div
                  className="col-sm-9"
                  style={{ borderLeft: "2px solid gray" }}
                >
                  <small>
                    Positive experience with this company. Smooth application
                    process, quick approval, and competitive rates. Professional
                    and responsive customer service. Highly recommend for anyone
                    seeking a reliable lending partner.
                  </small>
                  <h6 className="smallest mute fw-bold mt-2">
                    Salina Williams
                  </h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-caption">
              <div className="d-flex flex-wrap CrouselFlex">
                <div className="col-sm-3">
                  <img src={img1} alt="" className="rounded-circle img-fluid" />
                </div>
                <div
                  className="col-sm-9"
                  style={{ borderLeft: "2px solid gray" }}
                >
                  <small>
                    Positive experience with this company. Smooth application
                    process, quick approval, and competitive rates. Professional
                    and responsive customer service. Highly recommend for anyone
                    seeking a reliable lending partner.
                  </small>
                  <h6 className="smallest mute fw-bold mt-2">James Williams</h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
