import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const Customer = () => {
  const navigate = useNavigate();
  const [whatsappNumber, setWhatsappNumber] = useState('');

  return (
    <>
      <div className="adminLogin_img">
        <div
          className="admin_Form col-md-4 mx-4 py-5 px-5"
          style={{
            border: "1px solid rgba(191, 218, 198, 0.6)",
            borderRadius: "1rem",
          }}
        >
          <h3 className="fw-bold text-center">Check Customer</h3>
          <p className="mb-4 text-center">
            By Mobile/ Aaadhar / Pan / Email Address
          </p>
          <form>
            <div class="mb-1">
              <input
                type="text"
                onChange={e => setWhatsappNumber(e.target.value)}
                placeholder="Unique ID"
                class="form-control text-light whiteplaceholder bg-transparent border-secondary shadow-none"
                style={{
                  background:
                    "linear-gradient(rgba(153, 124, 124, 0.17),rgba(153, 124, 124, 0.17))",
                  padding: "10px",
                }}
              />
            </div>

            <button onClick={() => navigate(`/dashboard?whatsappNumber=${whatsappNumber}`)} className="btn mb-3 shadow-none w-100 bg-orange py-2 mt-4 text-light px-4">
              Check
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Customer;
