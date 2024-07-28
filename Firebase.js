// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH9MW2XhsWUwi71ikDTGGlvPf1EuOpBrU",
  authDomain: "tulsa-mobile.firebaseapp.com",
  projectId: "tulsa-mobile",
  storageBucket: "tulsa-mobile.appspot.com",
  messagingSenderId: "584969788902",
  appId: "1:584969788902:web:bab219c681f0c36c8b0a27",
  measurementId: "G-CERPQ1S6WF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)