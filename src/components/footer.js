import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="custom-footer text-white py-5">
      <div className="border-bottom border-1 border-light pb-4">
        <Container>
          <Row className="align-items-center justify-content-lg-between justify-content-center flex-lg-row flex-column ">
            {/* Left Side */}
            <Col xs="auto" className="order-lg-1 order-2 pt-lg-0 pt-3">
              <p className="my-0 lead">© 2025 Oxford Global</p>
            </Col>

            {/* Right Side */}
            <Col xs="auto" className="d-flex align-items-center gap-xl-5 gap-3 flex-wrap order-lg-2 order-1">
              <Button variant="outline-light" size="md" className="px-4 py-2 fs-6" onClick={() => navigate("/contact")}>
                Contact
              </Button>
              <img src="/icons/svgs/insta-w.svg" width={27.9} className="footIco mx-xl-0 " />
              <img src="/icons/svgs/phone-w.svg" width={27.9} className="footIco mx-xl-0 " />
              <img src="/icons/svgs/envelope-w.svg" width={27.9} className="footIco mx-xl-0 " />
              <div className="d-flex gap-3">
                <img src="/icons/svgs/help-w.svg" width={27.9} className="footIco mx-xl-0 " />

                <span className="lead">Help</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
