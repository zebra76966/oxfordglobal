import React, { useEffect } from "react";
import "./master.css";
import HeroSection from "./hero";
import { Button, Col, Container, Row } from "react-bootstrap";
import CarFeatureCard from "./cardHome";
import carsFleetData from "./cars.json";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      <HeroSection />

      <div className="w-100 bg-white pt-5">
        <div className="w-100 bg-dark  py-4">
          <h5 className=" fs-2 font-thin text-center mb-5 pt-4 text-light">
            About the <span className="f-bold"> services</span>
          </h5>
          <Container className="my-5 " id="services">
            <Row className="gap-3 justify-content-around">
              <Col md={5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-100 text-center text-light h-100 card bg-dark border-0 "
                >
                  <img src="/One-way.jpg" className="customRounded-3 w-100 my-5" style={{ height: "220px", objectFit: "cover" }} />

                  <h6 className="fs-1 font-thin fw-lighter">One way</h6>

                  <p className="fw-semibold lead my-4 fs-3">
                    Elegant simplicity for <span className="d-block"> direct transfers</span>
                  </p>

                  <p className="font-thin text-lighter lead line-height h-100">
                    Designed for seamless point-to-point journeys such as airport, hotel, or event transfers, the One Way service combines efficiency, punctuality, and sophistication. A smooth and
                    discreet experience for those who seek to arrive with peace of mind and style.
                  </p>

                  <div className="w-100">
                    <Button variant="outline-light" size="lg" className="customRounded-2 mt-5 py-3 px-3 fs-4 fw-light">
                      <span className="px-5">Book now</span>
                    </Button>
                  </div>
                </motion.div>
              </Col>
              <Col md={5}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-100 text-center text-light h-100 h-100 card bg-dark border-0 "
                >
                  <img src="/By-the-our.jpg" className="customRounded-3 w-100 my-5" style={{ height: "220px", objectFit: "cover" }} />

                  <h6 className="fs-1 font-thin fw-lighter">By the hour</h6>

                  <p className="fw-semibold  my-4 fs-3">
                    Flexibility and exclusivity on <span className="d-block"> your schedule</span>
                  </p>

                  <p className="font-thin text-lighter lead line-height h-100">
                    Perfect for appointments with multiple stops, consecutive meetings, or extended use, the By the Hour service offers complete freedom of itinerary with a dedicated chauffeur at your
                    disposal. A tailored solution for those who value control, comfort, and uninterrupted avalability without the constraints of fixed schedules.
                  </p>
                  <div className="w-100">
                    <Button variant="outline-light" size="lg" className="customRounded-2 mt-5 py-3 px-3 fs-4 fw-light">
                      <span className="px-5">Book now</span>
                    </Button>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="bgBottom   pt-5">
        <Container>
          <h5 className=" display-6 text-center mb-5 pt-4 font-thin text-light">
            Our <span className="f-bold"> vehicle fleet</span>
          </h5>
          <Row className="position-relative" style={{ zIndex: "10", transform: "translateY(60px)" }}>
            {carsFleetData.map((ini, i) => {
              return (
                <Col lg={4}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i - 0.5 + 0.2 }} className="w-100 ">
                    <CarFeatureCard carData={ini} />
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
        <img src="/Imagem-1.png" className="w-100 position-relative bgimgBtm" style={{ zIndex: "3" }} />
      </div>
    </>
  );
};

export default Main;
