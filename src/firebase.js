import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwIV7iqQLGi1YMbIeE-x8W_d1UDNX5q_s",
  authDomain: "megafin-1301c.firebaseapp.com",
  projectId: "megafin-1301c",
  storageBucket: "megafin-1301c.appspot.com",
  messagingSenderId: "749878461613",
  appId: "1:749878461613:web:82bf7fb15726e460127224",
  measurementId: "G-DKKR8E8CKV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;
