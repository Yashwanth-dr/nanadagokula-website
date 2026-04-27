import React from 'react';

const Hero = () => {
  return (
    <header className="hero" style={{
        height: '60vh',
        background: 'linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    }}>
        <div className="hero-text">
            <h1>Nanadagokula Designs</h1>
            <p>Elevating Architecture with Precision & Elegance</p>
        </div>
    </header>
  );
};

export default Hero;
