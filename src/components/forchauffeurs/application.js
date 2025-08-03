import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ProgressBar, Image } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MultiStepFormChauffer() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="d-flex justify-content-center align-items-center bg-light "
      style={{ minHeight: "70dvh" }}
    >
      <Container className="py-5">
        <div className="d-flex justify-content-around gap-5 steps mx-auto  mt-5 mx-auto  mb-5" style={{ maxWidth: "967.09px" }}>
          {[1, 2, 3].map((s) => (
            <div className="d-flex align-items-center gap-2">
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center fs-2 font-regular  text-dark border-dark border-1 border `}
                style={{
                  width: 70,
                  height: 70,
                }}
              >
                {s <= step ? <img src="/icons/svgs/check.svg" height={40} className="fw-light" /> : ""}
              </div>
              <div className="mt-2 fs-4 font-regular ">{"Step" + s}</div>
            </div>
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <section className="bg-white p-lg-5 p-3 rounded-4 mb-4">
              <div className="d-flex gap-4 mb-4 align-items-center">
                <img src="/icons/svgs/user-w.svg" style={{ filter: "invert(1)" }} width={44} />
                <h5 className=" my-0 py-0 " style={{ fontSize: "24.88px" }}>
                  Chauffeurs
                </h5>
              </div>

              <Row className="gy-4 ">
                <Col md={12}>
                  <Form.Control placeholder="First Name" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={12}>
                  <Form.Control placeholder="Last Name" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
              </Row>
            </section>

            <section className="bg-white p-lg-5 p-3 rounded-4 mb-4">
              <div className="d-flex gap-4 mb-4 align-items-center">
                <img src="/icons/svgs/location.svg" width={40} />
                <h5 className=" my-0 py-0 " style={{ fontSize: "24.88px" }}>
                  Address
                </h5>
              </div>
              <Row className="gy-4 ">
                <Col md={12}>
                  <Form.Control placeholder="Street Address" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="City" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Postcode" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Date of Birth" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="National Insurance Number" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Email" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center bg-light px-3  rounded-0">
                    <Image src="https://flagcdn.com/w40/gb.png" alt="GB" width={25} className="me-2" />
                    <FaChevronDown className="me-2 text-muted" />
                    <Form.Control type="text" placeholder="Contact Number" name="phone" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0" />
                  </div>
                </Col>
              </Row>
            </section>

            <section className="bg-white p-lg-5 p-3 rounded-4 mb-4 ">
              <div className="d-flex gap-4 mb-4 align-items-center">
                <img src="/icons/svgs/bank.svg" width={44} />
                <h5 className=" my-0 py-0 " style={{ fontSize: "24.88px" }}>
                  Bank
                </h5>
              </div>

              <Row className="gy-4">
                <Col xs={12}>
                  <Form.Control placeholder="Account Name" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Account Number" className=" bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
                <Col md={6}>
                  <Form.Control placeholder="Sort Code" className="bg-light border-0 py-4 fs-5 px-4 shadow-none p-0 " />
                </Col>
              </Row>
              <Form.Check label="VAT registered" className="fs-4  py-3" />
            </section>

            <div className="text-end">
              <Button onClick={nextStep} variant="outline-dark" size="lg" className="bBtn customRounded-2 text-center font-thin w-100" style={{ maxWidth: "234px", height: "61px", fontSize: "23px" }}>
                Next
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <section className="bg-white p-lg-5 p-3 rounded-4 mb-4">
              <div className="d-flex gap-4 mb-4 align-items-center">
                <img src="/icons/svgs/d-rpofile.svg" width={44} />
                <h5 className=" my-0 py-0 " style={{ fontSize: "24.88px" }}>
                  Driver Profile – Required Document Uploads (All Mandatory):
                </h5>
              </div>
              {Array(8)
                .fill(null)
                .map((_, i) => (
                  <Row key={i} className="align-items-center mb-3">
                    <Col md={6}>
                      <Form.Control placeholder={`Document ${i + 1}`} />
                    </Col>
                    <Col md={3}>
                      <Form.Control type="file" />
                    </Col>
                    <Col md={3}>
                      <div className="bg-white px-3 d-flex align-items-center rounded-0 border-1 border-muted rounded-3 border">
                        <img src="/icons/Preto-Black/Prancheta 13.png" width={30} className="me-2" />

                        <Form.Control type="date" name="date" className="bg-white border-0 no-default-icon py-2" />
                      </div>
                    </Col>
                  </Row>
                ))}
            </section>

            <section className="bg-white p-lg-5 p-3 rounded-4 mb-4">
              <div className="d-flex gap-4 mb-4 align-items-center">
                <img src="/icons/svgs/conditonal.svg" width={44} />
                <h5 className=" my-0 py-0 " style={{ fontSize: "24.88px" }}>
                  Conditional Section:
                </h5>
              </div>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control placeholder="Do you use your own vehicle?" />
                </Col>
                <Col md={6} className="d-flex gap-2">
                  <Button variant="dark">Yes</Button>
                  <Button variant="outline-dark">No</Button>
                </Col>
              </Row>
              <p className="mb-2">If Yes, then show additional required uploads:</p>
              {["Hire & Reward Insurance", "MOT Certificate", "Private Hire Vehicle Licence (PHV)"].map((label, i) => (
                <Row key={i} className="align-items-center mb-3">
                  <Col md={4}>
                    <Form.Control placeholder={label} />
                  </Col>
                  <Col md={4}>
                    <Form.Control type="file" />
                  </Col>
                  <Col md={4}>
                    <div className="bg-white px-3 d-flex align-items-center rounded-0 border-1 border-muted rounded-3 border">
                      <img src="/icons/Preto-Black/Prancheta 13.png" width={30} className="me-2" />

                      <Form.Control type="date" name="date" className="bg-white border-0 no-default-icon py-2" />
                    </div>
                  </Col>
                </Row>
              ))}
            </section>

            <div className="d-flex justify-content-between">
              <Button onClick={prevStep} variant="outline-dark" size="lg" className="bBtn customRounded-2 text-center font-thin w-100" style={{ maxWidth: "234px", height: "61px", fontSize: "23px" }}>
                Back
              </Button>

              <Button onClick={nextStep} variant="dark" size="lg" className="bBtn customRounded-2 text-center font-thin w-100" style={{ maxWidth: "234px", height: "61px", fontSize: "23px" }}>
                Confirm
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center ch-80">
            <div>
              <img src="/icons/svgs/success.svg" width={172.18} className="my-4" />
              <h2 className="font-thin display-5 py-4">
                Your documents
                <br />
                <span className="f-bold">have been submitted!</span>
              </h2>
              <p className="text-muted mt-4 fs-4 w-75 mx-auto">We will contact you by email or phone number for the next steps of the process.</p>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
}
