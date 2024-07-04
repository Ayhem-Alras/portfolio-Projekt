// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة كود لإرسال الرسالة إلى بريدك الإلكتروني أو API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setSubmitted(true);
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
          </div>
          <div className="form-group">
            <label htmlFor="message">Nachricht:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Senden</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
