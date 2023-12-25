import React from "react";
import { BsCheckLg, BsPersonVcardFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { useFirebase } from "../../context/context";
import check from "../../images/check 1.png";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Successfull = ({ setSelected }) => {
  const firebase = useFirebase();
  const userName = firebase.userName;
  const loanAmount = firebase.totalAmount;
  const installment = firebase.installment;
  return (
    <>
      <Navbar />
      {/* ////banner */}
      <div className="bannerContact">
        <div className="TextBanner_about px-4">
          <div>
            <h2 className="text-light fw-bold">Bank Details</h2>
            <p className="text-light">
              Home <LiaGreaterThanSolid />{" "}
              <span className="text-orange">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
      {/* ////form */}
      <div className="container my-5">
        <div className="col-md-7 shadow mx-auto p-4 rounded border-dark">
          <div className="d-flex justify-content-between w-100 stepsContainer">
            <div className="stepBox completed">
              {" "}
              <p className="stepNum position-relative">
                {" "}
                <BsPersonVcardFill className="icons" />
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 1</p>
              <span className="stepTx">Adhar Details</span>
              <button
                className="btn py-0 mt-2 text-green fs-13"
                style={{
                  background:
                    "linear-gradient( rgba(191, 218, 198, 0.6),rgba(191, 218, 198, 0.6))",
                  border: "1px solid #19AD16",
                }}
              >
                Completed
              </button>
            </div>
            <div className="stepBox completed">
              <p className="stepNum position-relative">
                <BiSolidUser className="icons" />
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 2</p>
              <span className="stepTx">User Details</span>
              <button
                className="btn py-0 mt-2 text-green fs-13"
                style={{
                  background:
                    "linear-gradient( rgba(191, 218, 198, 0.6),rgba(191, 218, 198, 0.6))",
                  border: "1px solid #19AD16",
                }}
              >
                Completed
              </button>
            </div>
            <div className="stepBox completed">
              {" "}
              <p className="stepNum position-relative">
                <AiFillBank className="icons" />{" "}
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 3</p>
              <span className="stepTx">Loan Details</span>
              <button
                className="btn py-0 mt-2 text-green fs-13"
                style={{
                  background:
                    "linear-gradient( rgba(191, 218, 198, 0.6),rgba(191, 218, 198, 0.6))",
                  border: "1px solid #19AD16",
                }}
              >
                Completed
              </button>
            </div>
            <div className="stepBox completed">
              <p className="stepNum position-relative">
                <FaAddressCard className="icons" />{" "}
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 4</p>
              <span className="stepTx">Bank Details</span>
              <button
                className="btn py-0 mt-2 text-green fs-13"
                style={{
                  background:
                    "linear-gradient( rgba(191, 218, 198, 0.6),rgba(191, 218, 198, 0.6))",
                  border: "1px solid #19AD16",
                }}
              >
                Completed
              </button>
            </div>
            <div className="stepBox inProgress">
              <p className="stepNum position-relative">
                <BsCheckLg className="icons" />{" "}
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 5</p>
              <span className="stepTx">Successfull</span>
              <button
                className="btn py-0 mt-2 text-orange fs-13"
                style={{
                  background:
                    "linear-gradient(rgba(226, 106, 79, 0.04), rgba(226, 106, 79, 0.04))",
                  border: "1px solid #FACBC0",
                }}
              >
                In Progress
              </button>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
            <img className="icons" src={check} width={150} alt="" />
            <h4 className="fw-bold my-3 mt-4">Congratulations {userName}</h4>
            <p className="mb-0 fs-14 text-center">
              Your Education Loan application is submitted. you have
              successfully applied for the loan of rs.{loanAmount}. the monthly
              installment you will have pay is {installment}
            </p>
            <button
              onClick={() => setSelected("payment")}
              className="btn shadow-none w-100 bg-orange py-2 mt-4 text-light px-4"
            >
              Submit Application
            </button>
            <p className="fw-bold mt-3">
              You are just a step away to loan disbursal. Submited and pay your
              one Time Facilitaion Fee to process your Application.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Successfull;
