import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRXDng_mIAM1lS832dVR5gXByrzY27pME",
  authDomain: "mealstogo-7ddf4.firebaseapp.com",
  projectId: "mealstogo-7ddf4",
  storageBucket: "mealstogo-7ddf4.appspot.com",
  messagingSenderId: "505065133419",
  appId: "1:505065133419:web:9be5f15d831347c9f7282e",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
