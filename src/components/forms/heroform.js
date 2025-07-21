import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ToggleButtonGroup, ToggleButton, InputGroup } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { CiLocationOn, CiCalendar, CiClock2 } from "react-icons/ci";
import "./heroform.css";

const BookingForm = () => {
  const [tripType, setTripType] = useState("hourly");

  return (
    <Container className=" w-100 px-0 shadow" style={{ borderRadius: "20px", background: "#fff", maxWidth: "414.31px" }}>
      {/* Trip Type Tabs */}
      <ToggleButtonGroup type="radio" name="tripType" value={tripType} onChange={(val) => setTripType(val)} className="w-100 mb-4">
        <ToggleButton
          id="tbg-radio-1"
          value={"oneway"}
          variant="light"
          className={`w-50 text-${tripType == "oneway" ? "light" : "dark"} border-0  fs-5 py-3`}
          style={{
            backgroundColor: tripType === "oneway" ? "#000" : "white",
            // fontWeight: 400,
            fontSize: "20.51px",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "15px",
          }}
        >
          One way
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-2"
          value={"hourly"}
          variant="dark"
          className={`w-50 text-${tripType == "hourly" ? "light" : "dark"} border-0  fs-5 py-3`}
          style={{
            backgroundColor: tripType === "hourly" ? "#000" : "white",
            // fontWeight: 400,
            fontSize: "20.51px",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "0",
          }}
        >
          By the hour
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Form Inputs */}
      <Form className="px-4 pb-4 ">
        <InputGroup className="mb-3 bg-light pe-3 ps-1 py-2 rounded d-flex gap-2 align-items-center">
          <img src="icons/Preto-Black/Prancheta 8.png" width={40} className="me-1 mt-1" />
          {/* <CiLocationOn className="me-2 mt-1 fs-4 text-muted" /> */}
          <Form.Group>
            <Form.Label className="mb-0 font-regular text-dark" style={{ fontSize: "16.16px" }}>
              From
            </Form.Label>
            <Form.Control type="text" placeholder="Address, airport, hotel, ..." style={{ fontSize: "12.87px" }} className="border-0 font-thin p-0 bg-light text-muted" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 bg-light pe-3 ps-1 py-2 rounded d-flex gap-2 align-items-center">
          <img src="icons/Preto-Black/Prancheta 8.png" width={40} className="me-1 mt-1" />
          {/* <CiLocationOn className="me-2 mt-1 fs-4 text-muted" /> */}
          <Form.Group>
            <Form.Label className="mb-0 font-regular" style={{ fontSize: "16.16px" }}>
              To
            </Form.Label>
            <Form.Control type="text" placeholder="Address, airport, hotel, ..." style={{ fontSize: "12.87px" }} className="border-0 font-thin p-0 bg-light" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 bg-light pe-3 ps-1 py-2 rounded d-flex gap-2 align-items-center">
          <img src="icons/Preto-Black/Prancheta 13.png" width={40} className="me-1 mt-1" />
          {/* <CiCalendar className="me-2 mt-1 fs-4 text-muted" /> */}
          <Form.Group>
            <Form.Label className="mb-0 font-regular" style={{ fontSize: "16.16px" }}>
              Date
            </Form.Label>
            <Form.Control type="date" style={{ fontSize: "12.87px" }} className="border-0 font-thin p-0 bg-light no-default-icon w-100" />
          </Form.Group>
        </InputGroup>

        <InputGroup className="mb-3 bg-light pe-3 ps-1 py-2 rounded d-flex gap-2 align-items-center">
          <img src="icons/Preto-Black/Prancheta 7.png" width={40} className="me-1 mt-1" />
          {/* <CiClock2 className="me-2 mt-1 fs-4 text-muted" /> */}
          <Form.Group>
            <Form.Label className="mb-0 font-regular" style={{ fontSize: "16.16px" }}>
              Time
            </Form.Label>
            <Form.Control type="time" style={{ fontSize: "12.87px" }} className="border-0 font-thin p-0 bg-light no-default-icon w-100" />
          </Form.Group>
        </InputGroup>

        <Button variant="dark" className="w-100 py-2 rounded-0 font-regular" style={{ fontSize: "21.6px" }}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
