import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import "./about.css";
import VisionMissionValues from "./mission";

const AboutUs = () => {
  return (
    <>
      <div className="w-100 bgAboutUs d-flex align-items-center justify-content-center" style={{ maxHeight: "425.11px" }}>
        <motion.h5 className="display-4 text-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          About Us
        </motion.h5>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <Container className="pb-5 pt-3">
          <Row className=" my-5 justify-content-center  px-lg-3 px-2">
            <Col lg={6}>
              <h5 className="display-3 csm font-thin mt-5 text-start">
                Be unic with <span className="f-bold d-block">Oxford Global?</span>
              </h5>
            </Col>
            <Col lg={6}>
              <p className="font-thin text-dark lead line-height py-5 text-start">
                Oxford Global was founded with the purpose of redefining executive transportation by combining traditional British elegance with contemporary efficiency and sophistication. Designed to
                meet the needs of discerning clients, the company offers tailored solutions with discretion, comfort, and security.
              </p>
            </Col>
            <Col xs={12} className="mx-auto">
              <img src="/Imagem-2.jpg" className="aboutIntroimg" />
            </Col>
            <Col lg={12} xl={10} className="col-lg-10 mx-auto  text-center">
              <p className="font-thin text-dark lead line-height py-5 px-lg-3 text-start">
                Our purpose goes beyond transportation. We craft experiences that evoke emotion, build prestige, and leave a lasting impression. Every service is designed to reflect the highest
                standards of excellence, always aligned with our clients' expectations, timelines, and unique demands. Our premium fleet is fully equipped, and our certified chauffeurs are trained to
                deliver the very best of Oxford Global with discretion, punctuality, and unmatched sophistication. Guided by solid values, a global outlook, and a commitment to cultural adaptability,
                Oxford Global delivers excellence in every journey.
              </p>
            </Col>

            <Col md={12} xl={10} className="mx-auto">
              <VisionMissionValues />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default AboutUs;
