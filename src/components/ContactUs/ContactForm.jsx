import React from "react";
import icon1 from "../../images/phone.png";
import icon2 from "../../images/envelop.png";
import icon3 from "../../images/location.png";

const ContactForm = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 InfoContact">
            <div className=" p-4 shadow rounded">
              <h2 className="fw-bold text-blue my-2 mb-3">
                Get in Touch With Us
              </h2>
              <form>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control shadow-none inputDesign"
                      placeholder="Enter Your Name"
                      aria-label="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label class="form-label">Email Address</label>
                    <input
                      type="text"
                      class="form-control shadow-none inputDesign"
                      placeholder="Enter Your Email Address"
                      aria-label="Email Address"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label class="form-label">Phone Number</label>
                    <input
                      type="text"
                      class="form-control shadow-none inputDesign"
                      placeholder="Enter Your Phone Number"
                      aria-label="Phone Number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label class="form-label">City</label>
                    <input
                      type="text"
                      class="form-control shadow-none inputDesign"
                      placeholder="Select Your City"
                      aria-label="City"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label class="form-label">Message</label>
                  <textarea
                    type="text"
                    style={{ resize: "none", height: "100px" }}
                    class="form-control shadow-none inputDesign"
                    placeholder="Write Message Here"
                    aria-label="Message"
                  ></textarea>
                </div>
                <button className="btn bg-orange py-2 text-light px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4 moreInfoContact">
            <div className=" p-4 shadow rounded">
              <h2 className="text-blue fw-bold mb-2">Need More Help?</h2>
              <div
                className="d-flex align-items-center gap-3 px-4 py-4 rounded mb-4"
                style={{
                  background:
                    "linear-gradient( rgba(226, 106, 79, 0.04), rgba(226, 106, 79, 0.04)) ",
                }}
              >
                <div
                  className="bg-white rounded-pill d-flex justify-content-center align-items-center"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    border: "1px solid rgba(226, 106, 79, 0.21)",
                  }}
                >
                  <img src={icon1} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0">Call Now</h5>
                  <small>(123) 456-7891</small>
                  <small>(907) 456-7891</small>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 px-4 py-4 rounded mb-4"
                style={{
                  background:
                    "linear-gradient( rgba(226, 106, 79, 0.04), rgba(226, 106, 79, 0.04)) ",
                }}
              >
                <div
                  className="bg-white rounded-pill d-flex justify-content-center align-items-center"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    border: "1px solid rgba(226, 106, 79, 0.21)",
                  }}
                >
                  <img src={icon2} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0">Email Address</h5>
                  <small>info@example.com</small>
                  <small>info@example.com</small>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 px-4 py-4 rounded mb-4"
                style={{
                  background:
                    "linear-gradient( rgba(226, 106, 79, 0.04), rgba(226, 106, 79, 0.04)) ",
                }}
              >
                <div
                  className="bg-white rounded-pill d-flex justify-content-center align-items-center"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    border: "1px solid rgba(226, 106, 79, 0.21)",
                  }}
                >
                  <img src={icon3} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="mb-0">Location</h5>
                  <small>Royal Ln. Mesa, New</small>
                  <small>Jersey 45463</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
