import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="page home-page">
      <img
        src={process.env.PUBLIC_URL + '/images/mylogo.png'}
        alt="Portfolio Logo"
        className="home-logo"
        style={{ maxWidth: '500px', width: '90%', height: 'auto', margin: '0 auto 2rem auto', display: 'block' }}
      />
    </div>
  );
}

export default Home; 