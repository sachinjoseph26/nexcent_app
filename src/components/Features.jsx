import React from 'react';

const Features = () => {
  const features = [
    { title: 'Membership Organisations', description: 'Full automation of membership renewals and payments.' },
    { title: 'National Associations', description: 'Manage memberships with ease.' },
    { title: 'Clubs And Groups', description: 'Streamline club operations.' },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Manage your entire community in a single system</h2>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
