import React from 'react'

const ContactUs = () => {
  return (
    <div>
<div>
    <div class="container">
        <h1>Contact Us</h1>
        <form action="/submit-form" method="POST">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required>

            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email" required>

            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" rows="6" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
</div>

      
    </div>
  )
}

export default ContactUs
