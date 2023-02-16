// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsUtcQ0GZf4WhlDvI6zWB6_Td_SgrpDu0",
  authDomain: "netflex-clone-5f447.firebaseapp.com",
  projectId: "netflex-clone-5f447",
  storageBucket: "netflex-clone-5f447.appspot.com",
  messagingSenderId: "748599155436",
  appId: "1:748599155436:web:65ff8d36828a2f8ba7a3c9",
  measurementId: "G-VV9153MDSB"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


