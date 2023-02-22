
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb3sQLDePcandPGiBv_GgsQLLdagc3Ez4",
  authDomain: "react-netflex-clone-1c2a4.firebaseapp.com",
  projectId: "react-netflex-clone-1c2a4",
  storageBucket: "react-netflex-clone-1c2a4.appspot.com",
  messagingSenderId: "327944748930",
  appId: "1:327944748930:web:e6004cab178b988f1a599b"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)