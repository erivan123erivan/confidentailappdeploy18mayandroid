import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../config";
import { getDoc, doc } from "firebase/firestore";
import axios from "axios";
import { onAuthStateChanged, signOut } from "firebase/auth";
export const authContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loggedin, setLoggedIn] = useState(false);
  const [accountId, setAccountId] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState();
  const [type, setType] = useState(["0", "0", "0", "0", "0", "0"]);
  const [transAmount, setTransAmount] = useState([0, 0, 0, 0, 0, 0]);

  const isMounted = useRef(true);
  // get accountid of user from firestore
  const account = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    console.log("From context ", docSnap.data());
    setAccountId(docSnap.data()?.accountId);
  };

  useEffect(() => {
    // get accountid of user from firestor

    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          account();
          setLoggedIn(true);
        } else {
          // window.location.replace("/");
        }
      });
    }
    console.log("current user ", auth.currentUser?.email);

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const listTransactions = async () => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_baseUrl}list-transactions`,
        // "https://us-central1-stripeconnectfirebase.cloudfunctions.net/api/list-transactions",
        { accountId }
      )
      .then(function (response) {
        console.log(response.data.transaction);

        setTransactions(response.data.transaction);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  let transac = [];
  let transacType = [];

  const dataa = () => {
    transactions?.map((item) => {
      transac.push(item.amount / 100);
      setTransAmount(transac);
      transacType.push(item.status);
      setType(transacType);
      console.log({ transacType });
    });
    console.log({ transac });
    return transac;
  };

  useEffect(() => {
    listTransactions();
  }, [accountId]);

  useEffect(() => {
    dataa();
  }, [transactions]);

  return (
    <authContext.Provider
      value={{
        loggedin,
        accountId,
        loading,
        transactions,
        setLoading,
        dataa,
        type,
        transAmount,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
