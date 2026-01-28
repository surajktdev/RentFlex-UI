import { useEffect, useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { isLoggedIn, getCurrentUserDetails, doLogout } from "../auth/index";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loggedIn = isLoggedIn();
    const userDetails = getCurrentUserDetails();

    console.log("Logged In:", loggedIn);
    console.log("User:", userDetails);

    setLoginStatus(loggedIn);
    setUser(userDetails);
  }, []);

  const logout = () => {
    doLogout(() => {
      console.log("User logged out successfully");
      setLoginStatus(false);
      setUser(undefined);
      window.location.href = "/";
    });
  };
  return (
    <Navbar
      color="dark"
      dark
      expand="md"
      sticky="top"
      className="shadow-sm px-3"
    >
      {/* Brand */}
      <NavbarBrand
        tag={ReactLink}
        to={loginStatus ? "/user/dashboard" : "/"}
        className="fw-bold fs-5 d-flex align-items-center"
      >
        <span className="me-2">🚀</span> RentFlex
      </NavbarBrand>

      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

      <Collapse isOpen={isOpen} navbar>
        {/* Left Nav */}
        <Nav className="me-auto gap-md-3" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/about">
              About
            </NavLink>
          </NavItem>
        </Nav>

        {/* Right Nav */}
        <Nav className="align-items-center gap-md-3" navbar>
          {loginStatus ? (
            <>
              <NavItem>
                <NavLink tag={ReactLink} to="/user/profile">
                  Profile
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="fw-semibold text-info">
                  {user?.userResponse?.userName}
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={logout} className="text-danger">
                  Logout
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={ReactLink}
                  to="/signup"
                  className="btn btn-primary text-white px-3"
                >
                  Register
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
