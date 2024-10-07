import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact-container">
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
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
