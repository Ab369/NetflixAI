// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhl8OSN4EHTrfPx-M_w4hmw_yIOC6Iiyw",
  authDomain: "netflixgpt-97459.firebaseapp.com",
  projectId: "netflixgpt-97459",
  storageBucket: "netflixgpt-97459.firebasestorage.app",
  messagingSenderId: "973651429322",
  appId: "1:973651429322:web:15b6fbc3e62264608c3133",
  measurementId: "G-QXW6K3FFNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;