// EffectiveTigerElder

import React, { useState, useEffect } from "react";
import { db, auth } from "../../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import "./Home.css";
import { useAuthStatus } from "../../hooks/useAuthState";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [signup, setSignUp] = useState(true);
  const { loggedIn, checkingStatus } = useAuthStatus();

  const navigate = useNavigate();
  if (loggedIn) navigate("/dashboard");

  // signup
  const SignUp = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // calling the create stripe account endpoint
    console.log(process.env.REACT_APP_baseUrl);
    // axios
    //   .post(
    //     `${process.env.REACT_APP_testBaseUrl}Create-stripe-account`,
    //     {
    //       here: "Here from body",
    //       firstName,
    //       lastName,
    //       email,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then(async function (response) {
    //     // storing stripe account id into firestore ans using the email as reference for user
    //     if (response.data.accountid) {
    // signing user up
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // storing user info into firestore db

      setDoc(doc(db, "users", userCredentials.user.uid), {
        // accountId: response.data.accountid,
        firstName,
        lastName,
        email,
      });

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Something is missing or email is already in use");
      setProcessing(false);
    }
    //   } else if (response.data.error) {
    //     setError(response.data.error);
    //     setProcessing(false);
    //     return;
    //   }
    // })
    //     .catch(function (error) {
    //       console.log(error);
    //       setProcessing(false);

    //       return;
    //     });
  };
  //
  //signin
  const signIn = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setProcessing(true);

    try {
      console.log("done");
      // siging user in
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("user does not exist");
      setProcessing(false);
    }
  };

  return (
    <div className="homeContainer">
      <form onSubmit={signup ? SignUp : signIn} className="authForm">
        <h2 className="send">{signup ? " Send money" : "Sign In"}</h2>

        {signup ? (
          <>
            <div className="signupFormInfos">
              <label>First Name :</label>
              <input
         
                type="text"
                placeholder="Enter firstName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div className="signupFormInfos">
              <label>Last Name :</label>
              <input
                type="text"
                placeholder="Enter lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="signupFormInfos">
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="signupFormInfos">
          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        {!signup && (
          <div className="forgetPasswordDiv">
            <a href="/forgetPassword">Forget password ? </a>
          </div>
        )}

        <br />
        <p style={{ color: "red" }}>
          <b>{error}</b>
        </p>
        <button style={{borderRadius:'1em',backgroundColor:'#0BC15F',color:'white',border:0,}} type="submit" disabled={processing}>
          {signup ? " Sign up " : "Log in"}
        </button>

        <p>
          {signup ? "Already have an account ?" : "Don't have an account ?"}
        </p>
        <p
          onClick={() => {
            setSignUp((prevState) => !prevState);
            console.log(signup);
          }}
          className="PTag"
        >
          <b>{signup ? "Sign in" : "Sign up"}</b>
        </p>
      </form>
    </div>
  );
};

export default Home;
