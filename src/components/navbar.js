import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Dropdown, Image, Offcanvas } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  return (
    <Navbar expand="lg" variant="dark" style={{ zIndex: "99999" }} className="py-1 bg-dark position-sticky top-0 start-0 w-100">
      <Container className="py-3">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image src="/Branca_White.png" alt="Oxford Global" height="40" className="me-2 brandImg" />
          {/* <span className="fw-bold text-white" style={{ fontSize: "1.25rem" }}>
            Oxford<span style={{ fontWeight: 400 }}>Global</span>
          </span> */}
        </Navbar.Brand>

        {/* Toggle button for smaller screens */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

        {/* Offcanvas for mobile view */}
        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="bg-dark text-white d-lg-none" style={{ zIndex: "99999" }}>
          <Offcanvas.Header closeButton closeVariant="white">
            {/* <Offcanvas.Title>
              <Navbar.Brand as={NavLink} to="/">
                <Image src="/Branca_White.png" alt="Oxford Global" height="40" />
              </Navbar.Brand>
            </Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column gap-4 text-uppercase fw-bold">
              <Nav.Link as={NavLink} to={"/#services"} onClick={handleClose} className="text-white navText">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/aboutus"} onClick={handleClose} className="text-white navText">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/forchauffeurs"} onClick={handleClose} className="text-white navText">
                For Chauffeurs
              </Nav.Link>

              <div className="d-flex align-items-center gap-2">
                <Button
                  variant="outline-light"
                  className="px-5 py-2 nBtn font-light"
                  style={{ height: "43.11px" }}
                  onClick={() => {
                    navigate("/booking");
                    handleClose();
                  }}
                >
                  Book
                </Button>

                <Button
                  variant="outline-light"
                  className="px-4 nBtn py-0 d-flex gap-2 align-items-center font-light hoverImg justify-content-center"
                  style={{ height: "43.11px" }}
                  onClick={() => {
                    navigate("/login");
                    handleClose();
                  }}
                >
                  <img src="/icons/svgs/user-w.svg" width={20.62} alt="user icon" />
                  Sign Up
                </Button>
              </div>

              <Dropdown align="end">
                <Dropdown.Toggle variant="dark" id="dropdown-language" className="border-0 bg-dark">
                  <Image src="https://flagcdn.com/w40/gb.png" alt="English" className="me-1" style={{ width: "24px", height: "24px", borderRadius: "100%", objectFit: "cover" }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/en">
                    <Image src="https://flagcdn.com/w40/gb.png" className="me-2" style={{ width: "24px", height: "24px", borderRadius: "100%" }} />
                    English
                  </Dropdown.Item>
                  <Dropdown.Item href="#/fr">
                    <Image src="https://flagcdn.com/w40/fr.png" className="me-2" style={{ width: "24px", height: "24px", borderRadius: "100%" }} />
                    French
                  </Dropdown.Item>
                  <Dropdown.Item href="#/es">
                    <Image src="https://flagcdn.com/w40/es.png" className="me-2" style={{ width: "24px", height: "24px", borderRadius: "100%" }} />
                    Spanish
                  </Dropdown.Item>
                  <Dropdown.Item href="#/ar">
                    <Image src="https://flagcdn.com/w40/sa.png" className="me-2" style={{ width: "24px", height: "24px", borderRadius: "100%" }} />
                    Arabic
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Horizontal nav for large screens */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-end d-none d-lg-flex">
          <Nav className="align-items-center gap-lg-3 gap-2">
            <Nav.Link as={NavLink} to={"/#services"} className="text-white font-light mx-xl-2 mx-0 navText" style={{ fontSize: "14.81px" }}>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/aboutus"} className="text-white font-light mx-xl-2 mx-0 navText" style={{ fontSize: "14.81px" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/forchauffeurs"} className="text-white font-light mx-xl-2 mx-0 navText" style={{ fontSize: "14.81px" }}>
              For Chauffeurs
            </Nav.Link>

            <Button variant="outline-light" className="px-5 py-2 nBtn  mx-xl-2 mx-0 font-light" style={{ height: "43.11px" }} onClick={() => navigate("/booking")}>
              Book
            </Button>

            <Button
              variant="outline-light"
              className="px-4  nBtn py-0 mx-xl-2 mx-0 d-flex gap-2 align-items-center  font-light hoverImg"
              style={{ height: "43.11px" }}
              onClick={() => navigate("/login")}
            >
              <img src="/icons/svgs/user-w.svg" width={20.62} />
              Sign Up
            </Button>

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
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
