import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BookingForm from "./forms/heroform";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-100 bgHero">
      <Container className="py-5 ">
        <Row className="align-items-center g-lg-5">
          {/* <Col lg={7} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without
              completing it.
            </p>
          </Col> */}

          <Col md={10} lg={5} className="ms-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <BookingForm />
            </motion.div>
          </Col>
        </Row>
      </Container>

      <div className="bg-light-before pt-5">
        <Row className="align-items-center px-0 mx-0 pt-5">
          <Col lg={6} style={{ zIndex: 2 }}>
            <img src="model.jpg" className="h-100 w-100" style={{ maxHeight: "50dvh", objectFit: "cover", borderRadius: "0 2em 2em 2em" }} />
          </Col>

          <Col lg={6} style={{ zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Container className="p-lg-5 p-3">
                <h5 className="display-6">
                  Be Unique With<span className="d-block fw-bold">Oxford Global</span>
                </h5>

                <p className="fw-light">
                  Our purpose goes beyond transportaion. We craft experiences that evoke emotion, build prestige, and leave a lasteing impression. Every service is designed to reflet the highest
                  standards of excellence, always aligned with our clients' expectations, timelines, and unique demands. Our premium fleet is fully equipped, and our certified chauffeurs are trained
                  to deliver the very best of Oxford Global with discretiioon punctuality, and unmatched sophistication.
                </p>
              </Container>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
