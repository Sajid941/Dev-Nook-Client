// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7dd_dvMxhhGqMdfFvr1HmV7PYR5eRiI",
  authDomain: "a11-devnook.firebaseapp.com",
  projectId: "a11-devnook",
  storageBucket: "a11-devnook.appspot.com",
  messagingSenderId: "111179514006",
  appId: "1:111179514006:web:da92c2691e2c8ebbb182b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;