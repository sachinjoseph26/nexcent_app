import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h1>Nexcent</h1>
          <div className="links">
            <div>
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3>Support</h3>
              <ul>
                <li><a href="#help">Help center</a></li>
                <li><a href="#terms">Terms of service</a></li>
                <li><a href="#privacy">Privacy policy</a></li>
              </ul>
            </div>
          </div>
          <p>Copyright © 2024 Nexcent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
