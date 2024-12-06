import React from 'react';

const Statistics = () => {
  const stats = [
    { label: 'Members', value: '2,245,341' },
    { label: 'Event Bookings', value: '828,867' },
    { label: 'Clubs', value: '46,328' },
    { label: 'Payments', value: '1,926,436' },
  ];

  return (
    <section className="statistics">
      <div className="container">
        <h2>Helping a local business reinvent itself</h2>
        <div className="stats">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
