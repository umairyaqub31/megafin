import React, { useState } from "react";
import { BsCheckLg, BsPersonVcardFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";

import Footer from "../Footer";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useFirebase } from "../../context/context";
import { Alert } from "react-bootstrap";

const AdharDetail = ({ setSelected }) => {
  const firebase = useFirebase();
  const [adhar, setAdhar] = useState("");
  const [pan, setPan] = useState("");
  const [error, setError] = useState("");

  const handleAdharChange = (e) => {
    const input = e.target.value;

    const formattedAdhar = input
      .replace(/[^0-9]/g, "")
      .replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")
      .slice(0, 14);

    setAdhar(formattedAdhar);
  };
  const handlePanChange = (e) => {
    const input = e.target.value;

    const formattedPan = input
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase()
      .slice(0, 10);

    setPan(formattedPan);
  };
  const adharDetailSubmit = async (e) => {
    e.preventDefault();
    if (adhar === "" || pan === "") {
      return setError("input is required!");
    }
    try {
      const res = await firebase.addAdhar(adhar, pan);
      if (res) {
        setSelected("user");
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
        <div className="TextBanner_about px-4">
          <div>
            <h3 className="text-light fw-bold">Apply For Your Loan</h3>
            <p className="text-light text-center">
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
            <div className="stepBox inProgress">
              <p className="stepNum position-relative position-relative">
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
            <div className="stepBox ">
              <p className="stepNum position-relative">
                <BiSolidUser className="icons" />{" "}
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 2</p>
              <span className="stepTx">User Details</span>
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
                <AiFillBank className="icons" />
                <BsCheckLg
                  size={20}
                  className="position-absolute d-none text-light"
                />
              </p>
              <p className="mb-0">Step 3</p>
              <span className="stepTx">Loan Details</span>
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
          <form className="mt-5" onSubmit={adharDetailSubmit}>
            <div class="mb-4 mt-4">
              <label for="exampleInputEmail1" class="form-label fs-15">
                Adhar Card
              </label>
              <input
                type="text"
                placeholder="Etner your 12 digits aadhar card number"
                class="form-control inputDesign shadow-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={adhar}
                onChange={handleAdharChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fs-15">
                Pan Number
              </label>
              <input
                type="text"
                placeholder="Enter your pan number"
                class="form-control inputDesign shadow-none"
                id="exampleInputPassword1"
                value={pan}
                onChange={handlePanChange}
              />
            </div>
            {error && <Alert variant="danger">{error}</Alert>}

            <button
              type="submit"
              className="btn shadow-none w-100 bg-orange py-2 mt-4 text-light px-4"
            >
              Next
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdharDetail;
