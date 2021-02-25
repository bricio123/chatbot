import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

import '../Pages/Dashboard/Dashboard.css';

const NavbarAll = () => {
  return (
    <div>
      <Navbar bg="light" className="navbar_container">
        <Link to="/">
          
        </Link>
        <Nav className="m-auto text-light" variant="light">
          <Nav.Link>
            <Link to="/Purpose">Propósito</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/Dashboard">Conheça os bots </Link>
          </Nav.Link>

          <Nav.Link>Sobre nós</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarAll;
