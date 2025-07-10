import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaClock, FaEnvelope, FaRegQuestionCircle } from "react-icons/fa";
import { CiInstagram, CiMail, CiCircleQuestion } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="custom-footer text-white py-5">
      <div className="border-bottom border-1 border-light pb-4">
        <Container>
          <Row className="align-items-center justify-content-between ">
            {/* Left Side */}
            <Col xs="auto">
              <p className="my-0 lead">© 2025 Oxford Global</p>
            </Col>

            {/* Right Side */}
            <Col xs="auto" className="d-flex align-items-center gap-3 flex-wrap">
              <Button variant="outline-light" size="lg" className="px-4 ">
                Contact
              </Button>
              <CiInstagram className="fs-4" />
              <IoCallOutline className="fs-4" />
              <CiMail className="fs-4" />
              <CiCircleQuestion className="fs-3" />
              <span className="lead">Help</span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
