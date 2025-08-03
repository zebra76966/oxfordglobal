import React from "react";
import { Form, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./contact.css";

export default function ContactMapForm() {
  return (
    <>
      <div className="w-100 bgForContact d-flex align-items-center justify-content-center" style={{ maxHeight: "425.11px" }}>
        <motion.h5 className="display-2 font-regular text-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          Contact
        </motion.h5>
      </div>
      <Container fluid className="py-5 pe-4 ps-0 ch-80 d-flex align-items-center">
        <div className="w-100 d-flex flex-column flex-lg-row align-items-stretch gap-4 ">
          <div className="mb-4 mb-md-0 d-flex w-100 order-lg-1 order-2" style={{ maxWidth: "854px" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", width: "100%" }} className="py-4">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=The%20Truman%20Brewery&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="89%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-4"
              ></iframe>
            </div>
          </div>

          <div className="d-flex w-100 order-lg-2 order-1" style={{ maxWidth: "641px" }}>
            <div className="w-100 py-4">
              <Form className="h-100">
                <InputGroup className="mb-3 bg-light">
                  <Form.Control placeholder="Name" className="bg-light border-0 shadow-none py-4 px-4 fs-4" />
                  <InputGroup.Text className="bg-light border-0 pe-4">
                    <img src="/icons/svgs/user-w.svg" width={32.56} className="mx-xl-0 " style={{ filter: "invert(1)" }} />
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3 bg-light">
                  <Form.Control placeholder="Email" className="bg-light border-0 shadow-none py-4 px-4 fs-4" />
                  <InputGroup.Text className="bg-light border-0 pe-4">
                    <img src="/icons/svgs/envelope-w.svg" width={32.56} className="mx-xl-0 " style={{ filter: "invert(1)" }} />
                  </InputGroup.Text>
                </InputGroup>

                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={6} placeholder="Text here" className="bg-light border-0 shadow-none py-4 px-4 fs-4" />
                </Form.Group>

                <Button variant="dark" size="lg" className="bBtn customRounded-2 text-center font-thin w-100" style={{ maxWidth: "234px", height: "61px", fontSize: "23px" }}>
                  Confirm
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
