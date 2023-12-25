import React, { useState } from "react";
import { BsCheckLg, BsPersonVcardFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Alert } from "react-bootstrap";
import { useFirebase } from "../../context/context";

const BankDetail = ({ setSelected, userId, loanId, setBankId}) => {
  // const firebase = useFirebase();

  // const [error, setError] = useState("");

  // const [bankDetail, setBankDetail] = useState({
  //   name: "",
  //   ifscCode: "",
  //   bankAccountNumber: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "ifscCode") {
  //     const ifscRegex = /^[A-Z]{4}0[0-9A-Z]{6}$/;
  //     if (!ifscRegex.test(value)) {
  //       setError("Invalid IFSC code format");
  //     } else {
  //       setError("");
  //     }
  //   }
  //   setBankDetail({ ...bankDetail, [name]: value });
  // };
  // const bankDetailSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     bankDetail.name === "" ||
  //     bankDetail.ifscCode === "" ||
  //     bankDetail.bankAccountNumber === ""
  //   ) {
  //     return setError("input is required!");
  //   }
  //   try {
  //     const res = await firebase.addBankDetail(bankDetail);
  //     if (res) {
  //       // setSelected("success");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  const firebase = useFirebase();
  const [error, setError] = useState("");
  const [bankDetail, setBankDetail] = useState({
    name: "",
    ifscCode: "",
    bankAccountNumber: "",
  });
  const [bankAccountName, setBankAccountName] = useState("");

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "ifscCode") {
      processedValue = value.toUpperCase();
    }

    if (name === "ifscCode") {
      const ifscRegex = /^[A-Z]{4}0[0-9A-Z]{6}$/;
      if (!ifscRegex.test(processedValue)) {
        setError("Invalid IFSC code format");
        setBankAccountName(""); 
      } else {
        setError("");
        try {
          const response = await fetch(
            `https://ifsc.razorpay.com/${processedValue}`
          );
          if (response.ok) {
            const data = await response.json();
            const accountName = data.BANK;
            setBankAccountName(accountName);
          }
        } catch (error) {
          setError("Error fetching bank details");
        }
      }
    }

    setBankDetail({ ...bankDetail, [name]: processedValue });
  };

  const bankDetailSubmit = async (e) => {
    e.preventDefault();
    if (bankDetail.name === "" || bankDetail.ifscCode === "") {
      return setError("input is required!");
    }
    try {
      const res = await firebase.addBankDetail(bankDetail, bankAccountName, userId);
      if (res) {
        setBankId(res.id);
        await firebase.updateLoanDetail(userId, res.id, loanId);
        setSelected("success");
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
              <p className="stepNum position-relative">
                {" "}
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
                <BsPersonVcardFill className="icons" />
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
              {" "}
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
            <div className="stepBox inProgress">
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

          <form className="mt-5">
            <div class="mb-4 mt-4">
              <label for="exampleInputEmail1" class="form-label fs-14">
                Acount Holder Name
              </label>
              <input
                type="text"
                placeholder="Kumar"
                class="form-control inputDesign shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                value={bankDetail.name}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-4 mt-4">
              <label for="exampleInputEmail1" class="form-label fs-14">
                Acount Number
              </label>
              <input
                type="text"
                placeholder="Enter Account Number"
                class="form-control inputDesign shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="bankAccountNumber"
                value={bankDetail.bankAccountNumber}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fs-14">
                IFSC Code
              </label>
              <input
                type="text"
                placeholder="IFSC Code"
                class="form-control inputDesign shadow-none"
                id="exampleInputPassword1"
                name="ifscCode"
                value={bankDetail.ifscCode}
                onChange={handleInputChange}
              />
            </div>
            {bankAccountName && (
              <div className="mb-3">
                <label class="form-label fs-14">Bank Account Name</label>
                <input
                  type="text"
                  class="form-control inputDesign shadow-none"
                  disabled
                  value={bankAccountName}
                />
              </div>
            )}
          </form>
          {error && <Alert variant="danger">{error}</Alert>}

          <div className="row">
            <div className="col-md-6 mt-2">
              <button
                onClick={() => setSelected("loan")}
                className="btn py-2 text-light w-100 px-4"
                style={{ backgroundColor: "#868180" }}
              >
                Previous
              </button>
            </div>
            <div className="col-md-6 mt-2">
              <button
                onClick={bankDetailSubmit}
                className="btn bg-orange py-2 text-light w-100 px-4"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BankDetail;
