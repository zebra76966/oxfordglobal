import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const StepFour = ({ formData, onBack }) => {
  const baseFare = 592.09;
  const vat = baseFare * 0.2;
  const total = baseFare + vat;

  return (
    <Form className="px-2 px-md-4 bg-white">
      <Row className="g-3">
        {/* Company Details */}
        <Col md={12}>
          <Form.Control placeholder="Company Name" name="company" className="bg-light border-0 py-3 rounded-0" />
        </Col>

        <Col md={12}>
          <Form.Control placeholder="Billing Address" name="billingAddress" className="bg-light border-0 py-3 rounded-0" />
        </Col>

        <Col md={6}>
          <Form.Control placeholder="City" name="city" className="bg-light border-0 py-3 rounded-0" />
        </Col>

        <Col md={6}>
          <Form.Control placeholder="Post/Zip Code" name="zip" className="bg-light border-0 py-3 rounded-0" />
        </Col>

        <Col md={12}>
          <Form.Select name="country" className="bg-light border-0 py-3 rounded-0 text-muted" defaultValue="">
            <option disabled value="">
              Country
            </option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>India</option>
            {/* Add more as needed */}
          </Form.Select>
        </Col>

        {/* Payment Summary */}
        <Col md={12}>
          <div className="border rounded-4 shadow-sm p-4 bg-white">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Excluding VAT</span>
              <strong>£{baseFare.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">VAT (20%)</span>
              <strong>£{vat.toFixed(2)}</strong>
            </div>
            <hr className="my-3" />
            <div className="d-flex justify-content-between fs-5">
              <strong>Including VAT</strong>
              <strong>£{total.toFixed(2)}</strong>
            </div>
          </div>
        </Col>

        {/* Card Number Inputs (6 segments) */}
        <Col md={12}>
          <Form.Group>
            <Form.Label className="text-muted">Card Details</Form.Label>
            <div className="d-flex gap-2">
              {[...Array(6)].map((_, i) => (
                <Form.Control key={i} maxLength={4} className="bg-light border-0 py-3 text-center rounded-0" />
              ))}
            </div>
          </Form.Group>
        </Col>

        {/* Cardholder Name */}
        <Col md={12}>
          <Form.Control placeholder="Cardholder Name" className="bg-light border-0 py-3 rounded-0" />
        </Col>

        {/* Terms */}
        <Col md={12}>
          <p className="text-muted mt-4 small text-center">
            Once your reservation is confirmed, you will receive a full booking confirmation. You may modify your journey at any time. Cancellations are free within 12 hours. All bookings are subject
            to our Terms and Conditions. This service is not available for wedding bookings.
          </p>
        </Col>
      </Row>
    </Form>
  );
};

export default StepFour;
