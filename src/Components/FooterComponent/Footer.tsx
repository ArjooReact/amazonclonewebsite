import React from 'react';
import './Footer.css';  // Make sure you have the appropriate CSS file

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Get to Know Us Section */}
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Amazon Devices</a></li>
          </ul>
        </div>

        {/* Make Money with Us Section */}
        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell products on Amazon</a></li>
            <li><a href="#">Sell on Amazon Business</a></li>
            <li><a href="#">Sell apps on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
          </ul>
        </div>

        {/* Amazon Payment Products Section */}
        <div className="footer-section">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
            <li><a href="#">Amazon.com Store Card</a></li>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Amazon Business Line of Credit</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li><a href="#" className="social-icon">Facebook</a></li>
            <li><a href="#" className="social-icon">Twitter</a></li>
            <li><a href="#" className="social-icon">Instagram</a></li>
            <li><a href="#" className="social-icon">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Amazon Clone, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;