// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYXi2jcH5eYozeYxr6fapsX4QHxizc7xs",
  authDomain: "meveen-org.firebaseapp.com",
  projectId: "meveen-org",
  storageBucket: "meveen-org.appspot.com",
  messagingSenderId: "620041795819",
  appId: "1:620041795819:web:a7e755fe21ed6aab7ce6ae",
  measurementId: "G-1VJ6DMDJYL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

