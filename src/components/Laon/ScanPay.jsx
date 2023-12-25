import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Footer from "../Footer";
import img from "../../images/scan.png";
import icon from "../../images/arrow.png";
import OPTModal from "../Home/OTPModal";
import VerficationModal from "./VerficationModal";

const ScanPay = () => {
  const [settingsModal, setSettingsModal] = useState(false);

  const fileInput = useRef();

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Do something with the selected file
    }
  };

  return (
    <>
      <Navbar />
      {settingsModal && (
        <VerficationModal show={settingsModal} onHide={() => setSettingsModal(false)} />
      )}
      {/* //banner  */}
      <div className="bannerContact">
        <div className="TextBanner_about" style={{ padding: "1.3rem 5rem" }}>
          <div>
            <h2 className="text-light fw-bold">Payment</h2>
            <p className="text-light text-center">
              Home <LiaGreaterThanSolid />{" "}
              <span className="text-orange">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="mx-4 my-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className=" py-4 px-4 shadow rounded ">
              <div className="d-flex align-items-center justify-content-center">
                <img src={img} width={140} alt="" />
              </div>
              <p className="fw-bold mb-0 text-center mt-3">
                Scan To Pay $9999{" "}
              </p>
              <div class="content__or-text py-2">
                <span></span>
                <span>Or</span>
                <span></span>
              </div>
              <button className="btn w-100 bg-orange fs-13 py-2 text-light mb-2">
                Click to pay on UPI Apps
              </button>
              <p className="fs-13 mb-0 py-2 fw-bold">
                Upload Screenshot of Payment
              </p>
              <div>
                <button
                  className="btn w-100 py-2 shadow-none text-light mb-3 fs-13 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    backgroundColor: "rgba(242, 220, 215, 1)",
                    border: "1px solid #e06e53",
                  }}
                  onClick={handleButtonClick}
                >
                  <img src={icon} alt="" />
                  <span className="text-orange">Choose File</span>
                </button>
                <input
                  type="file"
                  ref={fileInput}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <button
                onClick={() => setSettingsModal(true)}
                className="btn w-100 bg-orange py-2 text-light fs-13"
              >
                Complete Your Transaction{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ScanPay;
