import React, { useEffect, useState } from "react";
import { BsCheckLg, BsPersonVcardFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { Alert } from "react-bootstrap";
import { useFirebase } from "../../context/context";

import Footer from "../Footer";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";

const LoanDetail = ({ setSelected, setLoanId }) => {
  const firebase = useFirebase();

  const [error, setError] = useState("");
  const [loanDetail, setLoanDetail] = useState({
    loanAmount: "",
    loanTenure: "Loan Tenure",
    typeOfLoan: "Type Of Loan",
    totalInterestAmount: "Rs.7.99",
    emi: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanDetail({ ...loanDetail, [name]: value });
  };
  const calculateEmi = () => {
    const principal = parseFloat(loanDetail.loanAmount);
    const rateOfInterest = 7.99 / 12 / 100; // Monthly interest rate
    const numberOfPayments = parseFloat(loanDetail.loanTenure) * 12; // Monthly tenure

    if (
      !isNaN(principal) &&
      !isNaN(numberOfPayments) &&
      principal > 0 &&
      numberOfPayments > 0
    ) {
      const emi =
        (principal *
          rateOfInterest *
          Math.pow(1 + rateOfInterest, numberOfPayments)) /
        (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

      // Round the EMI to 2 decimal places
      return emi.toFixed(2);
    }

    return ""; // Return an empty string if any input is invalid
  };
  useEffect(() => {
    const emiValue = calculateEmi();
    setLoanDetail({ ...loanDetail, emi: emiValue });
  }, [loanDetail.loanAmount, loanDetail.loanTenure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loanAmountNumeric = parseFloat(loanDetail.loanAmount);

    if (
      isNaN(loanAmountNumeric) ||
      loanAmountNumeric < 100000 ||
      loanAmountNumeric > 2500000
    ) {
      return setError("Loan amount must be between ₹100,000 to ₹25,00000");
    }
    if (
      loanDetail.loanAmount === "" ||
      loanDetail.loanTenure === "" ||
      loanDetail.typeOfLoan === ""
      // loanDetail.totalInterestAmount === "" ||
      // loanDetail.emi === ""
    ) {
      return setError("input is required!");
    }
    try {
      const res = await firebase.addLoanDetail(loanDetail);
      if (res) {
        setLoanId(res.id);
        setSelected("bank");
        firebase.updateTotalAmount(loanDetail.loanAmount);
        firebase.monthlyIstallment(loanDetail.emi);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      {/* ////banner */}
      <div className="bannerContact">
        <div className="TextBanner_about" style={{ padding: "1.3rem 5rem" }}>
          <div>
            <h2 className="text-light fw-bold">Loan Details</h2>
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
              <p className="stepNum position-relative">
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
            <div className="stepBox inProgress">
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
            <div className="stepBox">
              <p className="stepNum position-relative">
                <FaAddressCard className="icons" />
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 4</p>
              <span className="stepTx">Bank Details</span>
              <button
                className="btn py-0 text-orange bg-light mt-2 fs-13 text-secondary"
                style={{
                  border: "1px solid gray",
                }}
              >
                Pending
              </button>
            </div>
            <div className="stepBox">
              <p className="stepNum position-relative">
                <BsCheckLg className="icons" />
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 5</p>
              <span className="stepTx">Successfull</span>
              <button
                className="btn py-0 text-orange bg-light mt-2 fs-13 text-secondary"
                style={{
                  border: "1px solid gray",
                }}
              >
                Pending
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-3">
              <label class="form-label fs-14">Loan Amount</label>
              <input
                type="text"
                class="form-control shadow-none inputDesign"
                placeholder="Loan Amount"
                aria-label="Message"
                name="loanAmount"
                value={loanDetail.loanAmount}
                onChange={handleInputChange}
              />
            </div>
            <p className="mb-3 fs-14 fw-600">
              Please enter a number from ₹100,000 t0 ₹ 25,00000
            </p>
            <div className="row">
              <div className="col-md-6">
                <label class="form-label fs-14">Loan Tenure</label>
                <select
                  class="form-select inputDesign text-dark fs-14 mb-4 shadow-none"
                  aria-label="Default select example"
                  name="loanTenure"
                  value={loanDetail.loanTenure}
                  onChange={handleInputChange}
                >
                  <option value="0">Loan Tenure</option>
                  <option value="1">One Years</option>
                  <option value="2">Two Years</option>
                  <option value="3">Three Years</option>
                  <option value="4">Four Years</option>
                  <option value="5">Five Years</option>
                  <option value="6">Six Years</option>
                  <option value="7">Seven Years</option>
                  <option value="8">Eight Years</option>
                  <option value="9">Nine Years</option>
                  <option value="10">Ten Years</option>
                </select>
              </div>
              <div className="col-md-6">
                <label class="form-label fs-14">Type Of Loan</label>
                <select
                  class="form-select inputDesign text-dark fs-14 mb-4 shadow-none"
                  aria-label="Default select example"
                  name="typeOfLoan"
                  value={loanDetail.typeOfLoan}
                  onChange={handleInputChange}
                >
                  <option selected>Type Of Loan</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="home">Home</option>
                  <option value="educational">Educational</option>
                  <option value="loan against property">
                    Loan Against Property
                  </option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label class="form-label fs-14">Total interest Amount</label>
                <input
                  type="text"
                  class="form-control shadow-none inputDesign"
                  // placeholder="Rs.7.99"
                  aria-label="Phone Number"
                  disabled
                  value={loanDetail.totalInterestAmount}
                />
              </div>
              <div className="col-md-6">
                <label class="form-label fs-14">EMI (INR)</label>
                <input
                  type="text"
                  class="form-control shadow-none inputDesign"
                  aria-label="City"
                  disabled
                  value={loanDetail.emi}
                />
              </div>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="row">
              <div className="col-md-6 mt-2">
                <button
                  type="submit"
                  onClick={() => setSelected("user")}
                  className="btn py-2 text-light w-100 px-4"
                  style={{ backgroundColor: "#868180" }}
                >
                  Previous
                </button>
              </div>
              <div className="col-md-6 mt-2">
                <button className="btn bg-orange py-2 text-light w-100 px-4">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoanDetail;
