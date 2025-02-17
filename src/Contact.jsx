import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:deepadhandapani2001@gmail.com">
            deepadhandapani2001@gmail.com
          </a>
        </p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/_deep__jd"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_deep__jd
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/deepa-d-74326229b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deepa Dhandapani
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
