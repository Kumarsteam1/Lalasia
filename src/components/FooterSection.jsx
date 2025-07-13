// src/components/FooterSection.jsx
import React from "react";
import "../App.css";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="cta-banner">
        <h2 className="cta-heading">Join with me to get special discount</h2>
        <button className="cta-button">
          Learn More <FaArrowRight style={{ marginLeft: "8px" }} />
        </button>
      </div>

      <hr className="footer-divider" />

      <div className="footer-content">
        <div className="footer-brand">
					<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <img src={logo} alt="Lalasia" className="footer-logo" />
          <h3 className="footer-title">Lalasia</h3>
					</div>
          <p className="footer-description">
            Lalasia is digital agency that help you make better <br />
            experience iaculis cras in.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li>New Arrivals</li>
              <li>Best Selling</li>
              <li>Home Decor</li>
              <li>Kitchen Set</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>Catalog</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
