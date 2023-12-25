import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import OTPModal from "./OTPModal";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { auth } from "../../firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";

// import { useUserAuth } from "../../context/UserAuthContext";

const HeroSection = () => {
  const [otpModal, setOtpModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  // const { setUpRecaptcha } = useUserAuth();

  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      },
    });
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    setError("");
    if (name.trim() === "") {
      return setError("Please enter your Name");
    }
    if (phone === "" || phone === undefined) {
      return setError("Please enter a valid Phone Number");
    }
    configureCaptcha();

    const phoneNumber = "+91" + phone;
    setPhone(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setOtpModal(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="HeroImage">
        <Navbar />
        {otpModal && (
          <OTPModal
            phone={phone}
            show={setOtpModal}
            onHide={() => setOtpModal(false)}
          />
        )}
        <div
          className="container p-Resp d-flex align-items-center"
          style={{ padding: "7rem 1rem" }}
        >
          <div className="row Home_mainSection gap-4 justify-content-between">
            <div className="col-md-5">
              <h1
                className="fw-bold homeMainHeading"
                style={{ lineHeight: "60px" }}
              >
                Easy <span className="text-orange"> Online Loan</span> Solutions
              </h1>
              <p className="Hero_para">
                sit amet, consectetur adipiscing elit. Nulla convallis libero
                eget ligula feugiat, sit amet ullamcorper mi commodo.
              </p>
              <button className="btn bg-orange py-2 text-light px-4">
                Learn more
              </button>
            </div>
            <div className="normalForm_heroHome" style={{ width: "22rem" }}>
              <form
                onSubmit={onSignInSubmit}
                className="form_heroHome d-flex flex-column justify-content-center align-items-center"
              >
                <div id="sign-in-button"></div>
                <h4 className="fw-bold text-light mb-0">Get Instant Loan</h4>
                <p className="text-light fs-14">
                  libero eget ligula feugiat, sit amet
                </p>
                {error && <Alert variant="danger">{error}</Alert>}
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control whiteplaceholder shadow-none border-0"
                  style={{ background: "rgba(173, 172, 172, 0.7)" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="form-control whiteplaceholder shadow-none border-0 mt-3 mb-3"
                  style={{ background: "rgba(173, 172, 172, 0.7)" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {/* <div id="recaptcha-container"></div> */}
                <small className="text-light text-center">
                  By Clicking “Apply Now” I agree to the{" "}
                  <span className="text-orange"> terms & condition</span> and{" "}
                  <span className="text-orange"> privacy and policy</span>
                </small>

                <button
                  className="w-100 btn bg-orange py-2 text-light mt-2 px-4"
                  type="submit"
                >
                  Apply Now
                </button>
              </form>
            </div>
            {/* responsive form */}
            <div className="respForm_heroHome" style={{ width: "22rem" }}>
              <form
                onSubmit={onSignInSubmit}
                action=""
                className="bg-light p-3 d-flex flex-column justify-content-center align-items-center"
              >
                <h4 className="fw-bold mb-0">Get Instant Loan</h4>
                <p className="fs-14">libero eget ligula feugiat, sit amet</p>
                {error && <Alert variant="danger">{error}</Alert>}

                <input
                  type="text"
                  placeholder="Name"
                  className="form-control shadow-none "
                  style={{ border: "1px solid #ccc" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="form-control shadow-none  mt-3 mb-3"
                  style={{ border: "1px solid #ccc" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <small className="text-center">
                  By Clicking “Apply Now” I agree to the{" "}
                  <span className="text-orange"> terms & condition</span> and{" "}
                  <span className="text-orange"> privacy and policy</span>
                </small>

                <button
                  className="w-100 btn bg-orange py-2 text-light mt-2 px-4"
                  type="submit"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
