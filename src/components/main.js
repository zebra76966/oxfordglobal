import React from "react";
import "./master.css";
import HeroSection from "./hero";
import { Button, Col, Container, Row } from "react-bootstrap";
import CarFeatureCard from "./cardHome";
import carsFleetData from "./cars.json";
import { motion } from "framer-motion";
const Main = () => {
  return (
    <>
      <HeroSection />

      <div className="w-100 bg-white pt-5">
        <div className="w-100 bg-dark  py-4">
          <Container className="my-5 ">
            <Row className="justify-content-center gap-5">
              <Col md={5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-100 text-center text-light h-100 card bg-dark border-0"
                >
                  <img src="/hero.jpeg" className="customRounded-3 w-100 my-4" style={{ height: "250px", objectFit: "cover" }} />

                  <h6 className="fs-3 fw-light ">One way</h6>

                  <p className="fw-semibold lead my-4">
                    Elegant simplicity for <span className="d-block"> direct transfers</span>
                  </p>

                  <p className="text-light lead h-100">
                    Designed for seamless point-to-point journeys such as airport, hotel, or event transfers, the One Way service combines efficiency, punctuality, and sophistication. A smooth and
                    discreet experience for those who seek to arrive with peace of mind and style.
                  </p>

                  <Button variant="outline-light" size="lg" className="customRounded-2 mt-5 py-3 px-5 fs-3 fw-light">
                    <span className="px-5">Book now</span>
                  </Button>
                </motion.div>
              </Col>
              <Col md={5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-100 text-center text-light h-100 h-100 card bg-dark border-0"
                >
                  <img src="/model.jpg" className="customRounded-3 w-100 my-4" style={{ height: "250px", objectFit: "cover" }} />

                  <h6 className="fs-3 fw-light ">By the hour</h6>

                  <p className="fw-semibold lead my-4">
                    Flexibility and exclusivity on <span className="d-block"> your schedule</span>
                  </p>

                  <p className="text-light lead h-100">
                    Perfect for appointments with multiple stops, consecutive meetings, or extended use, the By the Hour service offers complete freedom of itinerary with a dedicated chauffeur at your
                    disposal. A tailored solution for those who value control, comfort, and uninterrupted avalability without the constraints of fixed schedules.
                  </p>
                  <Button variant="outline-light" size="lg" className="customRounded-2 mt-5 py-3 px-5 fs-3 fw-light">
                    <span className="px-5">Book now</span>
                  </Button>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="bgBottom   py-5">
        <Container style={{ height: "130dvh" }}>
          <h5 className=" display-6 text-center mb-5 pt-4 text-light">
            Our <span className="fw-bold"> vehicle fleet</span>
          </h5>
          <Row>
            {carsFleetData.map((ini, i) => {
              return (
                <Col lg={4}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i - 0.5 + 0.2 }} className="w-100">
                    <CarFeatureCard carData={ini} />
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main;
