import React from 'react';

const Careers = () => {
    return (
        <section id="careers" className="bg-light">
            <div className="section-title"><h2 style={{textAlign: 'center'}}>Careers</h2><div className="underline" style={{margin: '10px auto'}}></div></div>
            <div className="contact-wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
                <div className="contact-info-card" style={{padding: '30px', background: 'var(--card)', borderRadius: '10px'}}>
                    <form>
                        <input type="text" placeholder="Full Name" required style={{width: '100%', padding: '10px', marginBottom: '10px'}} />
                        <input type="email" placeholder="Email" required style={{width: '100%', padding: '10px', marginBottom: '10px'}} />
                        <button type="submit" className="btn-submit" style={{width: '100%', padding: '15px', background: 'var(--primary)', color: 'white', border: 'none'}}>Apply via WhatsApp</button>
                    </form>
                </div>
                <div className="contact-info-card">
                    <h3>Join Our Team</h3>
                    <p>✔ Innovative Projects</p>
                    <p>✔ Professional Environment</p>
                </div>
            </div>
        </section>
    );
};

export default Careers;
