import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ userName: '', userSubject: '', userMessage: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const send = (loc = "Not Provided") => {
            const text = `🏗 Nanadagokula Designs Inquiry\n👤 Name: ${formData.userName}\n📌 Subject: ${formData.userSubject}\n📝 Message: ${formData.userMessage}\n📍 Location: ${loc}`;
            window.open(`https://wa.me/919606196774?text=${encodeURIComponent(text)}`, "_blank");
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => send(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`), () => send());
        } else { send(); }
    };

    return (
        <section id="contact">
            <div className="section-title"><h2 style={{textAlign: 'center'}}>Work With Us</h2><div className="underline" style={{margin: '10px auto'}}></div></div>
            <div className="contact-wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px'}}>
                <div className="contact-form">
                    <div className="contact-info-card" style={{padding: '30px', background: 'var(--card)', borderRadius: '10px'}}>
                        <h3>Inquiry Form</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="userName" placeholder="Your Name" required onChange={handleChange} style={{width: '100%', padding: '15px', marginBottom: '15px'}} />
                            <input type="text" id="userSubject" placeholder="Interest" required onChange={handleChange} style={{width: '100%', padding: '15px', marginBottom: '15px'}} />
                            <textarea id="userMessage" rows="4" placeholder="Description" required onChange={handleChange} style={{width: '100%', padding: '15px', marginBottom: '15px'}}></textarea>
                            <button type="submit" className="btn-submit" style={{width: '100%', padding: '15px', background: 'var(--primary)', color: 'white', border: 'none'}}>Initialize WhatsApp Chat</button>
                        </form>
                    </div>
                </div>
                <div className="contact-info-card" style={{padding: '30px', background: 'var(--card)', borderRadius: '10px'}}>
                    <h3>Contact Info</h3>
                    <p>📍 Bangalore, Karnataka</p>
                    <p>📞 +91 96061 96774</p>
                    <p>✉️ info@nanadagokula.com</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
