import React from 'react'
import './styles/ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-container">
    <h1 >Contact Us</h1>
    <form>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        rows="6"
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
  )
}

export default ContactUs
