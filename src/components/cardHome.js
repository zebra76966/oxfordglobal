import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

const CarFeatureCard = ({ carData }) => {
  return (
    <Card className="text-center border-0 shadow-lg px-xl-3 pt-4 pb-3 w-100" style={{ borderRadius: "30px", width: "100%" }}>
      <Card.Body className="w-100">
        <Card.Title className="mb-3 fw-light fs-4">{carData.name}</Card.Title>

        {/* Car Image */}
        <img src={carData.image} alt="Mercedes S-Class" className="img-fluid my-2" style={{ maxHeight: "100px" }} />

        {/* Feature List */}
        <ListGroup variant="flush" className="mt-3">
          {carData.features.map((feature, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center justify-content-start gap-4 px-4 border-top border-bottom py-3" style={{ fontSize: "0.95rem", borderColor: "#ccc" }}>
              <img src="/icons/svgs/check.svg" width={29.9} className="me-2 checkIcon" />
              <span className="w-75  fs-5 text-start font-thin" style={{ fontSize: "20px" }}>
                {" "}
                {feature}{" "}
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Button */}
        <Button
          variant="outline-dark"
          className="mt-5 customRounded-1 text-center d-flex align-items-center justify-content-center  fs-5 mx-auto"
          style={{ width: "183.29px", height: "46.14px", fontSize: "17.44px" }}
        >
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CarFeatureCard;
