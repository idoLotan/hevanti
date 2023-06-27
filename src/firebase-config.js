// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIZ-18NsJsgjSG5XB3HkjhUvEjTat_5tc",
  authDomain: "hevanti-fbd18.firebaseapp.com",
  projectId: "hevanti-fbd18",
  storageBucket: "hevanti-fbd18.appspot.com",
  messagingSenderId: "425254748923",
  appId: "1:425254748923:web:1dc1b72ef00d292d8ee65e",
  measurementId: "G-HG9FRC231R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
