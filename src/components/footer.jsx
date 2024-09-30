import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/Images/logo.png" alt="Logo" />
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: contact@fashionfiesta.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <Link to="https://www.instagram.com/" target="blank">
            <img src="\Images\Icons\instagram.svg" alt="Instagram" />
          </Link>
          <Link to="https://www.facebook.com/" target="blank">
            <img src="\Images\Icons\facebook.svg" alt="Facebook" />
          </Link>
          <Link to="https://x.com/" target="blank">
            <img src="Images\Icons\twitter.svg" alt="X (formerly Twitter)" />
          </Link>
        </div>

        {/* Policies Section */}
        <div className="footer-policy">
          <h4>Policies</h4>
          <Link to="/Policy">Policy</Link> |
          <Link to="#">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
