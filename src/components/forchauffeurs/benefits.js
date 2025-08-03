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
    <div className="benefits-section pt-lg-5 pt-2 mt-lg-5 mt-2">
      <Container>
        <div className="justify-content-center d-lg-flex gap-3">
          {benefits.map((item, idx) => (
            <div className="mb-lg-4 mt-lg-0 mt-4 mx-lg-0 mx-auto" style={{ maxWidth: "362.63px" }}>
              <div className="benefit-card text-center border-dark border-1 border p-3 w-100">
                <div className="benefit-icon">
                  <img src={item.icon} width={90} />
                </div>
                <h5 className="benefit-title  f-bold my-5 pt-3" style={{ fontSize: "28px" }}>
                  {item.title}
                </h5>
                <p className=" lead font-thin text-dark mt-3 pb-3 line-height-2" style={{ fontSize: "20px", width: "307.18px" }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DriverBenefits;
