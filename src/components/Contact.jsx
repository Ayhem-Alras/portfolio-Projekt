import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
    if (!email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail ein.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail ein.';
    }
    if (!message.trim()) newErrors.message = 'Bitte geben Sie Ihre Nachricht ein.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="contact-container">
      <h2>Kontaktieren Sie mich</h2>
      {submitted ? (
        <p className="thank-you-message">Vielen Dank! Ihre Nachricht wurde gesendet.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Nachricht:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
          <button type="submit" className="submit-button">Senden</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
