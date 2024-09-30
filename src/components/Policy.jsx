import React, { useState } from "react";
import "./Policy.css";

const Policy = () => {
  const [openSection, setOpenSection] = useState(null); // Track open section by index or key

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(section); // Open the clicked section
    }
  };

  return (
    <div className="policy-container">
      <div className="policy-section">
        <h2 onClick={() => toggleSection("about")} className="toggle-button">
          {openSection === "about"
            ? "Hide About Our Clothing Brand"
            : "Show About Our Clothing Brand"}
        </h2>
        {openSection === "about" && (
          <div>
            <p>
              FashionFiesta is dedicated to providing the latest trends and
              top-quality clothing. Our goal is to give our customers an
              unparalleled shopping experience with a wide selection of
              fashion-forward products for men, women, and kids.
            </p>
            <p>
              We pride ourselves on our commitment to sustainability, ensuring
              our products are ethically made and eco-friendly. Our customer
              satisfaction is our top priority, and we strive to exceed
              expectations with every purchase.
            </p>
          </div>
        )}
      </div>

      <div className="policy-section">
        <h2 onClick={() => toggleSection("privacy")} className="toggle-button">
          {openSection === "privacy"
            ? "Hide Privacy Policy"
            : "Show Privacy Policy"}
        </h2>
        {openSection === "privacy" && (
          <div>
            <p>
              At FashionFiesta, we respect your privacy and are committed to
              protecting your personal information. We do not share your data
              with third parties without your consent and ensure the highest
              standards of security when processing your orders.
            </p>
            <ul>
              <li>
                We collect information only to enhance your shopping experience.
              </li>
              <li>
                Your data is protected using the latest encryption technologies.
              </li>
              <li>
                You can request data deletion or updates at any time by
                contacting us.
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="policy-section">
        <h2 onClick={() => toggleSection("shipping")} className="toggle-button">
          {openSection === "shipping"
            ? "Hide Shipping Policy"
            : "Show Shipping Policy"}
        </h2>
        {openSection === "shipping" && (
          <div>
            <p>
              We offer free shipping on orders above $50. Orders are typically
              processed within 1-2 business days, and delivery times vary based
              on your location. You will receive a tracking number as soon as
              your order is dispatched.
            </p>
            <ul>
              <li>Standard Shipping: 3-7 business days.</li>
              <li>Express Shipping: 1-3 business days.</li>
              <li>International Shipping available.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="policy-section">
        <h2 onClick={() => toggleSection("terms")} className="toggle-button">
          {openSection === "terms"
            ? "Hide Terms and Conditions"
            : "Show Terms and Conditions"}
        </h2>
        {openSection === "terms" && (
          <div className="terms-conditions">
            <h3>Terms and Conditions</h3>
            <ul>
              <li>
                <strong>Cancellation Policy:</strong> Orders can be cancelled
                within 24 hours of placing the order.
              </li>
              <li>
                <strong>Refund Policy:</strong> Refunds are available for unused
                products returned within 30 days.
              </li>
              <li>
                <strong>Damaged Product Refund:</strong> If you receive a
                damaged product, please contact us within 7 days for a
                replacement or refund.
              </li>
              <li>
                <strong>Exchanges:</strong> We offer exchanges on items of equal
                value if returned within 14 days.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Policy;
