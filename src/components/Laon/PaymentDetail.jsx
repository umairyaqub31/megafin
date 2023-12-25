import React from "react";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Footer from "../Footer";
import { useFirebase } from "../../context/context";

const PaymentDetail = ({ setSelected }) => {
  const firebase = useFirebase();
  const userName = firebase.userName;
  const mobile = firebase.mobile;
  return (
    <>
      <Navbar />
      {/* //banner  */}
      <div className="bannerContact">
        <div className="TextBanner_about px-4  w-50 mx-auto">
          <div>
            <h5 className="text-light fw-bold ">
              Your application is currently under process. Now, please make a
              one-time facilitation fee payment. After making the payment, your
              loan amount will be disbursed within one hour.
            </h5>
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
            <div className=" py-4 px-4 shadow rounded">
              <h4 className="fw-bold text-blue my-2">Payment Details</h4>
              <div className="d-flex ">
                <p className="fw-bold col-md-6 ps-0 ms-0">Order Id:</p>
                <div className="text-secondary col-md-6">PK987766666</div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="fw-bold col-md-6 ps-0 ms-0">Name:</p>
                <div className="text-secondary col-md-6">{userName}</div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="fw-bold col-md-6 ps-0 ms-0">Mobile No</p>
                <div className="text-secondary col-md-6">{mobile}</div>
              </div>
              <div className="d-flex justify-content-center">
                <p className="fw-bold col-md-6 ps-0 ms-0">Service Charge:</p>
                <div className="text-secondary col-md-6">90900</div>
              </div>
              <p className="fw-bold pt-2 pb-3">Select Payment Mode</p>
              <div
                className="ps-4 py-2 rounded"
                style={{ backgroundColor: "rgba(255, 235, 231, 1)" }}
              >
                <div class="form-check">
                  <input
                    class="form-check-input shadow-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    UPI
                  </label>
                </div>
              </div>
              <button
                onClick={() => setSelected("scan")}
                className="btn w-100 bg-orange py-2 text-light mt-3"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentDetail;
