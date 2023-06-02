import { Container, Row, Col } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

import logo from "../assets/imgs/official/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Login } from "./Login";
import { AddEvent } from "./AddEvent";
import { AuthContext } from "../context/AuthContext";

export const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [showAddEvent, setShowAddEvent] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const handleButtonClickLogin = () => {
    if (loggedIn) {
      auth
        .signOut()
        .then(() => {
          // Log out successful
          dispatch({ type: "LOGOUT", payload: null });
        })
        .catch((error) => {
          // An error occurred while logging out
          console.log(error);
        });
      setLoggedIn(false);
    } else {
      setShowLogin(true);
    }
  };
  const handleButtonClickAddEvent = () => {
    setShowAddEvent(true);
  };

  const handleCloseModalLogin = () => {
    setShowLogin(false);
  };

  const handleCloseModalAddEvent = () => {
    setShowAddEvent(false);
  };

  //solves refresh issue
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    setLoggedIn(currentUser ? true : false);
  }, [currentUser]);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end ">
            <div className="social-icon space">
              <a href="https://www.linkedin.com/in/bigo-cp-club-rnsit-3a0213217">
                <img src={navIcon1} alt="Icon" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a> */}
              <a href="https://instagram.com/bigo_rnsit?igshid=NTc4MTIwNjQ2YQ==">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            {loggedIn ? (
              <div>
                <button className="loginn" onClick={handleButtonClickLogin}>
                  <span>LoggedIn</span>
                </button>
                <button className="loginn" onClick={handleButtonClickAddEvent}>
                  Add event
                </button>
              </div>
            ) : (
              <button className="loginn" onClick={handleButtonClickLogin}>
                <span>Login</span>
              </button>
            )}
            <Login
              showModalLogin={showLogin}
              handleCloseLogin={handleCloseModalLogin}
              setLoggedIn={setLoggedIn}
            />
            <AddEvent
              showModalAddEvent={showAddEvent}
              handleCloseAddEvent={handleCloseModalAddEvent}
            />

            <p>Copyright 2023. All Rights Reserved -BigO</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
