import React, { useState } from "react";
import AdharDetail from "../components/Laon/AdharDetail";
import UserDetail from "../components/Laon/UserDetail";
import LoanDetail from "../components/Laon/LoanDetail";
import BankDetail from "../components/Laon/BankDetail";
import Successfull from "../components/Laon/Successfull";
import PaymentDetail from "../components/Laon/PaymentDetail";
import ScanPay from "../components/Laon/ScanPay";

const ApplyLoan = () => {
  const [selected, setSelected] = useState("adhar");
  const [userId, setUserId] = useState("");
  const [bankId, setBankId] = useState("");
  const [loanId, setLoanId] = useState("");

  return (
    <div>
      {selected === "adhar" && <AdharDetail setSelected={setSelected} />}
      {selected === "user" && <UserDetail setSelected={setSelected} setUserId={setUserId} />}
      {selected === "laon" && <LoanDetail setSelected={setSelected} setLoanId={setLoanId} userId={userId} />}
      {selected === "bank" && <BankDetail setSelected={setSelected} setBankId={setBankId} loanId={loanId} userId={userId} />}
      {selected === "success" && <Successfull setSelected={setSelected} />}
      {selected === "payment" && <PaymentDetail setSelected={setSelected} />}
      {selected === "scan" && <ScanPay setSelected={setSelected} />}
    </div>
  );
};

export default ApplyLoan;
