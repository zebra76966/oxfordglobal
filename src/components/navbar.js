import React from "react";
import { Navbar, Nav, Container, Button, Dropdown, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#0f0f0f" }} className="py-4">
      <Container className="py-3">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image src="/Branca_White.png" alt="Oxford Global" height="50" className="me-2" />
          {/* <span className="fw-bold text-white" style={{ fontSize: "1.25rem" }}>
            Oxford<span style={{ fontWeight: 400 }}>Global</span>
          </span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="#" className="text-white mx-2">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              About Us
            </Nav.Link>
            <Nav.Link href="#" className="text-white mx-2">
              For chauffeurs
            </Nav.Link>

            {/* Book Button */}
            <Button variant="outline-light" className="px-4 mx-2">
              Book
            </Button>

            {/* Sign Up Button with icon */}
            <Button variant="outline-light" className="px-4 mx-2 d-flex align-items-center" onClick={() => navigate("/login")}>
              <i className="fa fa-user me-2" />
              Sign Up
            </Button>

            {/* Language Dropdown with Flag */}
            <Dropdown align="end" className="mx-2">
              <Dropdown.Toggle variant="dark" id="dropdown-language" className="border-0">
                <Image src="https://flagcdn.com/w40/gb.png" alt="English" width="24" height="16" className="me-1" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/en">
                  <Image src="https://flagcdn.com/w40/gb.png" width="24" className="me-2" />
                  English
                </Dropdown.Item>
                <Dropdown.Item href="#/fr">
                  <Image src="https://flagcdn.com/w40/fr.png" width="24" className="me-2" />
                  French
                </Dropdown.Item>
                {/* Add more languages here */}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
