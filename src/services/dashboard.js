import { firestore } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getUserDetail = async (whatsapp) => {
  let user = null;
  const queryUser = await query(
    collection(firestore, "userDetail"),
    where("userDetail.whatsappNumber", "==", whatsapp)
  );
  let querySnapshot = await getDocs(queryUser);
  await querySnapshot.forEach((doc) => {
    user = { id: doc.id, ...doc.data() };
  });

  const queryLoan = await query(
    collection(firestore, "loanDetail"),
    where("userId", "==", user?.id)
  );
  let querySnapshotLoan = await getDocs(queryLoan);
  await querySnapshotLoan.forEach((doc) => {
    user = { ...user, loanId: doc.id, ...doc.data() };
  });

  const queryBank = await query(
    collection(firestore, "bankDetail"),
    where("userId", "==", user?.id)
  );
  let querySnapshotBank = await getDocs(queryBank);
  await querySnapshotBank.forEach((doc) => {
    user = { ...user, bankId: doc.id, ...doc.data() };
  });

  return user;
};

export const getUsersDetail = async () => {
  const users = {};
  const querySnapshotUser = await getDocs(collection(firestore, "userDetail"));
  await querySnapshotUser.forEach(async (doc) => {
    users[doc.id] = await doc.data();
  });

  const resultant = [];
  const querySnapshotBank = await getDocs(collection(firestore, "bankDetail"));
  await querySnapshotBank.forEach(async (doc) => {
    const data = await doc.data();
    resultant.push({ ...data, bankId: doc.id, ...users[data.userId] });
  });
  return resultant;
};

export const getApplicationDetail = async () => {
  const users = {};
  const querySnapshotUser = await getDocs(collection(firestore, "userDetail"));
  await querySnapshotUser.forEach(async (doc) => {
    users[doc.id] = await doc.data();
  });

  const resultant = [];
  const querySnapshotBank = await getDocs(collection(firestore, "loanDetail"));
  await querySnapshotBank.forEach(async (doc) => {
    const data = await doc.data();
    resultant.push({ ...data, bankId: doc.id, ...users[data.userId] });
  });
  return resultant;
};
