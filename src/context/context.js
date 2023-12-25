import { createContext, useContext, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [installment, setInstallment] = useState("");
  const [mobile, setMobile] = useState("");

  const addAdhar = async (adhar, pan) => {
    return await addDoc(collection(firestore, "adhar"), {
      adhar,
      pan,
    });
  };
  const addUserDetail = async (userDetail, city, state) => {
    return await addDoc(collection(firestore, "userDetail"), {
      userDetail,
      city,
      state,
    });
  };
  const updateUserName = (name) => {
    setUserName(name);
  };
  const updateMobile = (phone) => {
    setMobile(phone);
  };

  const addLoanDetail = async (loanDetail) => {
    return await addDoc(collection(firestore, "loanDetail"), {
      loanDetail,
    });
  };
  const updateTotalAmount = (amount) => {
    setTotalAmount(amount);
  };
  const monthlyIstallment = (install) => {
    setInstallment(install);
  };
  const addBankDetail = async (bankDetail, bankAccountName, userId) => {
    return await addDoc(collection(firestore, "bankDetail"), {
      bankDetail,
      bankAccountName,
      userId,
    });
  };
  const updateLoanDetail = async(userId, bankDetailId, loanId) => {
    const loanRef = doc(firestore, "loanDetail", loanId);
    return await updateDoc(loanRef, {
      userId,
      bankDetailId
    });
  }
  const getBankDetail = (id) => {
    const bankDocRef = doc(firestore, "bankDetail", id);

    return getDoc(bankDocRef);
  };
  const getUsers = () => {
    return getDocs(collection(firestore, "userDetail"));
  };
  const getAllBankDetail = () => {
    return getDocs(collection(firestore, "bankDetail"));
  };
  const getLoanDetail = () => {
    return getDocs(collection(firestore, "loanDetail"));
  };
  const combineData = async () => {
    try {
      const adharData = await getDocs(collection(firestore, "adhar"));
      const userDetailData = await getDocs(collection(firestore, "userDetail"));
      const loanDetailData = await getDocs(collection(firestore, "loanDetail"));
      const bankDetailData = await getDocs(collection(firestore, "bankDetail"));

      const combinedData = [];

      adharData.forEach((doc) => {
        if (doc.exists) {
          combinedData.push({ type: "adhar", ...doc.documents });
        }
      });
      userDetailData.forEach((doc) =>
        combinedData.push({ type: "userDetail", ...doc.data() })
      );
      loanDetailData.forEach((doc) =>
        combinedData.push({ type: "loanDetail", ...doc.data() })
      );
      bankDetailData.forEach((doc) =>
        combinedData.push({ type: "bankDetail", ...doc.data() })
      );

      const batch = firestore.batch();
      const combinedCollectionRef = collection(firestore, "combinedData");

      combinedData.forEach((data) => {
        const docRef = collection(combinedCollectionRef);
        batch.set(docRef, data);
      });

      await batch.commit();
      console.log('Combined data added to "combinedData" collection');
    } catch (error) {
      console.error("Error combining and adding data:", error);
    }
  };

  const getCombinedData = async () => {
    try {
      const combinedData = [];
      const combinedDataDocs = await getDocs(
        collection(firestore, "combinedData")
      );

      combinedDataDocs.forEach((doc) => {
        combinedData.push(doc.data());
      });

      return combinedData;
    } catch (error) {
      console.error("Error getting combined data:", error);
      return []; // Return an empty array in case of an error
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        addAdhar,
        addUserDetail,
        addLoanDetail,
        addBankDetail,
        updateLoanDetail,
        getBankDetail,
        userName,
        updateUserName,
        updateTotalAmount,
        totalAmount,
        monthlyIstallment,
        installment,
        updateMobile,
        mobile,
        getUsers,
        getAllBankDetail,
        getLoanDetail,
        combineData,
        getCombinedData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
