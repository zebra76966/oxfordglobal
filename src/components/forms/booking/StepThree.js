// StepThree.jsx
import React from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";

const StepThree = ({ formData, setFormData, onBack, onContinue }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Form>
      <Row className="gy-4 bg-white px-lg-4 p-3 rounded-4 pb-5 pt-3">
        {/* Date and Time */}
        <Col md={6}>
          <div className="bg-light px-3 d-flex align-items-center rounded-0">
            <img src="icons/Preto-Black/Prancheta 13.png" width={40} className="me-2" />

            <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 shadow-none p-0 no-default-icon" />
          </div>
        </Col>

        {/* Time */}
        <Col md={6}>
          <div className="bg-light px-3 d-flex align-items-center rounded-0">
            <img src="icons/Preto-Black/Prancheta 7.png" width={40} className="me-2" />

            <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 shadow-none p-0 no-default-icon" />
          </div>
        </Col>

        <Col md={12}>
          <Form.Control placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 py-3 rounded-0" />
        </Col>

        <Col md={12}>
          <Form.Control placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 py-3 rounded-0" />
        </Col>

        <Col md={12}>
          <div className="d-flex align-items-center bg-light px-3  rounded-0">
            <Image src="https://flagcdn.com/w40/gb.png" alt="GB" width={25} className="me-2" />
            <FaChevronDown className="me-2 text-muted" />
            <Form.Control type="text" placeholder="Contact Number" name="phone" value={formData.phone} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 shadow-none p-0" />
          </div>
        </Col>

        <Col md={12}>
          <Form.Control type="email" placeholder="Email*" name="email" value={formData.email} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 py-3 rounded-0" />
        </Col>

        <Col md={6}>
          <div className="bg-light px-3 d-flex align-items-center justify-content-between rounded-0">
            <img src="icons/Preto-Black/Prancheta 6.png" width={40} className="me-2" />
            <Form.Select name="passengers" value={formData.passengers} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 shadow-none p-0 ">
              <option disabled value="">
                Number of Passengers
              </option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </Form.Select>
          </div>
        </Col>

        {/* Number of Suitcases */}
        <Col md={6}>
          <div className="bg-light px-3  d-flex align-items-center justify-content-between rounded-0">
            <img src="icons/Preto-Black/Prancheta 12.png" width={40} className="me-2" />
            <Form.Select name="suitcases" value={formData.suitcases} onChange={handleChange} className="bg-light border-0 py-3 fs-5 px-4 shadow-none p-0 ">
              <option disabled value="">
                Number of Suitcases
              </option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </Form.Select>
          </div>
        </Col>

        {/* Checkboxes */}
        <Col md={12}>
          <Form.Check
            className="fs-4  border-top border-dark border-1  pt-4 mt-4"
            type="checkbox"
            name="bookingForSomeoneElse"
            label="Booking for someone else?"
            checked={formData.bookingForSomeoneElse}
            onChange={handleChange}
          />
        </Col>
        <Col md={12}>
          <Form.Check className="fs-4 border-top border-dark border-1 py-3" type="checkbox" name="airportPickup" label="Airport pickup?" checked={formData.airportPickup} onChange={handleChange} />
        </Col>
      </Row>
    </Form>
  );
};

export default StepThree;
