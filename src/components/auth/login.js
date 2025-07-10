import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaApple, FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login-wrapper py-5 px-lg-5 p-3 d-flex align-items-center bg-light" style={{ height: "80dvh" }}>
      <Container className="  p-5">
        <Row className="align-items-center px-3 customRounded-3 justify-content-center bg-white rounded shadow py-5">
          {/* Left Side - Email Login */}
          <Col md={6} lg={6} className="pe-3 p-4">
            <h4 className="fw-bold mb-2 fs-3">Log in to continue</h4>
            <p className="text-muted mb-4 fs-5 fw-light">You’ll be able to easily book and manage rides, and get ride status updates on the day of travel.</p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email*" className="bg-light border-0 py-4" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="password" placeholder="Password*" className="bg-light border-0 py-4" />
              </Form.Group>
              <div className="mb-3">
                <a href="#" className="text-decoration-none text-dark fw-bold" style={{ fontSize: "0.85rem" }}>
                  Forget password?
                </a>
              </div>
              <Button className="w-100 bg-dark border-0 py-2 rounded-0 py-3" size="lg" style={{ fontWeight: "500" }}>
                Log in
              </Button>
            </Form>
          </Col>

          {/* Divider */}
          <Col md={1} className="d-none d-md-flex justify-content-center h-100">
            <div className="vr opacity-100 bg-dark rounded-3 " style={{ height: "200px", padding: "0.06em" }}></div>
          </Col>

          {/* Right Side - Social Login */}
          <Col md={5} lg={4} className="pt-4 pt-md-0">
            <Button variant="outline-dark" size={"lg"} className="w-100 rounded-0 py-3 mb-2 d-flex align-items-center justify-content-center gap-2 py-2">
              <FaApple />
              Continue with Apple
            </Button>
            <Button variant="outline-dark" size={"lg"} className="w-100 rounded-0 py-3 mb-2 d-flex align-items-center justify-content-center gap-2 py-2">
              <FaGoogle />
              Continue with Google
            </Button>
            <Button variant="outline-dark" size={"lg"} className="w-100 rounded-0 py-3 d-flex align-items-center justify-content-center gap-2 py-2">
              <FaFacebookF />
              Continue with Facebook
            </Button>
          </Col>

          <div className="col-12">
            <div className="text-center mt-4 fs-5">
              <span className="text-muted">New to Oxford Global? </span>
              <Link to="/signup" className="text-dark fw-bold text-decoration-none">
                Sign up!
              </Link>
            </div>
          </div>
        </Row>

        {/* Footer text */}
      </Container>
    </div>
  );
};

export default LoginForm;
