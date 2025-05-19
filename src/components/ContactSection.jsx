import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. I will get back to you shortly.");
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container animate-fadeIn">
        <h2 className="contact-title">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p className="alt-contact">
          Alternatively, feel free to reach out via email at{" "}
          <a href="mailto:hello@amandabraga.com">hello@amandabraga.com</a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
