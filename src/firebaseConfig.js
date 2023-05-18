import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB939gq5hdAERlWN3uynrCqWUXpKrGZc4g",
  authDomain: "fir-auth-e40e7.firebaseapp.com",
  projectId: "fir-auth-e40e7",
  storageBucket: "fir-auth-e40e7.appspot.com",
  messagingSenderId: "500000147979",
  appId: "1:500000147979:web:7932b0c9e6450b5355d50e"
};
const app = firebase.initializeApp(firebaseConfig);

export const dbFirebase = app.firestore();

// const app = initializeApp(firebaseConfig);