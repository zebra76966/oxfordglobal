import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

const carOptions = [
  {
    name: "Mercedes-Benz S-Class",
    price: 692.09,
    image: "/merc-s.jpg",
    features: ["4 adults", "2 suitcases", "2 carry bags", "wifi"],
  },
  {
    name: "Range Rover Vogue",
    price: 692.09,
    image: "/merc-v.jpg",
    features: ["4 adults", "2 suitcases", "2 carry bags", "wifi"],
  },
  {
    name: "Mercedes-Benz V-Class",
    price: 592.09,
    image: "/range-roever-v.jpg",
    features: ["4 adults", "2 suitcases", "2 carry bags", "wifi"],
  },
];

const extraFeatures = ["Air conditioning", "Onboard Wi-Fi", "Courtesy water", "Phone charger"];

const StepTwo = ({ selectedCar, setSelectedCar, onBack, onContinue }) => {
  return (
    <div className="px-1 ">
      <Row className="g-4">
        {carOptions.map((car, index) => (
          <Col lg={12} key={index}>
            <Card
              className={`p-lg-5 p-4 rounded-4  ${selectedCar === index ? "border border-dark border-3 shadow-lg" : "border-3 border-white shadow-sm "}`}
              onClick={() => setSelectedCar(index)}
              style={{ cursor: "pointer", transition: "all 0.3s ease" }}
            >
              <Row className="align-items-start">
                {/* Left content */}
                <Col md={7} xl={8}>
                  <h5 className="mb-2 fs-2">{car.name}</h5>

                  {/* Feature icons */}
                  <div className="d-flex flex-wrap gap-3 text-muted mb-3 fs-6">
                    {car.features.map((feature, i) => (
                      <span key={i} className="d-flex align-items-center gap-1">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <img src={car.image} alt={car.name} style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }} className="mb-3" />
                </Col>

                {/* Image + Price */}
                <Col md={5} xl={4} className="text-center">
                  {/* Bullet features */}
                  <ul className="list-unstyled d-flex flex-column gap-3">
                    {extraFeatures.map((feature, i) => (
                      <li key={i} className={`d-flex align-items-center gap-5 text-muted fs-5  ${extraFeatures.length - 1 !== i ? "border-1 border-bottom" : "border-0"} border-dark pb-3`}>
                        <BsCheckCircle className="text-dark" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className=" border border-dark rounded-4 px-4 d-inline-block fs-4 fw-bold w-100 text-center py-2">£{car.price.toFixed(2)}</div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StepTwo;
