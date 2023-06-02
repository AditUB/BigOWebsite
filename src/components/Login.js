import { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export const Login = ({ showModalLogin, handleCloseLogin, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        setLoggedIn(true);
        setError("");
        handleCloseModalLogin();
      })
      .catch((error) => {
        setError("Invalid username or password");
      });
  };

  const handleCloseModalLogin = () => {
    setUsername("");
    setPassword("");
    setError("");
    handleCloseLogin();
  };

  return (
    <Modal
      scrollable
      show={showModalLogin}
      onHide={handleCloseModalLogin}
      centered
      className="opaque-modal"
    >
      <Modal.Header closeButton closeVariant="white" className="modal-header">
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-black text-white border-purple"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-black text-white border-purple"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="btn-purple glow-on-hover"
            >
              Login
            </Button>
          </div>
          {error && (
            <div className="text-center mt-3">
              <div className="text-danger">{error}</div>
            </div>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
};
