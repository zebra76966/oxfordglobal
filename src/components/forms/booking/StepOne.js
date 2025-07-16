// StepOne.jsx
import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Form, InputGroup, Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";

const StepOne = () => {
  const [tripType, setTripType] = useState("hourly");

  return (
    <div className="bg-white  rounded-4" style={{ margin: "auto" }}>
      <ToggleButtonGroup type="radio" name="tripType" value={tripType} onChange={(val) => setTripType(val)} className="w-100 mb-4">
        <ToggleButton
          id="tbg-radio-1"
          value={"oneway"}
          variant="light"
          className={`w-50 text-${tripType == "oneway" ? "light" : "dark"} border-0  fs-5 py-3`}
          style={{
            backgroundColor: tripType === "oneway" ? "#000" : "white",
            fontWeight: 400,
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
            fontWeight: 400,
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "0",
          }}
        >
          By the hour
        </ToggleButton>
      </ToggleButtonGroup>

      <Form className="px-4 pb-4 pt-2">
        <InputGroup className="mb-3 bg-light px-3 py-2 rounded d-flex gap-2 align-items-center">
          <CiLocationOn className="fs-4 text-muted" />
          <Form.Control type="text" placeholder="Where from?" className="border-0 bg-light" />
        </InputGroup>

        <InputGroup className="mb-3 bg-light px-3 py-2 rounded d-flex gap-2 align-items-center">
          <CiLocationOn className="fs-4 text-muted" />
          <Form.Control type="text" placeholder="Where to?" className="border-0 bg-light" />
        </InputGroup>

        <Button variant="dark" className="w-100 py-2 rounded-0 fs-5 fw-semibold">
          Get my prices
        </Button>
      </Form>
      <div className="text-center mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
        <span className="me-1">❔</span> Help
      </div>
    </div>
  );
};

export default StepOne;
