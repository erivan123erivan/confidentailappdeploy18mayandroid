import "./Navbar.css";
import { db, auth } from "../../config";
import { useNavigate, useLocation } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import images from "../../assets/images/index";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isMounted = useRef(true);
  const location = useLocation();

  const navigate = useNavigate();

  // useEffect
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          // setLoggedIn(false);
        }
      });
    }
    console.log("current user ", auth.currentUser?.email);

    return () => {
      isMounted.current = false;
    };
  }, [isMounted, navigate]);

  //Signout
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activelinks = () => {
    [
      { url: "/dashboard", id: "dashboard" },
      { url: "/transactions", id: "transactions" },
    ].map((link) => {
      switch (true) {
        case location.pathname === link.url:
          document.getElementById(`${link.id}`)?.classList.add("activeLink");
          break;

        default:
          break;
      }
    });
  };

  useEffect(() => {
    activelinks();
  }, [activelinks]);

  return (
    <div className="navWrapper">
     

      {loggedIn && (
        <>
          <div className="Links">
            <a href="dashboard" className="navLinks" id="dashboard">
              Dashboard
            </a>
            <a href="transactions" className="navLinks" id="transactions">
              Transactions
            </a>

            <a href="/" id="link" className="navLinks" onClick={SignOut}>
              Logout
            </a>
          </div>

          <div className="mobileMenu">
            {!isOpen ? (
              <div className="isOpenImages">
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ color: "white", fontSize: "1.5rem" }}
                  onClick={() => setIsOpen(true)}
                />
              </div>
            ) : (
              <>
                <div className="isOpenImages">
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{ color: "white", fontSize: "1.5rem" }}
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                <div className="mobileMenuItems">
                  <a href="dashboard" className="navLinks" id="dashboard">
                    Dashboard
                  </a>
                  <a href="transactions" className="navLinks" id="transactions">
                    Transactions
                  </a>

                  <a href="/" id="link" className="navLinks" onClick={SignOut}>
                    Logout
                  </a>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
