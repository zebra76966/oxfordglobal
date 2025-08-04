import React, { useState } from "react";
import { Button, Form, InputGroup, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log("Message sent:", message);
    setMessage("");
  };

  return (
    <div className="chatBoxWrapper" style={{ position: "fixed", zIndex: 1050 }}>
      {isOpen ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
          <Card className="ChatBox rounded-4 border-0" style={{ boxShadow: "10px -7px 18px rgba(0, 0, 0, 0.15)" }}>
            <Card.Header className="d-flex align-items-center bg-light border-bottom gap-3 p-3 rounded-top-4">
              <Button variant="link" size="sm" className="p-0 me-2 text-dark" onClick={() => setIsOpen(false)}>
                <img src="/icons/svgs/arrowleft.svg" height={31} width={31} />
              </Button>
              <h5 className=" font-thin" style={{ fontSize: "31px" }}>
                Welcome to <span className="font-regular d-block">Oxford Global</span>
              </h5>
            </Card.Header>
            <div className="p-3 h-100">
              <Card.Body className="p-3 border-1 border-dark border rounded-4 h-100" style={{ maxHeight: "500px", overflowY: "auto" }}>
                <div className="w-75">
                  <p className="bg-light font-light  text-dark p-3 rounded mb-1  rounded-3" style={{ fontSize: "20.33px", width: "fit-content" }}>
                    Hello, please send us your name and question so we can assist you!
                  </p>
                  <div className="text-muted small text-end">1m ago</div>
                </div>
              </Card.Body>
            </div>
            <Card.Footer className="px-3 pt-1  pb-3 border-0 mt-auto bg-white rounded-bottom-4">
              <Form onSubmit={handleSend}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    className="bg-white p-3 border-1 border-dark border rounded-4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send us a message..."
                  />
                </InputGroup>
              </Form>
            </Card.Footer>
          </Card>
        </motion.div>
      ) : (
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center bg-light ChatBoxIcon"
          onClick={() => setIsOpen(true)}
          style={{ width: "120px", height: "120px", borderRadius: "50%" }}
        >
          <img src="/icons/svgs/chat.svg" className="mt-1" height={53} />
        </Button>
      )}
    </div>
  );
}
