import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { auth } from "../../firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";

const OTPModal = ({ phone, show, onHide }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Initialize with an array of 6 empty strings
  const [error, setError] = useState("");
  const [resendText, setResendText] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field
      if (value && index < 5) {
        const nextInput = e.target.nextSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  const submitOTP = (e) => {
    e.preventDefault();
    const code = otp.join("");
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/loan");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        onSignInSubmit();
      },
    });
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (otp.join("").length !== 6) {
      return setError("Please enter a valid OTP.");
    }

    // Verify the entered OTP
    const code = otp.join("");
    const appVerifier = window.recaptchaVerifier;
    const authInstance = getAuth();

    signInWithPhoneNumber(authInstance, phone, appVerifier, code)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const resendOTP = () => {
    setIsResending(true);
    setResendText("Resending OTP...");

    // Configure the RecaptchaVerifier
    configureCaptcha();

    // Resend the OTP
    const appVerifier = window.recaptchaVerifier;
    const authInstance = getAuth();

    signInWithPhoneNumber(authInstance, phone, appVerifier)
      .then((confirmationResult) => {
        setIsResending(false);
        setResendText("OTP Resent");
      })
      .catch((error) => {
        setIsResending(false);
        setResendText("Resend OTP");

        setError(error.message);
      });
  };

  return (
    <>
      <Modal show={show} onHide={onHide} className="settings-modal">
        <div className="rounded newchat">
          <div
            className="p-4 rounded mx-auto"
            style={{
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(5px)",
            }}
          >
            <h3 className="text-light text-center">Account Verification</h3>
            <p className="fs-14 text-light text-center">
              You are one step away! Enter OTP received on your Mobile number.
            </p>
            <form className="d-flex justify-content-center gap-3">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={value}
                  className="otpInput"
                  onChange={(e) => handleInputChange(e, index)}
                />
              ))}
            </form>{" "}
            <button
              type="submit"
              onClick={submitOTP}
              className="w-100 mt-2 btn bg-orange py-2 text-light mt-2 px-4"
            >
              Submit
            </button>
            <br />
            <p className="fs-13 text-center text-light mt-3">
              Didn't receive an OTP.{" "}
              <span onClick={resendOTP} className="text-orange">
                {" "}
                {isResending ? resendText : "Resend"}
              </span>{" "}
            </p>
            {/* <button
              onClick={resendOTP}
              className="btn bg-orange py-2 text-light mt-2 px-4"
              disabled={isResending}
            ></button> */}
            <br />
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OTPModal;
// https://sendgb.com/wD5zFqjoYU0
// https://sendgb.com/fIUQwEO1X5R
// https://sendgb.com/fIUQwEO1X5R