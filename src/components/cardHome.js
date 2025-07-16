import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";

const CarFeatureCard = ({ carData }) => {
  return (
    <Card className="text-center border-0 shadow-lg px-3 pt-4 pb-3 w-100" style={{ borderRadius: "30px" }}>
      <Card.Body>
        <Card.Title className="mb-3 fw-light fs-4">{carData.name}</Card.Title>

        {/* Car Image */}
        <img src={carData.image} alt="Mercedes S-Class" className="img-fluid my-2" style={{ maxHeight: "100px" }} />

        {/* Feature List */}
        <ListGroup variant="flush" className="mt-3">
          {carData.features.map((feature, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-center justify-content-start gap-5 px-4 border-top border-bottom py-3" style={{ fontSize: "0.95rem", borderColor: "#ccc" }}>
              <BsCheckCircle className="me-2  text-dark fs-3" />
              <span className="w-75  fs-5 text-start"> {feature} </span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Button */}
        <Button variant="outline-dark" className="mt-4 customRounded-1 px-4 py-2 fw-light fs-5 px-5">
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CarFeatureCard;
