import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };

  const ref = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state when form is submitted
    emailjs
      .sendForm(
        "service_03v6nca",
        "template_s2zzi0i",
        ref.current,
        "7HHY6oRJY7whI2Bds"
      )
      .then((result) => {
        setSuccess(true);  // Success when the form is sent
        setFormDetails(formInitialDetails);  // Reset form
      })
      .catch((error) => {
        console.error(error.text);
        setSuccess(false);  // Failure when error occurs
      })
      .finally(() => setIsLoading(false));  // Stop loading once done
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div>
              <h1>
                <span>"GET IN </span>
                <span>TOUCH" </span>
              </h1>
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <form ref={ref} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.first_name}
                          onChange={handleChange}
                          placeholder="First Name"
                          name="first_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.last_name}
                          onChange={handleChange}
                          placeholder="Last Name"
                          name="last_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone_number}
                          onChange={handleChange}
                          placeholder="Phone No."
                          name="phone_number"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          onChange={handleChange}
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <div id="wrapper">
                          <button
                            id="blob"
                            type="submit"
                            className="my-super-cool-btn"
                            disabled={isLoading} // Disable button while submitting
                          >
                            {isLoading ? (
                              "Sending..." // Show loading text when form is submitting
                            ) : (
                              <>
                                <div className="dots-container">
                                  <div className="dot"></div>
                                  <div className="dot"></div>
                                  <div className="dot"></div>
                                  <div className="dot"></div>
                                </div>
                                <span>Send</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Success or Error Message */}
                        {success === true && (
                          <p className="success-message">
                            Yayy!! Your message has been sent! I'll get back to you soon! :)
                          </p>
                        )}
                        {success === false && (
                          <p className="error-message">
                            Oops! Something went wrong. Please try again.
                          </p>
                        )}
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
