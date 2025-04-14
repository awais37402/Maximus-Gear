import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import "./Contact.css";

// Image Imports
import contactHeroImg from "../assets/contact-hero.jpg";
import storeImg from "../assets/store-location.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>GET IN TOUCH</h1>
          <p>We're here to help with any questions about our products</p>
        </div>
        <div className="contact-hero-image">
          <img src={contactHeroImg} alt="Maximus Gear customer service" />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels</p>
          </div>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>123 Fitness Avenue<br />Sports City, CA 90210<br />United States</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                View on Map
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Phone Numbers</h3>
              <p>
                Customer Service: <a href="tel:+18005551234">+1 (800) 555-1234</a><br />
                Corporate Office: <a href="tel:+18005554321">+1 (800) 555-4321</a>
              </p>
              <p>Monday - Friday: 8AM - 6PM PST</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email Addresses</h3>
              <p>
                Customer Support: <a href="mailto:support@maximusgear.com">support@maximusgear.com</a><br />
                Wholesale Inquiries: <a href="mailto:sales@maximusgear.com">sales@maximusgear.com</a>
              </p>
              <p>Typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-form-content">
              <h2>Send Us a Message</h2>
              <p>
                Have questions about our products or need assistance with your order? 
                Fill out the form below and our customer service team will get back to you promptly.
              </p>
              
              {submitSuccess && (
                <div className="form-success-message">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject*</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? 'error' : ''}
                  />
                  {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-store-image">
              <img src={storeImg} alt="Maximus Gear store location" />
              <div className="store-hours">
                <div className="hours-header">
                  <FaClock />
                  <h3>Store Hours</h3>
                </div>
                <ul className="hours-list">
                  <li>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your return policy?</h3>
              <p>
                We offer a 30-day return policy for unworn, unwashed items with tags attached. 
                Return shipping is free for U.S. customers. Please contact our support team 
                to initiate a return.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>
                Standard shipping within the U.S. takes 3-5 business days. Expedited shipping 
                options are available at checkout. International shipping times vary by country.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer wholesale pricing?</h3>
              <p>
                Yes, we offer special pricing for gyms, teams, and retailers. Please email 
                our sales team at sales@maximusgear.com with your business details.
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards (Visa, Mastercard, American Express, Discover), 
                PayPal, and Apple Pay. We also offer financing options through Afterpay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <h2>Visit Our Flagship Store</h2>
          <div className="map-container">
            <iframe 
              title="Maximus Gear Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510518!2d-73.98784492426694!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;