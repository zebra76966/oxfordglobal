import React, { useEffect } from "react";
import "./master.css";
import HeroSection from "./hero";
import { Button, Col, Container, Row } from "react-bootstrap";
import CarFeatureCard from "./cardHome";
import carsFleetData from "./cars.json";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ChatBox from "./chatBox";

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
      <ChatBox />
      <div className="w-100 bg-white pt-5">
        <div className="w-100 bg-dark  py-4">
          <h5 className=" fs-2 font-thin text-center mb-3 pt-5 text-light">
            About the <span className="f-bold"> services</span>
          </h5>
          <Container className="my-5 " id="services">
            <div className="d-lg-flex gap-4  justify-content-between">
              <div className="w-100 mx-auto " style={{ maxWidth: "526.88px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-100 text-center text-light h-100 card bg-dark border-0 "
                >
                  <img src="/One-way.jpg" className="customRounded-3 w-100 my-5" style={{ height: "234px", objectFit: "cover" }} />

                  <h6 className="fs-1 font-thin" style={{ fontSize: "39.3px" }}>
                    One way
                  </h6>

                  <p className="f-bold my-4 fs-3" style={{ fontSize: "28px" }}>
                    Elegant simplicity for <span className="d-block f-bold  "> direct transfers</span>
                  </p>

                  <p className="font-thin  lead line-height h-100" style={{ fontSize: "20px" }}>
                    Designed for seamless point-to-point journeys such as airport, hotel, or event transfers, the One Way service combines efficiency, punctuality, and sophistication. A smooth and
                    discreet experience for those who seek to arrive with peace of mind and style.
                  </p>

                  <div className="w-100">
                    <Button variant="outline-light" size="lg" className="bBtn customRounded-2 mt-5 text-center fw-light w-100" style={{ maxWidth: "334.88px", height: "84.31px", fontSize: "31.86px" }}>
                      <span className="px-5">Book now</span>
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="w-100 mx-auto" style={{ maxWidth: "526.88px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-100 text-center text-light h-100 h-100 card bg-dark border-0 "
                >
                  <img src="/By-the-our.jpg" className="customRounded-3 w-100 my-5" style={{ height: "234px", objectFit: "cover" }} />

                  <h6 className="fs-1 font-thin " style={{ fontSize: "39.3px" }}>
                    By the hour
                  </h6>

                  <p className="f-bold  my-4 fs-3" style={{ fontSize: "28px" }}>
                    Flexibility and exclusivity on <span className="d-block f-bold  "> your schedule</span>
                  </p>

                  <p className="font-thin  lead line-height h-100" style={{ fontSize: "20px" }}>
                    Perfect for appointments with multiple stops, consecutive meetings, or extended use, the By the Hour service offers complete freedom of itinerary with a dedicated chauffeur at your
                    disposal. A tailored solution for those who value control, comfort, and uninterrupted avalability without the constraints of fixed schedules.
                  </p>
                  <div className="w-100">
                    <Button variant="outline-light" size="lg" className="bBtn customRounded-2 mt-5 text-center fw-light w-100" style={{ maxWidth: "334.88px", height: "84.31px", fontSize: "31.86px" }}>
                      Book now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="bgBottom   pt-xl-5 pt-3">
        <Container>
          <h5 className=" display-6 text-center mb-2 pt-4 font-thin text-light">
            Our <span className="f-bold"> vehicle fleet</span>
          </h5>
          <div className="position-relative d-lg-flex justify-content-center gap-4" style={{ zIndex: "10", transform: "translateY(60px)" }}>
            {carsFleetData.map((ini, i) => {
              return (
                <div className="mx-auto mx-lg-0 mb-3 mb-lg-0" style={{ width: "362.63px" }}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i - 0.5 + 0.2 }} className="w-100 ">
                    <CarFeatureCard carData={ini} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
        <img src="/Imagem-1.png" className="w-100 position-relative bgimgBtm" style={{ zIndex: "3" }} />
      </div>
    </>
  );
};

export default Main;
