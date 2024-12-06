import React from 'react';

const Clients = () => {
  const logos = [/* Add client logo URLs here */];

  return (
    <section className="clients">
      <div className="container">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="logos">
          {logos.map((logo, index) => (
            <img src={logo} alt={`Client ${index}`} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
