import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Nexcent</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
          <a href="#register" className="btn">Register Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
