import React from "react";
import { Modal } from "react-bootstrap";

const VerficationModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} className="settings-modal" >
        <div className="rounded newchat py-5">
          <div className="d-flex flex-column align-items-center">
            <p>Website.co.in says</p>
            <p className="fs-13">KYC Verified</p>
            <div>
              <button className="btn px-4 border-secondary me-3">Cancel</button>

              <button
                className="btn px-5 text-light"
                style={{ backgroundColor: "#19ad16" }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VerficationModal;
