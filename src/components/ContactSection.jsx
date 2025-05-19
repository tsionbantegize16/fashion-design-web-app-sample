import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message (replace with API call)
    setTimeout(() => {
      alert("Thank you for reaching out! I will respond soon.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="contact-container animate-fadeIn">
        <h2 className="contact-title">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="name" className="form-label">
            Full Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="form-input"
            />
          </label>

          <label htmlFor="email" className="form-label">
            Email Address
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="form-input"
            />
          </label>

          <label htmlFor="message" className="form-label">
            Message
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="form-textarea"
            />
          </label>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="alt-contact">
          Or email me at{" "}
          <a href="mailto:hello@amandabraga.com" className="email-link">
            hello@amandabraga.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
