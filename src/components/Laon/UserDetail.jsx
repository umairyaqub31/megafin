import React, { useEffect, useState } from "react";
import { BsCheckLg, BsPersonVcardFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useFirebase } from "../../context/context";
import { Alert } from "react-bootstrap";

const UserDetail = ({ setSelected, setUserId }) => {
  const firebase = useFirebase();
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [userDetail, setUserDetail] = useState({
    name: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    address: "",
    pinCode: "",
    occupation: "Select occupation",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };
  const userDetailSubmit = async (e) => {
    e.preventDefault();
    if (
      userDetail.name === "" ||
      userDetail.address === "" ||
      userDetail.phoneNumber === "" ||
      userDetail.whatsappNumber === "" ||
      userDetail.pinCode === "" ||
      userDetail.occupation === ""
    ) {
      return setError("input is required!");
    }
    try {
      const res = await firebase.addUserDetail(userDetail, city, state);
      if (res) {
        console.log(res.id);
        setUserId(res.id);
        setSelected("laon");
        firebase.updateUserName(userDetail.name);
        firebase.updateMobile(userDetail.whatsappNumber);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const fetchCityAndState = async (pinCode) => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      const data = await response.json();
      if (data && data.length > 0 && data[0].Status === "Success") {
        const { PostOffice } = data[0];
        const postOffice = PostOffice[0];
        setCity(postOffice.District);
        setState(postOffice.State);
      } else {
        setCity("");
        setState("");
      }
    } catch (error) {
      console.error("Error fetching data from the API", error);
      setCity("");
      setState("");
    }
  };
  useEffect(() => {
    if (userDetail.pinCode) {
      fetchCityAndState(userDetail.pinCode);
    }
  }, [userDetail.pinCode]);
  return (
    <>
      <Navbar />
      {/* ////banner */}
      <div className="bannerContact">
        <div className="TextBanner_about" style={{ padding: "1.3rem 5rem" }}>
          <div>
            <h2 className="text-light fw-bold">User Details</h2>
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
                <BsPersonVcardFill className="icons" />
                <BsCheckLg
                  className="position-absolute d-none text-light"
                  size={20}
                />{" "}
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
            <div className="stepBox inProgress">
              <p className="stepNum position-relative">
                <BiSolidUser className="icons" />
                <BsCheckLg
                  className="position-absolute d-none text-light"
                  size={20}
                />
              </p>
              <p className="mb-0">Step 2</p>
              <span className="stepTx">User Details</span>
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
                <AiFillBank className="icons" />
                <BsCheckLg
                  className="position-absolute d-none text-light"
                  size={20}
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
                  className="position-absolute d-none text-light"
                  size={20}
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
                  className="position-absolute d-none text-light"
                  size={20}
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
          <form onSubmit={userDetailSubmit} className="mt-5">
            <div className="row mb-4">
              <div className="col-md-6">
                <label class="form-label fs-14">Name</label>
                <input
                  type="text"
                  class="form-control shadow-none inputDesign"
                  placeholder=""
                  aria-label="name"
                  name="name"
                  value={userDetail.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label class="form-label fs-14">Phone Number</label>
                <input
                  type="number"
                  class="form-control shadow-none inputDesign"
                  placeholder=""
                  aria-label="phoneNumber"
                  name="phoneNumber"
                  value={userDetail.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label class="form-label fs-14">WhatsApp Number</label>
                <input
                  type="number"
                  class="form-control shadow-none inputDesign"
                  placeholder=""
                  aria-label="whatsappNumber"
                  name="whatsappNumber"
                  value={userDetail.whatsappNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label class="form-label fs-14">Email Address</label>
                <input
                  type="email"
                  class="form-control shadow-none inputDesign"
                  placeholder=""
                  aria-label="email"
                  name="email"
                  value={userDetail.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label class="form-label fs-14">Address</label>
              <textarea
                type="text"
                style={{ resize: "none", height: "100px" }}
                class="form-control shadow-none inputDesign"
                placeholder=""
                aria-label="address"
                name="address"
                value={userDetail.address}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <label class="form-label fs-14">Pin-Code</label>
            <input
              type="number"
              class="form-control shadow-none inputDesign col-md-6 mb-4"
              placeholder=""
              aria-label="pinCode"
              name="pinCode"
              value={userDetail.pinCode}
              onChange={handleInputChange}
            />
            <div className="row mb-4">
              <div className="col-md-6">
                <label class="form-label fs-14">City</label>
                <input
                  type="text"
                  class="form-control shadow-none inputDesign"
                  placeholder=""
                  aria-label="name"
                  value={city}
                  // disabled
                />
              </div>
              <div className="col-md-6">
                <label class="form-label fs-14">State</label>
                <input
                  type="text"
                  class="form-control shadow-none inputDesign"
                  placeholder=""
                  aria-label="phoneNumber"
                  value={state || ""}
                  // disabled
                />
              </div>
            </div>
            <p className="mb-4 fs-14 fw-500">Select Occupation</p>
            <select
              class="form-select inputDesign text-dark fs-14 mb-4 shadow-none"
              aria-label="Default select example"
              name="occupation"
              value={userDetail.occupation}
              onChange={handleInputChange}
            >
              <option selected>Select occupation</option>
              <option value="self employed">Self Employed</option>
              <option value="business">Business</option>
              <option value="salaried">Salaried</option>
              <option value="other">Other</option>
            </select>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="row">
              <div className="col-md-6 mt-2">
                <button
                  onClick={() => setSelected("adhar")}
                  className="btn py-2 text-light w-100 px-4"
                  style={{ backgroundColor: "#868180" }}
                >
                  Previous
                </button>
              </div>
              <div className="col-md-6 mt-2">
                <button
                  type="submit"
                  className="btn bg-orange py-2 text-light w-100 px-4"
                >
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

export default UserDetail;
