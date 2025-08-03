import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./mission.css";

const VisionMissionValues = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="vmv-section py-5">
      <Container>
        {/* Vision */}
        <Row className="align-items-end mb-5">
          <Col md={4} className="vmv-title">
            <h3 className="display-4 mb-0">Vision</h3>
            <div className="border-1 border-bottom border-dark py-0 my-0 w-100"></div>
          </Col>
          <Col md={8} className="d-md-inline d-none"></Col>
          <Col md={4} className="d-md-inline d-none"></Col>
          <Col md={8} className="textbtm">
            <p className=" lead pt-0 mt-0">
              To be recognized as a leading international provider of executive transportation, distinguished by service excellence, sophistication, and cultural adaptability across diverse markets.
            </p>
          </Col>
        </Row>

        {/* Mission */}
        <Row className="align-items-end mb-5">
          <Col md={4} className="vmv-title">
            <h3 className="display-4 mb-0">Mission</h3>
            <div className="border-1 border-bottom border-dark py-0 my-0 w-100"></div>
          </Col>
          <Col md={8} className="d-md-inline d-none"></Col>
          <Col md={4} className="d-md-inline d-none"></Col>
          <Col md={8} className="textbtm">
            <p className=" lead pt-0 mt-0">
              To deliver high-standard executive mobility solutions with safety, efficiency, and customization, creating exclusive experiences that combine comfort with cultural sensitivity and
              attention to detail.
            </p>
          </Col>
        </Row>

        {/* Values */}
        <Row className="align-items-end mb-4">
          <Col md={4} className="vmv-title">
            <h3 className="display-4 mb-0">Values</h3>
            <div className="border-1 border-bottom border-dark py-0 my-0 w-100"></div>
          </Col>
          <Col md={8} className="d-md-inline d-none h-0 py-0"></Col>
          <Col md={4} className="d-md-inline d-none h-0 py-0"></Col>
          <Col md={8} className="textbtm pt-0">
            <Row>
              <Col md={6} className="mb-4">
                <h5 className="value-title">Excellence</h5>
                <p className=" lead value-desc">A commitment to superior quality in every aspect of our service.</p>
              </Col>
              <Col md={6} className="mb-4">
                <h5 className="value-title">Professionalism & Discretion</h5>
                <p className=" lead value-desc">Ethical and respectful conduct, ensuring client privacy and trust.</p>
              </Col>
              <Col md={6} className="mb-4">
                <h5 className="value-title">Sophistication</h5>
                <p className=" lead value-desc">Elevated standards in service, fleet, and overall experience, reflecting luxury and exclusivity.</p>
              </Col>
              <Col md={6} className="mb-4">
                <h5 className="value-title">Safety & Reliability</h5>
                <p className=" lead value-desc">Meticulous planning and execution to guarantee peace of mind.</p>
              </Col>
              <Col md={6} className="mb-4">
                <h5 className="value-title">Cultural Adaptability</h5>
                <p className=" lead value-desc">Awareness and respect for cultural nuances, delivering tailored service anywhere in the world.</p>
              </Col>
              <Col md={6} className="mb-4">
                <h5 className="value-title">Personalized Service</h5>
                <p className=" lead value-desc">Flexibility and attention to individual needs, offering a truly bespoke experience.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default VisionMissionValues;
