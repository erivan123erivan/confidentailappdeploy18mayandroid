// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB939gq5hdAERlWN3uynrCqWUXpKrGZc4g",
  authDomain: "fir-auth-e40e7.firebaseapp.com",
  projectId: "fir-auth-e40e7",
  storageBucket: "fir-auth-e40e7.appspot.com",
  messagingSenderId: "500000147979",
  appId: "1:500000147979:web:7932b0c9e6450b5355d50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);