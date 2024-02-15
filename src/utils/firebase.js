// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXXSxmCLV2ALvNyA3z9ih0WDqH_RO984I",
  authDomain: "netflixgpt-d9602.firebaseapp.com",
  projectId: "netflixgpt-d9602",
  storageBucket: "netflixgpt-d9602.appspot.com",
  messagingSenderId: "958777995675",
  appId: "1:958777995675:web:79f20a8dd7186d63fdb13e",
  measurementId: "G-Q3L5TNN1T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();