// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwyk5snyFDgPATekhNIr9eybP6dMBh6TM",
  authDomain: "calcverse1.firebaseapp.com",
  projectId: "calcverse1",
  storageBucket: "calcverse1.firebasestorage.app",
  messagingSenderId: "928218372437",
  appId: "1:928218372437:web:e5ca82cdd8afced6df37dc",
  measurementId: "G-CH7CSPZ8Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);