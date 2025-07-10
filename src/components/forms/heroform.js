import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ToggleButtonGroup, ToggleButton, InputGroup } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { CiLocationOn, CiCalendar, CiClock2 } from "react-icons/ci";

const BookingForm = () => {
  const [tripType, setTripType] = useState("hourly");

  return (
    <Container className="p-4 w-100" style={{ borderRadius: "20px", background: "#fff" }}>
      {/* Trip Type Tabs */}
      <ToggleButtonGroup type="radio" name="tripType" value={tripType} onChange={(val) => setTripType(val)} className="w-100 mb-4">
        <ToggleButton
          id="tbg-radio-1"
          value={"oneway"}
          variant="light"
          className={`w-50 text-${tripType == "oneway" ? "light" : "dark"} border-0 rounded-4 fs-5`}
          style={{
            backgroundColor: tripType === "oneway" ? "#000" : "white",
            fontWeight: 400,
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          One way
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-2"
          value={"hourly"}
          variant="dark"
          className={`w-50 text-${tripType == "hourly" ? "light" : "dark"} border-0 rounded-4 fs-5`}
          style={{
            backgroundColor: tripType === "hourly" ? "#000" : "white",
            fontWeight: 400,
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          By the hour
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Form Inputs */}
      <Form>
        <InputGroup className="mb-3 bg-light px-3 py-2 rounded d-flex gap-2 align-items-center">
          <CiLocationOn className="me-2 mt-1 fs-4 text-muted" />
          <Form.Group>
            <Form.Label className="mb-0 fw-bold text-dark">From</Form.Label>
            <Form.Control type="text" placeholder="Address, airport, hotel, ..." className="border-0 p-0 bg-light text-muted" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 bg-light px-3 py-2 rounded d-flex gap-2 align-items-center">
          <CiLocationOn className="me-2 mt-1 fs-4 text-muted" />
          <Form.Group>
            <Form.Label className="mb-0">To</Form.Label>
            <Form.Control type="text" placeholder="Address, airport, hotel, ..." className="border-0 p-0 bg-light" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 bg-light px-3 py-2 rounded d-flex gap-2 align-items-center">
          <CiCalendar className="me-2 mt-1 fs-4 text-muted" />
          <Form.Group>
            <Form.Label className="mb-0">Date</Form.Label>
            <Form.Control type="date" placeholder="Wed, May 28, 2025" className="border-0 p-0 bg-light" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 bg-light px-3 py-2 rounded d-flex gap-2 align-items-center">
          <CiClock2 className="me-2 mt-1 fs-4 text-muted" />
          <Form.Group>
            <Form.Label className="mb-0">Time</Form.Label>
            <Form.Control type="time" placeholder="17:25" className="border-0 p-0 bg-light" />
          </Form.Group>
        </InputGroup>

        <Button variant="dark" className="w-100 py-2 rounded-0 fs-5  fw-semibold">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
