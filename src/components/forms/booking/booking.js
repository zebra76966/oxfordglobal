import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepProgress from "./StepProgress";

const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    phone: "",
    selectedCar: "",
    email: "",
    passengers: "",
    suitcases: "",
    bookingForSomeoneElse: false,
    airportPickup: false,
  });

  return (
    <div className="d-flex justify-content-center align-items-center bg-light " style={{ minHeight: "70dvh" }}>
      <Container className="  p-5">
        <StepProgress step={step} />

        <div className="mx-auto" style={{ maxWidth: "841.75px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ width: "100%" }}>
            <div className="mt-5">
              {step === 1 && <StepOne />}
              {step === 2 && (
                <StepTwo setSelectedCar={(e) => setFormData({ ...formData, selectedCar: e })} selectedCar={formData.selectedCar} onBack={() => prevStep()} onContinue={() => nextStep()} />
              )}
              {step === 3 && <StepThree setFormData={(e) => setFormData(e)} formData={formData} onBack={() => prevStep()} onContinue={() => nextStep()} />}
              {step === 4 && <StepFour />}
            </div>

            <div className="d-flex justify-content-between mt-4">
              {step > 1 && (
                <Button variant="outline-dark" className="px-4 fs-5 rounded-4 py-2 btn-lg" onClick={prevStep}>
                  Back
                </Button>
              )}
              {step < totalSteps && (
                <Button variant="dark" className="px-4 fs-5 rounded-4 py-2 btn-lg" onClick={nextStep}>
                  Next
                </Button>
              )}
              {step === totalSteps && (
                <Button variant="dark" className="px-4 fs-5 rounded-4 py-2 btn-lg" onClick={() => alert("Booking Submitted!")}>
                  Confirm
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default BookingWizard;
