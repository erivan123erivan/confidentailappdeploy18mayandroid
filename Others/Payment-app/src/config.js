import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAzud2JSxc2TTF1DbDjd-9Yp65vxd6fkF0",
//   authDomain: "stripeconnectfirebase.firebaseapp.com",
//   projectId: "stripeconnectfirebase",
//   storageBucket: "stripeconnectfirebase.appspot.com",
//   messagingSenderId: "1000026886679",
//   appId: "1:1000026886679:web:74afac42917d684a220252",
//   measurementId: "G-FMR1CL1JMW",
// };

const firebaseConfig = {
  apiKey: "AIzaSyB939gq5hdAERlWN3uynrCqWUXpKrGZc4g",
  authDomain: "fir-auth-e40e7.firebaseapp.com",
  projectId: "fir-auth-e40e7",
  storageBucket: "fir-auth-e40e7.appspot.com",
  messagingSenderId: "500000147979",
  appId: "1:500000147979:web:7932b0c9e6450b5355d50e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
