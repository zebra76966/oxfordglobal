import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const TwoStepSignup = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    title: "Mr.",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "80dvh" }}>
      <Container className="  p-5">
        <Row>
          <Col md={11} lg={8} className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-5 rounded shadow customRounded-3"
              style={{ width: "100%" }}
            >
              {/* Back Arrow */}
              {step > 1 && (
                <Button variant="link" className="p-0 mb-3" onClick={() => setStep(step - 1)}>
                  <FaArrowLeft className="text-dark" />
                </Button>
              )}

              {step === 1 && (
                <>
                  <h3 className="fw-bold">Create your account</h3>
                  <p className="text-muted mb-4">Enter your email and password to create your account.</p>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="bg-light border-0 py-4" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="bg-light border-0 py-4" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" value={form.confirmPassword} onChange={handleChange} className="bg-light border-0 py-4" />
                    </Form.Group>

                    <Button className="w-100 bg-dark border-0 py-2 rounded-0 py-3" size="lg" style={{ fontWeight: "500" }} onClick={() => setStep(2)}>
                      Continue
                    </Button>

                    <p className="text-center text-muted mt-4" style={{ fontSize: "0.85rem" }}>
                      By adding your personal details, you agree to our{" "}
                      <a href="#" className="text-dark fw-bold">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-dark fw-bold">
                        Terms of use
                      </a>
                      .
                    </p>
                  </Form>
                </>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <h3 className="fw-bold">Add your personal details</h3>
                  <p className="text-muted mb-4">Complete your profile to keep account up to date and secure.</p>
                  <Form>
                    <Row className="mb-3">
                      <Col>
                        <Form.Select name="title" value={form.title} onChange={handleChange} className="bg-light border-0 py-4">
                          <option>Mr.</option>
                          <option>Ms.</option>
                          <option>Mx.</option>
                          <option>Dr.</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Control type="text" name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} className="bg-light border-0 py-4" />
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Control type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="bg-light border-0 py-4" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="bg-light border-0 py-4" />
                    </Form.Group>

                    <Button variant="dark" className="w-100 py-2">
                      Save and continue
                    </Button>

                    <p className="text-center text-muted mt-4" style={{ fontSize: "0.85rem" }}>
                      By adding your personal details, you agree to our{" "}
                      <a href="#" className="text-dark fw-bold">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-dark fw-bold">
                        Terms of use
                      </a>
                      .
                    </p>
                  </Form>
                </motion.div>
              )}

              {/* Help Footer */}
              <div className="text-center mt-3">
                <FaQuestionCircle className="me-1" />
                <span style={{ fontSize: "0.9rem" }}>Help</span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwoStepSignup;
