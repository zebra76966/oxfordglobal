import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser, FaDollarSign, FaShieldAlt } from "react-icons/fa";
import "./benefits.css";

const benefits = [
  {
    icon: "/icons/Branco-White/Prancheta 11.png",
    title: "TEAMWORK",
    text: `At Oxford Global you are much more than just a driver. You are part of a trusted and respected team. We value open communication and professional relationships.`,
  },
  {
    icon: "/icons/Branco-White/Prancheta 22.png",
    title: "STABLE INCOME",
    text: `Our business model is designed to provide consistent, high-value opportunities through long-term partnerships and premium-level service.`,
  },
  {
    icon: "/icons/Branco-White/Prancheta 5.png",
    title: "DRIVER SAFETY",
    text: `Your safety is a top priority. All rides are pre-scheduled with verified clients. Our operations team monitors routes in real time.`,
  },
];

const DriverBenefits = () => {
  return (
    <div className="benefits-section pt-5 mt-5">
      <Container>
        <Row className="justify-content-center">
          {benefits.map((item, idx) => (
            <Col key={idx} md={4} className="mb-4 p-4">
              <div className="benefit-card text-center border-dark border-1 border p-4">
                <div className="benefit-icon">
                  <img src={item.icon} width={90} />
                </div>
                <h5 className="benefit-title fs-2 f-bold my-5 pt-3">{item.title}</h5>
                <p className=" lead font-thin text-dark mt-3 pb-3 line-height-2">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DriverBenefits;
