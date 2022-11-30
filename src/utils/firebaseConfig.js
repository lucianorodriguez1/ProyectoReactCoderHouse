
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSlhE1LS07Kugzoab7SL5ivE2kL3pElKI",
  authDomain: "ecommerce-react-88ccb.firebaseapp.com",
  projectId: "ecommerce-react-88ccb",
  storageBucket: "ecommerce-react-88ccb.appspot.com",
  messagingSenderId: "853082618226",
  appId: "1:853082618226:web:5602c0192fc0d8ab9d45eb"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  