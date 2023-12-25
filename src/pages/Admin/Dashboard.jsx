import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getUsersDetail,
  getApplicationDetail,
  getUserDetail,
} from "../../services/dashboard";
import { GoBell } from "react-icons/go";
import logo from "../../images/logoSidebar.jpg";
import icon1 from "../../images/home.jpg";
import icon2 from "../../images/user.jpg";
import icon3 from "../../images/file.jpg";
import icon4 from "../../images/card.jpg";
import img from "../../images/admin.jpg";
import img1 from "../../images/ellips4.jpg";
import img2 from "../../images/whatsapp-icon.jpg";
import img3 from "../../images/gmail.jpg";
import img4 from "../../images/word.jpg";
import img5 from "../../images/pdf.jpg";
import { useFirebase } from "../../context/context";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CustomModal from "../../components/Modal";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentData, setCurrentData] = useState([]);
  const [searchparams] = useSearchParams();
  const whatsappNumber = searchparams.get("whatsappNumber");
  const [show, setShow] = useState(false);
  const [showAttach, setShowAttach] = useState(false);

  const [bankDetails, setBankDetails] = useState(null);

  const handleShow = () => setShow(true);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const firebase = useFirebase();

  useEffect(() => {
    if (activeMenu === "home") {
      getUserDetail(whatsappNumber).then((res) => {
        console.log("ress.....", res);
        setSelectedUser(res);
        // getPost(res.id);
      });
    } else if (activeMenu === "users") {
      getUsersDetail().then((res) => {
        setCurrentData(res);
      });
    } else if (activeMenu === "applications") {
      getApplicationDetail().then((res) => setCurrentData(res));
    }
  }, [activeMenu]);

  useEffect(() => {
    const testCombineData = async () => {
      try {
        // Call combineData
        const data = await firebase.combineData();

        console.log("combineData executed successfully", data);

        // Retrieve and log the combined data
        const combinedData = await firebase.getCombinedData();
        console.log("Combined Data:", combinedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the function within the effect hook to run when the component mounts
    testCombineData();
  }, [firebase]);

  const handleOpenAttach = () => {
    setShowAttach(true);
  };

  return (
    <>
      <div className="me-3">
        <div className="row">
          <div className="col-md-2">
            <div
              className="bg-blue px-2 py-4 d-flex flex-column justify-content-between"
              style={{ height: "180vh" }}
            >
              <div>
                <img src={logo} alt="" />
                <div
                  onClick={() => handleMenuClick("home")}
                  className={`d-flex align-items-center gap-3 my-3 p-2 rounded cursor-pointer  ${
                    activeMenu === "home" ? "bg-orange" : ""
                  }`}
                >
                  <img src={icon1} alt="" />
                  <p
                    className={`mb-0 text-light ${
                      activeMenu === "home" ? "active" : ""
                    }`}
                  >
                    Home
                  </p>
                </div>
                <div
                  onClick={() => handleMenuClick("users")}
                  className={`d-flex align-items-center gap-3 my-3 p-2 rounded cursor-pointer  ${
                    activeMenu === "users" ? "bg-orange" : ""
                  }`}
                >
                  <img src={icon2} alt="" />
                  <p
                    className={`mb-0 text-light ${
                      activeMenu === "users" ? "active" : ""
                    }`}
                  >
                    Users
                  </p>
                </div>
                <div
                  onClick={() => handleMenuClick("applications")}
                  className={`d-flex align-items-center gap-3 my-3 p-2 rounded cursor-pointer  ${
                    activeMenu === "applications" ? "bg-orange" : ""
                  }`}
                >
                  <img src={icon3} alt="" />
                  <p
                    className={`mb-0 text-light ${
                      activeMenu === "applications" ? "active" : ""
                    }`}
                  >
                    Applications
                  </p>
                </div>
                <div
                  onClick={() => handleMenuClick("pay")}
                  className={`d-flex align-items-center gap-3 my-3 p-2 rounded cursor-pointer  ${
                    activeMenu === "pay" ? "bg-orange" : ""
                  }`}
                >
                  <img src={icon4} alt="" />
                  <p
                    className={`mb-0 text-light ${
                      activeMenu === "pay" ? "active" : ""
                    }`}
                  >
                    Pay
                  </p>
                </div>
              </div>
              <div className="bg-orange d-flex flex-column gap-2 py-4 align-items-center justift-content-center rounded">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <p className="mb-0 text-light text-center">James Williams</p>
                  <p className="mb-0 text-light text-center">
                    User77@email.com
                  </p>
                </div>
                <div>
                  <button className="btn w-100 d-flex justift-content-center text-light bg-blue">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ........home..... */}
          {activeMenu === "home" && (
            <div className="row col-md-10">
              <div className="d-flex justify-content-between align-items-center py-2 ">
                <h5 className="fw-bold">Home</h5>
                <div className="d-flex align-items-center">
                  <div>
                    <button type="button" class="btn p-0 position-relative">
                      <GoBell size={24} />
                      <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-2 ms-5">
                    <img src={img} className="rounded-pill" alt="" />
                    <div className="">
                      <p className="mb-0 lead fw-500">James Williams</p>
                      <p className="lead text-secondary mb-0">Student</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 my-3">
                <div className="shadow p-3">
                  <form>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label class="form-label">Full Name</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          value={selectedUser?.userDetail?.name}
                          aria-label="name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="form-label">Mobile Number</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          value={selectedUser?.userDetail?.phoneNumber}
                          aria-label="Email Address"
                        />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label class="form-label">Loan Type</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          value={selectedUser?.loanDetail?.typeOfLoan}
                          aria-label="Phone Number"
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="form-label">Date</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          placeholder="12 Aug, 2023"
                          aria-label="City"
                        />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label class="form-label">WhatApp Number</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          value={selectedUser?.userDetail?.whatsappNumber}
                          aria-label="name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="form-label">Amount</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          value={selectedUser?.loanDetail?.loanAmount}
                          aria-label="Email Address"
                        />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label class="form-label">Account No</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          value={selectedUser?.bankDetail?.bankAccountNumber}
                          aria-label="Phone Number"
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="form-label">Bank IFC</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          aria-label="City"
                          value={selectedUser?.bankDetail?.ifscCode}
                        />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label class="form-label">Bank Name</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          aria-label="name"
                          value={selectedUser?.bankAccountName}
                        />
                      </div>
                      <div className="col-md-6">
                        <label class="form-label">Email Address</label>
                        <input
                          type="text"
                          class="form-control shadow-none bg-light"
                          style={{ padding: "11px" }}
                          aria-label="Email Address"
                          value={selectedUser?.userDetail?.email}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="bg-blue p-3 row mx-1 justify-content-center gap-3 rounded">
                    <div className="col-sm-4">
                      <p className="text-light">Approve Amount</p>
                      <div className="bg-light text-center py-3 rounded">
                        {selectedUser?.loanDetail?.totalInterestAmount}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <p className="text-light">EMI</p>
                      <div className="bg-light text-center py-3 rounded">
                        {selectedUser?.loanDetail?.emi}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <p className="text-light">Tenure</p>
                      <div className="bg-light text-center py-3 rounded">
                        {selectedUser?.loanDetail?.loanTenure}
                      </div>
                    </div>
                  </div>

                  {/* ..........New Button............. */}
                  <div className="d-flex  gap-2 ms-2">
                    <div className="d-flex flex-column gap-2 ">
                      <button
                        className="bg-orange btn fs-8 custom-button text-light width102"
                        onClick={handleOpenAttach}
                      >
                        Approval <br />
                        Letter Mail
                      </button>
                      <button className=" fs-8 border-button text-dark width102">
                        Download <br /> Approval Letter{" "}
                      </button>
                      <button className=" fs-8 border-button text-dark width102">
                        Copy <br /> Letter Link{" "}
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <button className="bg-orange btn fs-8 custom-button text-light width102">
                        File Change <br /> Recived{" "}
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <button className="bg-orange btn fs-8 custom-button text-light width102">
                        Agreement <br />
                        Letter Mail
                      </button>
                      <button className=" fs-8 border-button text-dark width102">
                        Download <br /> Approval Letter{" "}
                      </button>
                      <button className=" fs-8 border-button text-dark width102">
                        Copy <br /> Letter Link{" "}
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <button className="bg-orange btn fs-8 custom-button text-light width102">
                        Agreement <br />
                        Payment Received
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <button className="bg-orange btn fs-8 custom-button text-light width102">
                        Send Beneficiary <br /> Message
                      </button>
                      <button className="fs-8 border-button text-dark width102">
                        Transactional <br /> Message{" "}
                      </button>
                      <button className="fs-8 border-button text-dark width102">
                        Copy Transactional <br /> Message{" "}
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <button className="bg-orange btn fs-8 custom-button text-light width102">
                        Transactional <br /> Payment Recieved
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2 ">
                      <button className="bg-orange btn fs-8 custom-button text-light width102">
                        Insurance <br /> Payment Recieved
                      </button>
                    </div>
                  </div>
                  <div className="nav-item mt30">
                    <button className="bg-orange btn fs-10 custom-button text-light width172">
                      Cancelation
                    </button>
                    <button className="fs-10 border-button text-blue width172">
                      Copy Account Details
                    </button>
                    <button className="fs-10 border-button text-blue width172">
                      Copy FAQ
                    </button>
                    <button className="fs-10 border-button text-blue width172">
                      Copy Document Required
                    </button>
                  </div>
                  {/* ..........New Button............. */}
                </div>
              </div>
              <div className="col-md-3 my-3">
                <div className="shadow h-100 d-flex flex-column gap-3 py-3 px-3">
                  <button className="btn bg-orange text-light w-100 py-2">
                    Cancelation
                  </button>
                  <button
                    className="btn text-light w-100 py-2"
                    style={{
                      background:
                        "linear-gradient(rgba(224, 104, 77, 0.4),rgba(224, 104, 77, 0.4))",
                    }}
                  >
                    Copy Account Details
                  </button>
                  <button
                    className="btn text-light w-100 py-2"
                    style={{
                      background:
                        "linear-gradient(rgba(224, 104, 77, 0.4),rgba(224, 104, 77, 0.4))",
                    }}
                  >
                    Copy FAQ
                  </button>
                  <button
                    className="btn text-light w-100 py-2"
                    style={{
                      background:
                        "linear-gradient(rgba(224, 104, 77, 0.4),rgba(224, 104, 77, 0.4))",
                    }}
                  >
                    Copy Document Required{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* ....users... */}
          {activeMenu === "users" && (
            <div className="col-md-10 row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <h5 className="fw-bold">Users</h5>
                  <div className="d-flex align-items-center">
                    <div>
                      <button type="button" class="btn p-0 position-relative">
                        <GoBell size={24} />
                        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                          <span class="visually-hidden">New alerts</span>
                        </span>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-5">
                      <img src={img} className="rounded-pill" alt="" />
                      <div className="">
                        <p className="mb-0 lead fw-500">James Williams</p>
                        <p className="lead text-secondary mb-0">Student</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" className="fs-14">
                          #
                        </th>
                        <th scope="col" className="fs-14">
                          Password
                        </th>
                        {/* <th scope="col" className="fs-14">
                          Active
                        </th> */}
                        {/* <th scope="col" className="fs-14">
                          Count
                        </th>
                        <th scope="col" className="fs-14">
                          Leads sent
                        </th> */}
                        <th scope="col" className="fs-14">
                          Name
                        </th>
                        <th scope="col" className="fs-14">
                          Mobile Number
                        </th>
                        <th scope="col" className="fs-14">
                          Email Address
                        </th>
                        <th scope="col" className="fs-14">
                          Bank Name
                        </th>
                        <th scope="col" className="fs-14">
                          Bank IFSC
                        </th>
                        <th scope="col" className="fs-14">
                          Account No
                        </th>
                        <th scope="col" className="fs-14">
                          File Charge
                        </th>
                        <th scope="col" className="fs-14">
                          Save
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData?.map((data, idx) => (
                        <tr key={idx}>
                          <th scope="row">{idx + 1}</th>
                          <td>
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              Send
                            </button>
                          </td>

                          <td>
                            {" "}
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              {data?.userDetail?.name}
                            </button>
                          </td>
                          <td>
                            {" "}
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              {data.userDetail?.phoneNumber}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              {data.userDetail?.email}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              {data?.bankDetail?.name}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              {data.bankDetail.ifscCode}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              {data.bankDetail.bankAccountNumber}
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn bg-light fs-13"
                              style={{
                                border: "1px solid rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              6678
                            </button>
                          </td>
                          <td>
                            <button className="btn bg-blue text-light fs-13">
                              Save
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {/* ........applications..... */}
          {activeMenu === "applications" && (
            <div className="col-md-10">
              <div className="d-flex justify-content-between align-items-center py-2">
                <h5 className="fw-bold">Applications</h5>
                <div className="d-flex align-items-center">
                  <div>
                    <button type="button" class="btn p-0 position-relative">
                      <GoBell size={24} />
                      <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-2 ms-5">
                    <img src={img} className="rounded-pill" alt="" />
                    <div className="">
                      <p className="mb-0 lead fw-500">James Williams</p>
                      <p className="lead text-secondary mb-0">Student</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" className="fs-14">
                          #
                        </th>
                        <th scope="col" className="fs-14">
                          Date
                        </th>
                        <th scope="col" className="fs-14">
                          Name
                        </th>
                        <th scope="col" className="fs-14">
                          Mobile
                        </th>
                        <th scope="col" className="fs-14">
                          Whatsapp
                        </th>
                        <th scope="col" className="fs-14">
                          Loan Type
                        </th>
                        <th scope="col" className="fs-14">
                          Loan Amount
                        </th>
                        <th scope="col" className="fs-14">
                          Reg Fee
                        </th>
                        <th scope="col" className="fs-14">
                          Reg Fee Status
                        </th>
                        <th scope="col" className="fs-14">
                          Approval Letter
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData?.map((data, idx) => (
                        <tr>
                          <th scope="row">{idx + 1}</th>
                          <td>12 Oct, 2023</td>
                          <td>{data?.userDetail?.name}</td>
                          <td>{data?.userDetail?.phoneNumber}</td>
                          <td>
                            <img src={img2} className="me-1" alt="" />
                            {data?.userDetail?.whatsappNumber}
                          </td>
                          <td>{data?.loanDetail?.typeOfLoan}</td>
                          <td className="text-danger">
                            ${data?.loanDetail?.loanAmount}
                          </td>
                          <td className="text-success">130.00</td>
                          <td>
                            <button className="btn inputDesign py-1">
                              UnPaid
                            </button>
                          </td>
                          <td className="d-flex gap-1">
                            <button className="inputDesign py-1 btn">
                              <img src={img3} alt="" />
                            </button>
                            <button
                              className=" py-1 btn border-primary"
                              style={{
                                background: " rgba(148, 224, 255, 0.53)",
                              }}
                            >
                              <img src={img4} alt="" />
                            </button>
                            <button className="inputDesign py-1 btn">
                              <img src={img5} alt="" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        <CustomModal
          title={"Attach File"}
          body={
            <SendApprovalLetter
              setShowAttach={setShowAttach}
              setShow={setShow}
              email={selectedUser?.userDetail?.email}
            />
          }
          show={showAttach}
          setShow={setShowAttach}
        />
        <CustomModal
          title={"Email Sent"}
          body={"Woohoo, email sent successfully!"}
          show={show}
          setShow={setShow}
        />
      </div>
    </>
  );
};

export default Dashboard;

const SendApprovalLetter = (props) => {
  const { setShowAttach, setShow, email } = props;
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    emailjs
      .sendForm(
        "service_voe3wmq",
        "template_4onzsob",
        form.current,
        "TblxlJHh9H4SijeDW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAttach(false);
          setShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => setLoading(false));

    //send
  };
  return (
    <form ref={form} onSubmit={handleSubmit}>
      {/* <label>Email</label> */}
      <input
        type="email"
        name="email"
        value={email}
        style={{ marginBottom: 20 }}
      />
      {/* <label> */}
      {/* Choose a file: */}
      <input type="file" name="approval_letter" style={{ marginBottom: 20 }} />
      {/* </label> */}
      <button
        disabled={loading ? true : false}
        type="submit"
        className="btn bg-orange py-2 text-light px-4"
      >
        {loading ? "loading..." : "Upload"}
      </button>
    </form>
  );
};
