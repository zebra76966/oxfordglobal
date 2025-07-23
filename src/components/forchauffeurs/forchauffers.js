import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ChauffeurRequirements from "./requirements";
import "./forchauffeurs.css";
import DriverBenefits from "./benefits";

const ForChauffers = () => {
  return (
    <>
      <div className="w-100 bgForChauffers d-flex align-items-center justify-content-center" style={{ maxHeight: "425.11px" }}>
        <motion.h5 className="display-4 text-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          Chauffeurs
        </motion.h5>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <Container className="pb-5 pt-3 text-center mx-auto" style={{ maxWidth: "848.65px" }}>
          <div className="w-100">
            <h5 className="display-6 font-thin mt-5" style={{ fontSize: "39.3px" }}>
              Why become a chauffeur for <span className="f-bold d-block">at Oxford Global?</span>
            </h5>
            <p className="font-thin text-dark lead line-height py-5 text-center mx-auto" style={{ maxWidth: "848.65px", fontSzie: "20px" }}>
              At Oxford Global, our focus is to deliver an exceptional experience for both our clients and our chauffeurs. We value proffesionalism, respect, and attention to detail in every service
              provided. Our clientele is composed of loyal, high-standard individuals who appreciate a personalized, discreet, and respoectful approach. By joining Oxford Global, you reporesnst a
              prestigious brand have the opportunity to work in a structured, supportive environment committed to excellence.
            </p>

            <div className="w-100">
              <Button variant="outline-dark" size="md" className="customRounded-2 mt-5  font-thin" style={{ width: "239.94px", height: "60.41px", fontSize: "22.83px" }}>
                Apply
              </Button>
            </div>
          </div>
        </Container>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
        <DriverBenefits />

        <ChauffeurRequirements />
      </motion.div>
    </>
  );
};

export default ForChauffers;
