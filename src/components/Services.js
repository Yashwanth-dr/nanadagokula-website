import React from 'react';

const Services = () => {
  const servicesData = [
    { id: 'service-1', title: '3D Visualization', icon: 'fas fa-vr-cardboard', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000', desc: 'Photorealistic renderings for a virtual tour.' },
    { id: 'service-2', title: 'Structural Audits', icon: 'fas fa-hard-hat', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000', desc: 'Professional stability checks and safety certifications.' },
    { id: 'service-3', title: 'Renovation', icon: 'fas fa-tools', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000', desc: 'Expert remodeling preserving foundational charm.' }
  ];

  return (
    <section id="services" className="bg-light">
        <div className="section-title">
            <h2 style={{textAlign: 'center'}}>Our Expert Services</h2>
            <div className="underline" style={{margin: '10px auto'}}></div>
        </div>
        <div className="services-container" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            {servicesData.map(service => (
                <div className="service-card" key={service.id} style={{background: 'var(--card)', borderRadius: '12px', overflow: 'hidden', textAlign: 'center'}}>
                    <div className="service-img-wrapper" style={{height: '200px'}}>
                        <img src={service.img} alt={service.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    </div>
                    <div className="service-content" style={{padding: '25px'}}>
                        <i className={service.icon} style={{fontSize: '2.5rem', color: 'var(--accent)'}}></i>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Services;
