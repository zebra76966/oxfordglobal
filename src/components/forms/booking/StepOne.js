// StepOne.jsx
import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Form, InputGroup, Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";

const StepOne = ({ onContinue }) => {
  const [tripType, setTripType] = useState("hourly");

  return (
    <div className="bg-white  rounded-4 mx-auto w-100 my-2">
      <ToggleButtonGroup type="radio" name="tripType" value={tripType} onChange={(val) => setTripType(val)} className="w-100 mb-4">
        <ToggleButton
          id="tbg-radio-1"
          value={"oneway"}
          variant="light"
          className={`w-50 text-${tripType == "oneway" ? "light" : "dark"} border-0  display-1form py-4`}
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
          className={`w-50 text-${tripType == "hourly" ? "light" : "dark"} border-0  display-1form py-4`}
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
        <InputGroup className="mb-3  bg-light px-3 py-4 rounded d-flex gap-2 align-items-center">
          <CiLocationOn className="fs-3 text-muted" />
          <Form.Control type="text" placeholder="Where from?" className="border-0 bg-light display-1form" />
        </InputGroup>

        <InputGroup className="mb-3  bg-light px-3 py-4 rounded d-flex gap-2 align-items-center">
          <CiLocationOn className=" fs-3 text-muted" />
          <Form.Control type="text" placeholder="Where to?" className="border-0 bg-light display-1form" />
        </InputGroup>

        <Button variant="dark" className="w-100 py-4 rounded-0  fw-semibold display-1form" onClick={() => onContinue()}>
          Get my prices
        </Button>
      </Form>
      <div className="text-center mt-3 pb-4 text-muted" style={{ fontSize: "1.5rem" }}>
        <img src="./icons/svgs/help-w.svg" style={{ filter: "invert(1)" }} className="me-2" />
        Help
      </div>
    </div>
  );
};

export default StepOne;
