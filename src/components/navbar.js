import React from "react";
import { Navbar, Nav, Container, Button, Dropdown, Image } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#0f0f0f", zIndex: "99999" }} className="py-4 position-sticky top-0 start-0 w-100">
      <Container className="py-3">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image src="/Branca_White.png" alt="Oxford Global" height="40" className="me-2 brandImg" />
          {/* <span className="fw-bold text-white" style={{ fontSize: "1.25rem" }}>
            Oxford<span style={{ fontWeight: 400 }}>Global</span>
          </span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-lg-3 gap-2">
            <Nav.Link
              // onClick={(e) => {
              //   e.preventDefault();
              //   navigate("/", { replace: false });

              //   // Delay scroll after navigation
              //   setTimeout(() => {
              //     const section = document.getElementById("services");
              //     if (section) {
              //       section.scrollIntoView({ behavior: "smooth" });
              //     }
              //   }, 100); // 100ms delay usually works well
              // }}
              as={NavLink}
              to={"/#services"}
              className="text-white font-light mx-xl-2 mx-0 navText"
              style={{ fontSize: "14.81px" }}
            >
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/aboutus"} className="text-white font-light mx-xl-2 mx-0 navText" style={{ fontSize: "14.81px" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/forchauffeurs"} className="text-white font-light mx-xl-2 mx-0 navText" style={{ fontSize: "14.81px" }}>
              For chauffeurs
            </Nav.Link>

            {/* Book Button */}
            <Button variant="outline-light" className="px-5 py-2 nBtn  mx-xl-2 mx-0 font-light" style={{ height: "43.11px" }} onClick={() => navigate("/booking")}>
              Book
            </Button>

            {/* Sign Up Button with icon */}
            <Button
              variant="outline-light"
              className="px-4  nBtn py-0 mx-xl-2 mx-0 d-flex gap-2 align-items-center font-light hoverImg"
              style={{ height: "43.11px" }}
              onClick={() => navigate("/login")}
            >
              <img src="/icons/svgs/user-w.svg" width={20.62} />
              {/* <i className="fa fa-user me-2" /> */}
              Sign Up
            </Button>

            {/* Language Dropdown with Flag */}
            <Dropdown align="end" className=" mx-xl-2 mx-0">
              <Dropdown.Toggle variant="dark" id="dropdown-language" className="border-0 bg-dark">
                <Image src="https://flagcdn.com/w40/gb.png" alt="English" className="me-1" style={{ width: "24px", height: "24px", borderRadius: "100%", objectFit: "cover" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/en">
                  <Image src="https://flagcdn.com/w40/gb.png" className="me-2 " style={{ width: "24px", height: "24px", borderRadius: "100%", objectFit: "cover" }} />
                  English
                </Dropdown.Item>
                <Dropdown.Item href="#/fr">
                  <Image src="https://flagcdn.com/w40/fr.png" className="me-2 " style={{ width: "24px", height: "24px", borderRadius: "100%", objectFit: "cover" }} />
                  French
                </Dropdown.Item>
                <Dropdown.Item href="#/es">
                  <Image src="https://flagcdn.com/w40/es.png" className="me-2" style={{ width: "24px", height: "24px", borderRadius: "100%", objectFit: "cover" }} alt="Spanish Flag" />
                  Spanish
                </Dropdown.Item>

                <Dropdown.Item href="#/ar">
                  <Image src="https://flagcdn.com/w40/sa.png" className="me-2" style={{ width: "24px", height: "24px", borderRadius: "100%", objectFit: "cover" }} alt="Arabic Flag" />
                  Arabic
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
