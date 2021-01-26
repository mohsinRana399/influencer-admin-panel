import React from "react";
import Avatar from "react-avatar";
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./styles.css";

/**
 * @author
 * @function NavbarComponent
 **/

const NavbarComponent = (props) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch({ type: "USER_LOGOUT_SUCCESS" });
    props.history.push("/");
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar-main-backdrop">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Avatar name="Admin" size="50" round={true} style={{}} />
            </Nav.Link>
            <Nav.Link className="my-auto name-style">Admin</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown" className="my-auto">
              <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
