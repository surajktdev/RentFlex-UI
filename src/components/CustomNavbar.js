import React, { use, useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        to="/"
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
        <Nav className="align-items-center gap-md-2" navbar>
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
              Get Started
            </NavLink>
          </NavItem>

          {/* Developer Link (Subtle) */}
          <NavbarText className="d-none d-md-flex align-items-center ms-md-3">
            <NavLink
              tag={ReactLink}
              to="/aboutDeveloper"
              className="text-secondary small text-decoration-none"
            >
              Built by Suraj 👨‍💻
            </NavLink>
          </NavbarText>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
