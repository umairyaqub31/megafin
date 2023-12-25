import React from "react";
import Input from "../../components/Input";
import "./MyAccount.css";
import icon from "../../images/Frame 1000002596.png";
import light from "../../images/lightgreen.png";
import darklight from "../../images/greensmallcircle.png";
import tickmark from "../../images/tick.png";

import arrow from "../../images/Arrow 1.png";
import Navbar from "../../components/Navbar";
import CustomButton from "../../components/CustomButton";
const MyAccount = () => {
  return (
    <div>
      <Navbar />

      <div className="bgcolor">
        <div className="bgclr">
          <div className=" marginOuter flx center">
            <div
              className="Box mt128"
              style={{ paddingLeft: 16, paddingRight: 16 }}
            >
              <img src={icon} className="center ptop35" />
              <h5 className="center mt12">Personal Details</h5>
              <div class="mb-4 mt-4">
                <label for="exampleInputEmail1" class="form-label fs-15">
                  Name
                </label>
                <input
                  type="email"
                  placeholder="Enter your name"
                  class="form-control inputDesign shadow-none"
                  id="nameInput1"
                  // aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-4 mt-4">
                <label for="exampleInputEmail1" class="form-label fs-15">
                  Phone Number
                </label>
                <input
                  type="phone"
                  placeholder="Enter your Phone Number"
                  class="form-control inputDesign shadow-none"
                  id="phoneNumberInput1"
                />
              </div>

              <div class="mb-4 mt-4">
                <label for="exampleInputEmail1" class="form-label fs-15">
                  Type of Loan
                </label>
                <input
                  type="loan"
                  placeholder="Personal Loan"
                  class="form-control inputDesign shadow-none"
                  id="loanInput1"
                />
              </div>

              <div class="mb-4 mt-4">
                <label for="exampleInputEmail1" class="form-label fs-15">
                  Adhar Number
                </label>
                <input
                  type="dropdown"
                  placeholder="456456456456"
                  class="form-control inputDesign shadow-none"
                  id="adharInput1"
                />
              </div>

              <div className="flxbtn px16">
                <div className="w50">
                  <CustomButton title="Previous" />
                </div>
                <div className="ml12 bradius w50">
                  <CustomButton title="Next" />
                </div>
              </div>
            </div>
            <div className="ml50 smt">
              <div
                className="Box"
                style={{ paddingLeft: 16, paddingRight: 16 }}
              >
                <img src={icon} className="center ptop35" />
                <h5 className="center mt12">Personal Details</h5>
                <div class="mb-4 mt-4">
                  <label for="exampleInputEmail1" class="form-label fs-15">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    placeholder="kumar"
                    class="form-control inputDesign shadow-none"
                    id="bankNameInput1"
                  />
                </div>

                <div class="mb-4 mt-4">
                  <label for="exampleInputEmail1" class="form-label fs-15">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="6668865478768"
                    class="form-control inputDesign shadow-none"
                    id="accountInput1"
                  />
                </div>

                <div class="mb-4 mt-4">
                  <label for="exampleInputEmail1" class="form-label fs-15">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    placeholder="PVYUTRHHF"
                    class="form-control inputDesign shadow-none"
                    id="ifscInput1"
                  />
                </div>

                <div className="ml12 bradius w100 pt32">
                  <CustomButton title="Save Changes" />
                </div>
              </div>
              <div
                className="Box2"
                style={{ paddingLeft: 34, paddingRight: 34 }}
              >
                <div className="pt31">
                  <CustomButton title="Application Submitted" />
                </div>
                <img className="pl115 pt9" src={arrow} />
                <div className="pt9">
                  <CustomButton title="Registration fee Panding" />
                </div>
              </div>
            </div>

            <div
              className="Box mt128 ml50 sm"
              style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 100 }}
            >
              <div className="innerBox">
                <div className="dimage">
                  <img src={darklight} className="image" />
                </div>

                <div
                  className="content-div"
                  style={{ paddingLeft: 15, paddingRight: 15 }}
                >
                  <label className="h4Approved">
                    Approved Loan <br />
                    Amount
                  </label>
                  <h5 className="pt8 thinText">
                    This Is Aadhaar Based Loan Approval
                  </h5>
                  <div className="amount-field">
                    <label className="amount-heading">INR:</label>
                    <text className="amount-value">$50,000</text>
                  </div>
                  <div className="amount-field">
                    <label className="amount-heading">INR:</label>
                    <text className="amount-value">$50,000</text>
                  </div>
                  <div className="amount-field">
                    <label className="amount-heading">INR:</label>
                    <text className="amount-value">$50,000</text>
                  </div>
                  <div className="amount-field">
                    <label className="amount-heading">INR:</label>
                    <text className="amount-value">$50,000</text>
                  </div>
                  <div className="pt18 mb50">
                    <CustomButton title="Approve" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
