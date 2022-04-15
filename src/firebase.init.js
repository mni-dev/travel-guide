// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9f5DKRgbI5fc_eL_nNK2rdxRpg_4ZyE",
  authDomain: "travel-guide-8134b.firebaseapp.com",
  projectId: "travel-guide-8134b",
  storageBucket: "travel-guide-8134b.appspot.com",
  messagingSenderId: "793118638469",
  appId: "1:793118638469:web:ed54eb7eb74bfb48e744ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;