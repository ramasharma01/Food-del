// src/pages/Contact.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Send us a message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Our Contact Info</h3>
              <ul className="list-unstyled">
                <li>
                  <p><strong>📞 Phone:</strong> +91 98765 43210</p>
                </li>
                <li>
                  <p><strong>✉️ Email:</strong> support@foodify.com</p>
                </li>
                <li>
                  <p><strong>🏠 Address:</strong> 123 Food Street, Delhi, India</p>
                </li>
                <li>
                  <p><strong>⏰ Working Hours:</strong> Mon - Sun: 9:00 AM - 11:00 PM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
