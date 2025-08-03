// ChauffeurRequirements.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser, FaShieldAlt, FaStar } from "react-icons/fa";

const ChauffeurRequirements = () => {
  return (
    <div className="chauffeur-section pb-5 pt-0">
      <h5 className="display-6 font-thin  text-center pb-5 mb-5 mt-0 pt-0 translate-lg-20">
        Our <span className="font-regular">requirements</span>
      </h5>
      <Container>
        <Section
          icon={"/icons/Branco-White/Prancheta 11.png"}
          title="Chauffeur requirements"
          content={
            <ul className="mt-lg-0 mt-4">
              <li>PCO License</li>
              <li>3 Years Chauffeur Experience</li>
              <li>2 Character References</li>
              <li>A smart Suit, Shirt and Tie</li>
              <li>Excellent Topographical Knowledge</li>
            </ul>
          }
        />

        <Section
          icon={"/icons/Branco-White/Prancheta 5.png"}
          title="Confidentiality"
          content={<p className="mt-lg-0 mt-4">Our clients highly value the security of their information, which is why each chauffeur will sign a confidentiality agreement.</p>}
        />

        <Section
          icon={"/icons/Branco-White/Prancheta 14.png"}
          title="Professionalism"
          content={
            <p className="mt-lg-0 mt-4">
              We require a respectful and formal attitude towards our clients. The chauffeur must be aligned with the core values of Oxford Global, as they are an extension of the company and
              represent its image.
            </p>
          }
        />
      </Container>
    </div>
  );
};

const Section = ({ icon, title, content }) => (
  <Row className="section-row align-items-center mb-5">
    <Col xs={12} lg={4} md={6} className="icon-col gap-2 d-flex justify-content-start justify-content-md-start align-items-center">
      <img src={icon} width={150} />
      <h5 className="section-title fs-3 font-thin">{title}</h5>
    </Col>
    <Col xs={12} lg={4} md={2} className="d-flex align-items-center justify-content-center pe-md-5">
      <div className="border-1 border-bottom border-light py-0 my-0 w-100"></div>
    </Col>
    <Col xs={12} md={4} className="section-content font-thin fw-light text-lighter lead">
      {content}
    </Col>
  </Row>
);

export default ChauffeurRequirements;
