import "./App.css";
import { useState, useEffect, useRef, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "./config";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [accountId, setAccountId] = useState("");
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    // get accountid of user from firestore
    const account = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      console.log("From appp", docSnap.data());
      setAccountId(docSnap.data()?.accountId);
    };

    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          setLoading(true);
        }
        if (user) {
          console.log({ user });
          account();
        } else {
          console.log("nthign to show");
        }
      });
    }
    console.log("current user ", auth.currentUser?.email);

    return () => {
      isMounted.current = false;
    };
  }, [isMounted, accountId]);
  console.log("account id from app", accountId);

  const options = {
    apiVersion: "2022-08-01",
  };
  console.log({ options });

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_LIVE_PUBLISHABLE_KEY,
    {
      stripeAccount: accountId,
    }
  );

  return (
    <Router>
      <Elements key={`elements-key-${accountId}`} stripe={stripePromise}>
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/" element={<Home />} />
          {/* </Route> */}

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Elements>
    </Router>
  );
}

export default App;
