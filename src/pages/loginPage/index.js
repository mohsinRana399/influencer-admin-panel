import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth.actions";
import "./styles.css";
/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const submitLogin = async () => {
    if (email === "" || email === undefined) {
      alert("Email canot be empty");
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      alert("please enter a valid Email");
    } else {
      const username = email;
      await dispatch(loginUser({ username, password })).then(() => {
        props.history.push("/adminPanel");
      });
    }
  };
  return (
    <div className="d-flex main-div">
      <Container fluid className="loginPageContainer p-3 mx-auto my-auto">
        <div className="login-button-background d-flex mx-auto">
          <p className="closerStyle mx-auto mt-3">LOGIN</p>
        </div>
        <Form onSubmit={submitLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="label-style">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="emailBoxStyling"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="label-style">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="emailBoxStyling"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="buttonDivStyling text-center">
            <button
              type="button"
              className="buttonStyling w-50 mx-auto"
              onClick={submitLogin}
            >
              LOGIN
            </button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
