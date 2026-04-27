// // // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [formData, setFormData] = useState({ userName: '', userSubject: '', userMessage: '' });

// //   // Initialize Dark Mode from LocalStorage
// //   useEffect(() => {
// //     const savedMode = localStorage.getItem('mode');
// //     if (savedMode === 'dark') setDarkMode(true);
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem('mode', darkMode ? 'dark' : 'light');
// //     document.body.className = darkMode ? 'dark-mode' : '';
// //   }, [darkMode]);

// //   const handleInputChange = (e) => {
// //     setFormData({ ...formData, [e.target.id]: e.target.value });
// //   };

// //   const handleInquirySubmit = (e) => {
// //     e.preventDefault();
// //     const send = (loc = "Not Provided") => {
// //       const text = `🏗 Nanadagokula Designs Inquiry\n👤 Name: ${formData.userName}\n📌 Subject: ${formData.userSubject}\n📝 Message: ${formData.userMessage}\n📍 Location: ${loc}`;
// //       window.open(`https://wa.me/919606196774?text=${encodeURIComponent(text)}`, "_blank");
// //     };

// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         (pos) => send(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`),
// //         () => send()
// //       );
// //     } else { send(); }
// //   };

// //   return (
// //     <div className="site-wrapper">
// //       <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
// //         {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
// //       </button>

// //       <nav>
// //         <div className="logo">Nanadagokula<span>.</span></div>
// //         <ul>
// //           <li className="dropdown">
// //             <a href="#about">About <i className="fas fa-chevron-down"></i></a>
// //             <div className="dropdown-content">
// //               <a href="#interior">Interior Styling</a>
// //               <a href="#exterior">Facade & Exterior</a>
// //               <a href="#building">Structural Construction</a>
// //             </div>
// //           </li>
// //           <li className="dropdown">
// //             <a href="#services">Services <i className="fas fa-chevron-down"></i></a>
// //             <div className="dropdown-content">
// //               <a href="#service-1">3D Visualization</a>
// //               <a href="#service-2">Structural Audits</a>
// //               <a href="#service-3">Renovation</a>
// //             </div>
// //           </li>
// //           <li><a href="#contact">Contact</a></li>
// //           <li><a href="#careers">Careers</a></li>
// //         </ul>
// //       </nav>

// //       <header className="hero">
// //         <div className="hero-text">
// //           <h1>Nanadagokula Designs</h1>
// //           <p>Elevating Architecture with Precision & Elegance</p>
// //         </div>
// //       </header>

// //       {/* About Sections */}
// //       <section id="interior">
// //         <div className="about-container">
// //           <div className="about-img">
// //             <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000" alt="Interior" />
// //           </div>
// //           <div className="about-content">
// //             <h2>Interior Design</h2>
// //             <div className="underline"></div>
// //             <p>We craft indoor environments that balance ergonomics with high-end aesthetics. From premium residences to modern workspaces in Bangalore, we prioritize your vision.</p>
// //           </div>
// //         </div>
// //       </section>

// //       <section id="exterior" className="bg-light">
// //         <div className="about-container">
// //           <div className="about-content">
// //             <h2>Exterior Design</h2>
// //             <div className="underline"></div>
// //             <p>Innovative facade solutions and landscaping that create a lasting impression while ensuring durability against the elements.</p>
// //           </div>
// //           <div className="about-img">
// //             <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000" alt="Exterior" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section id="services">
// //         <div className="section-title">
// //           <h2>Our Expert Services</h2>
// //           <div className="underline-center"></div>
// //         </div>
// //         <div className="services-container">
// //           <div className="service-card">
// //             <div className="service-img-wrapper"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800" alt="3D" /></div>
// //             <div className="service-content">
// //               <i className="fas fa-vr-cardboard"></i>
// //               <h3>3D Visualization</h3>
// //               <p>High-definition photorealistic renderings and 3D walkthroughs.</p>
// //             </div>
// //           </div>
// //           <div className="service-card">
// //             <div className="service-img-wrapper"><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800" alt="Audit" /></div>
// //             <div className="service-content">
// //               <i className="fas fa-hard-hat"></i>
// //               <h3>Structural Audits</h3>
// //               <p>Professional stability checks and safety certifications.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section id="contact" className="bg-light">
// //         <div className="section-title">
// //           <h2>Work With Us</h2>
// //           <div className="underline-center"></div>
// //         </div>
// //         <div className="contact-wrapper">
// //           <div className="contact-form">
// //             <div className="contact-info-card">
// //               <h3>Inquiry Form</h3>
// //               <form onSubmit={handleInquirySubmit}>
// //                 <input type="text" id="userName" placeholder="Your Name" required onChange={handleInputChange} />
// //                 <input type="text" id="userSubject" placeholder="Interest" required onChange={handleInputChange} />
// //                 <textarea id="userMessage" rows="4" placeholder="Briefly describe your project..." required onChange={handleInputChange}></textarea>
// //                 <button type="submit" className="btn-submit">Initialize WhatsApp Chat</button>
// //               </form>
// //             </div>
// //           </div>
// //           <div className="contact-info-card">
// //             <h3>Contact Information</h3>
// //             <p>📍 Bangalore, Karnataka (BBMP Area)</p>
// //             <p>📞 +91 96061 96774</p>
// //             <div className="contact-map">
// //               <iframe 
// //                 title="Google Maps"
// //                 width="100%" height="200" 
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085233075253!3d12.953847733470656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfad363a43657b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714190000000"
// //                 style={{border:0, borderRadius: '8px'}} allowFullScreen loading="lazy">
// //               </iframe>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <footer>
// //         <div className="copyright">© 2026 Nanadagokula Designs & Services. All Rights Reserved.</div>
// //       </footer>

// //       <a href="https://wa.me/919606196774" className="whatsapp-float" target="_blank" rel="noreferrer">
// //         <i className="fab fa-whatsapp"></i>
// //       </a>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [formData, setFormData] = useState({ userName: '', userSubject: '', userMessage: '' });

//   // Dark Mode Logic
//   useEffect(() => {
//     const savedMode = localStorage.getItem('mode');
//     if (savedMode === 'dark') setDarkMode(true);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('mode', darkMode ? 'dark' : 'light');
//     document.body.className = darkMode ? 'dark-mode' : '';
//   }, [darkMode]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleWhatsApp = (e) => {
//     e.preventDefault();
//     const send = (locText = "Not Provided") => {
//       const text = `🏗 *Nanadagokula Designs Inquiry*\n\n👤 *Name:* ${formData.userName}\n📌 *Subject:* ${formData.userSubject}\n📝 *Message:* ${formData.userMessage}\n\n📍 *Location:* ${locText}`;
//       window.open(`https://wa.me/919606196774?text=${encodeURIComponent(text)}`, "_blank");
//     };

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => send(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`),
//         () => send()
//       );
//     } else { send(); }
//   };

//   return (
//     <div className="site-container">
//       <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? '☀️ Light' : '🌙 Dark'}
//       </button>

//       <nav>
//         <div className="logo">Nanadagokula<span>.</span></div>
//         <ul>
//           <li className="dropdown">
//             <a href="#about">About <i className="fas fa-chevron-down"></i></a>
//             <div className="dropdown-content">
//               <a href="#interior">Interior Styling</a>
//               <a href="#exterior">Facade & Exterior</a>
//               <a href="#building">Construction</a>
//             </div>
//           </li>
//           <li className="dropdown">
//             <a href="#services">Services <i className="fas fa-chevron-down"></i></a>
//             <div className="dropdown-content">
//               <a href="#service-1">3D Visualization</a>
//               <a href="#service-2">Structural Audits</a>
//               <a href="#service-3">Renovation</a>
//             </div>
//           </li>
//           <li><a href="#contact">Contact</a></li>
//           <li><a href="#careers">Careers</a></li>
//         </ul>
//       </nav>

//       <header className="hero">
//         <div className="hero-text">
//           <h1>Nanadagokula Designs</h1>
//           <p>Elevating Architecture with Precision & Elegance</p>
//         </div>
//       </header>

//       {/* About Sections */}
//       <section id="interior">
//         <div className="about-container">
//           <div className="about-img">
//             <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000" alt="Interior" />
//           </div>
//           <div className="about-content">
//             <h2>Interior Design</h2>
//             <div className="underline"></div>
//             <p>We craft indoor environments that balance ergonomics with high-end aesthetics in Bangalore.</p>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section id="services" className="bg-light">
//         <div className="section-title">
//           <h2>Our Expert Services</h2>
//           <div className="underline-center"></div>
//         </div>
//         <div className="services-container">
//           <div className="service-card">
//             <div className="service-img-wrapper"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" alt="3D" /></div>
//             <div className="service-content">
//               <i className="fas fa-vr-cardboard"></i>
//               <h3>3D Visualization</h3>
//               <p>High-definition photorealistic renderings.</p>
//             </div>
//           </div>
//           {/* Add more service cards as needed */}
//         </div>
//       </section>

//       {/* Contact & Map Section */}
//       <section id="contact">
//         <div className="section-title">
//           <h2>Work With Us</h2>
//           <div className="underline-center"></div>
//         </div>
//         <div className="contact-wrapper">
//           <div className="contact-form">
//             <div className="contact-info-card">
//               <h3>Inquiry Form</h3>
//               <form onSubmit={handleWhatsApp}>
//                 <input type="text" id="userName" placeholder="Your Name" required onChange={handleChange} />
//                 <input type="text" id="userSubject" placeholder="Interest" required onChange={handleChange} />
//                 <textarea id="userMessage" rows="4" placeholder="Project details..." required onChange={handleChange}></textarea>
//                 <button type="submit" className="btn-submit">Initialize WhatsApp Chat</button>
//               </form>
//             </div>
//           </div>
//           <div className="contact-info-card">
//             <h3>Contact Info</h3>
//             <p>📍 Bangalore, Karnataka</p>
//             <p>📞 +91 96061 96774</p>
//             <div className="contact-map">
//               <iframe 
//                 title="Bangalore Office"
//                 width="100%" height="200" 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085205!3d12.9538477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfad36638b9927!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714212345678"
//                 style={{border:0, borderRadius: '8px'}} allowFullScreen loading="lazy">
//               </iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       <a href="https://wa.me/919606196774" className="whatsapp-float" target="_blank" rel="noreferrer">
//         <i className="fab fa-whatsapp"></i>
//       </a>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [formData, setFormData] = useState({ userName: '', userSubject: '', userMessage: '' });

//   useEffect(() => {
//     const savedMode = localStorage.getItem('mode');
//     if (savedMode === 'dark') setDarkMode(true);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('mode', darkMode ? 'dark' : 'light');
//     document.body.className = darkMode ? 'dark-mode' : '';
//   }, [darkMode]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

//   const handleWhatsApp = (e) => {
//     e.preventDefault();
//     const send = (locText = "Not Provided") => {
//       const text = `🏗 *Nanadagokula Designs Inquiry*\n\n👤 *Name:* ${formData.userName}\n📌 *Subject:* ${formData.userSubject}\n📝 *Message:* ${formData.userMessage}\n\n📍 *Location:* ${locText}`;
//       window.open(`https://wa.me/919606196774?text=${encodeURIComponent(text)}`, "_blank");
//     };

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => send(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`),
//         () => send()
//       );
//     } else { send(); }
//   };

//   return (
//     <div className="site-container">
//       <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? '☀️ Light' : '🌙 Dark'}
//       </button>

//       <nav>
//         <div className="logo">Nanadagokula<span>.</span></div>
//         <ul>
//           <li className="dropdown">
//             <a href="#about">About <i className="fas fa-chevron-down"></i></a>
//             <div className="dropdown-content">
//               <a href="#interior">Interior Styling</a>
//               <a href="#exterior">Facade & Exterior</a>
//               <a href="#building">Construction</a>
//             </div>
//           </li>
//           <li className="dropdown">
//             <a href="#services">Services <i className="fas fa-chevron-down"></i></a>
//             <div className="dropdown-content">
//               <a href="#service-1">3D Visualization</a>
//               <a href="#service-2">Structural Audits</a>
//               <a href="#service-3">Renovation</a>
//             </div>
//           </li>
//           <li><a href="#contact">Contact</a></li>
//           <li><a href="#careers">Careers</a></li>
//         </ul>
//       </nav>

//       <header className="hero">
//         <div className="hero-text">
//           <h1>Nanadagokula Designs</h1>
//           <p>Elevating Architecture with Precision & Elegance</p>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="interior">
//         <div className="about-container">
//           <div className="about-img">
//             <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000" alt="Interior" />
//           </div>
//           <div className="about-content">
//             <h2>Interior Design</h2>
//             <div className="underline"></div>
//             <p>We craft indoor environments that balance ergonomics with high-end aesthetics. Our expertise covers premium residential and commercial spaces across Karnataka.</p>
//           </div>
//         </div>
//       </section>
//       {/* 2. Facade & Exterior Section (Image on Right) */}
//       <section id="exterior" className="bg-light">
//         <div className="about-container">
//           <div className="about-content">
//             <h2>Facade & Exterior</h2>
//             <div className="underline"></div>
//             <p>Our exterior designs redefine modern architecture. We specialize in innovative facade solutions, glass elevations, and weather-resistant landscaping that ensure your building makes a lasting first impression.</p>
//           </div>
//           <div className="about-img">
//             <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000" alt="Exterior" />
//           </div>
//         </div>
//       </section>

//       {/* 3. Structural Construction Section (Image on Left) */}
//       <section id="building">
//         <div className="about-container">
//           <div className="about-img">
//             <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000" alt="Construction" />
//           </div>
//           <div className="about-content">
//             <h2>Structural Construction</h2>
//             <div className="underline"></div>
//             <p>Quality and stability are at the core of our construction services. From foundation to finishing, we use high-grade materials and engineering precision to build safe, durable, and sustainable structures.</p>
//           </div>
//         </div>
//       </section>
//       <section id="services" class="bg-light">
//         <div class="section-title">
//             <h2>Our Expert Services</h2>
//             <div class="underline"></div>
//         </div>
//         <div class="services-container">
//             <div class="service-card" id="service-1">
//                 <div class="service-img-wrapper">
//                     <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" alt="3D"></div>
//                 <div class="service-content">
//                     <i class="fas fa-vr-cardboard"></i>
//                     <h3>3D Visualization</h3>
//                     <p>High-definition photorealistic renderings and 3D walkthroughs for a virtual tour of your future space.</p>
//                 </div>
//             </div>
//             <div class="service-card" id="service-2">
//                 <div class="service-img-wrapper"><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000" alt="Audit"></div>
//                 <div class="service-content">
//                     <i class="fas fa-hard-hat"></i>
//                     <h3>Structural Audits</h3>
//                     <p>Professional stability checks and safety certifications to ensure your building stands the test of time.</p>
//                 </div>
//             </div>
//             <div class="service-card" id="service-3">
//                 <div class="service-img-wrapper"><img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000" alt="Renovation"></div>
//                 <div class="service-content">
//                     <i class="fas fa-tools"></i>
//                     <h3>Renovation</h3>
//                     <p>Expert remodeling services to modernize older structures while preserving their foundational charm.</p>
//                 </div>
//             </div>
//         </div>
//     </section>


//       {/* Careers Section (Restored) */}
//       <section id="careers" className="bg-light">
//         <div className="section-title">
//           <h2>Join Our Team</h2>
//           <div className="underline-center"></div>
//         </div>
//         <div className="contact-wrapper">
//           <div className="contact-info-card">
//             <h3>Submit Application</h3>
//             <form>
//               <input type="text" placeholder="Full Name" required />
//               <input type="email" placeholder="Email Address" required />
//               <div className="file-upload-wrapper">
//                 <label>Upload CV (PDF/DOC)</label>
//                 <input type="file" required />
//               </div>
//               <button type="submit" className="btn-submit">Apply via WhatsApp</button>
//             </form>
//           </div>
//           <div className="contact-info-card career-perks">
//             <h3>Why Work With Us?</h3>
//             <ul className="perks-list">
//               <li><i className="fas fa-check-circle"></i> Innovative Architecture Projects</li>
//               <li><i className="fas fa-check-circle"></i> Professional Growth Opportunities</li>
//               <li><i className="fas fa-check-circle"></i> Collaborative Work Culture</li>
//               <li><i className="fas fa-check-circle"></i> Industry Leading Design Tools</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact">
//         <div className="section-title">
//           <h2>Work With Us</h2>
//           <div className="underline-center"></div>
//         </div>
//         <div className="contact-wrapper">
//           <div className="contact-form">
//             <div className="contact-info-card">
//               <h3>Inquiry Form</h3>
//               <form onSubmit={handleWhatsApp}>
//                 <input type="text" id="userName" placeholder="Your Name" required onChange={handleChange} />
//                 <input type="text" id="userSubject" placeholder="Interest" required onChange={handleChange} />
//                 <textarea id="userMessage" rows="4" placeholder="Briefly describe your project..." required onChange={handleChange}></textarea>
//                 <button type="submit" className="btn-submit">Initialize WhatsApp Chat</button>
//               </form>
//             </div>
//           </div>
//           <div className="contact-info-card">
//             <h3>Contact Information</h3>
//             <p>📍 Bangalore, Karnataka</p>
//             <p>📞 +91 96061 96774</p>
//             <div className="contact-map">
//               <iframe 
//                 title="Office Location"
//                 width="100%" height="200" 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.984764835824!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714389012345!5m2!1sen!2sin"
//                 style={{border:0, borderRadius: '8px'}} allowFullScreen loading="lazy">
//               </iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer (Restored) */}
//       <footer>
//         <div className="footer-content">
//           <div className="copyright">© 2026 Nanadagokula Designs & Services. All Rights Reserved.</div>
         
//         </div>
//       </footer>

//       <a href="https://wa.me/919606196774" className="whatsapp-float" target="_blank" rel="noreferrer">
//         <i className="fab fa-whatsapp"></i>
//       </a>
//     </div>
//   );
// }

// export default App;









import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ userName: '', userSubject: '', userMessage: '' });

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', darkMode ? 'dark' : 'light');
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const send = (locText = "Not Provided") => {
      const text = `🏗 *Nanadagokula Designs Inquiry*\n\n👤 *Name:* ${formData.userName}\n📌 *Subject:* ${formData.userSubject}\n📝 *Message:* ${formData.userMessage}\n\n📍 *Location:* ${locText}`;
      window.open(`https://wa.me/919606196774?text=${encodeURIComponent(text)}`, "_blank");
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => send(`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`),
        () => send()
      );
    } else { send(); }
  };
  
return (
    <div className="site-container">
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <nav>
        <div className="logo">Nanadagokula<span>  Designs & Solutions</span></div>
        <ul>
          <li className="dropdown">
            <a href="#about">About <i className="fas fa-chevron-down"></i></a>
            <div className="dropdown-content">
              <a href="#interior">Interior Styling</a>
              <a href="#exterior">Facade & Exterior</a>
              <a href="#building">Construction</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#services">Services <i className="fas fa-chevron-down"></i></a>
            <div className="dropdown-content">
              <a href="#service-1">3D Visualization</a>
              <a href="#service-2">Structural Audits</a>
              <a href="#service-3">Renovation</a>
            </div>
          </li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>Nanadagokula Designs</h1>
          <p>Elevating Architecture with Precision & Elegance</p>
        </div>
      </header>

      {/* About Section */}
      <section id="interior">
        <div className="about-container">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000" alt="Interior" />
          </div>
          <div className="about-content">
            <h2>Interior Design</h2>
            <div className="underline"></div>
            <p>We craft indoor environments that balance ergonomics with high-end aesthetics. Our expertise covers premium residential and commercial spaces across Karnataka.</p>
          </div>
        </div>
      </section>

      <section id="exterior" className="bg-light">
        <div className="about-container">
          <div className="about-content">
            <h2>Facade & Exterior</h2>
            <div className="underline"></div>
            <p>Our exterior designs redefine modern architecture. We specialize in innovative facade solutions, glass elevations, and weather-resistant landscaping.</p>
          </div>
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000" alt="Exterior" />
          </div>
        </div>
      </section>

      <section id="building">
        <div className="about-container">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000" alt="Construction" />
          </div>
          <div className="about-content">
            <h2>Structural Construction</h2>
            <div className="underline"></div>
            <p>Quality and stability are at the core of our construction services. We use high-grade materials and engineering precision.</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-light">
        <div className="section-title">
          <h2>Our Expert Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-container">
          <div className="service-card" id="service-1">
            <div className="service-img-wrapper">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" alt="3D" />
            </div>
            <div className="service-content">
              <i className="fas fa-vr-cardboard"></i>
              <h3>3D Visualization</h3>
              <p>High-definition photorealistic renderings and 3D walkthroughs.</p>
            </div>
          </div>
          <div className="service-card" id="service-2">
            <div className="service-img-wrapper">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000" alt="Audit" />
            </div>
            <div className="service-content">
              <i className="fas fa-hard-hat"></i>
              <h3>Structural Audits</h3>
              <p>Professional stability checks and safety certifications.</p>
            </div>
          </div>
          <div className="service-card" id="service-3">
            <div className="service-img-wrapper">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000" alt="Renovation" />
            </div>
            <div className="service-content">
              <i className="fas fa-tools"></i>
              <h3>Renovation</h3>
              <p>Expert remodeling services to modernize older structures.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="bg-light">
        <div className="section-title">
          <h2>Join Our Team</h2>
          <div className="underline-center"></div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info-card">
            <h3>Submit Application</h3>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <div className="file-upload-wrapper">
                <label>Upload CV (PDF/DOC)</label>
                <input type="file" required />
              </div>
              <button type="submit" className="btn-submit">Apply via WhatsApp</button>
            </form>
          </div>
          <div className="contact-info-card career-perks">
            <h3>Why Work With Us?</h3>
            <ul className="perks-list">
              <li><i className="fas fa-check-circle"></i> Innovative Architecture Projects</li>
              <li><i className="fas fa-check-circle"></i> Professional Growth Opportunities</li>
              <li><i className="fas fa-check-circle"></i> Collaborative Work Culture</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-title">
          <h2>Work With Us</h2>
          <div className="underline-center"></div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-form">
            <div className="contact-info-card">
              <h3>Inquiry Form</h3>
              <form onSubmit={handleWhatsApp}>
                <input type="text" id="userName" placeholder="Your Name" required onChange={handleChange} />
                <input type="text" id="userSubject" placeholder="Interest" required onChange={handleChange} />
                <textarea id="userMessage" rows="4" placeholder="Briefly describe your project..." required onChange={handleChange}></textarea>
                <button type="submit" className="btn-submit">Initialize WhatsApp Chat</button>
              </form>
            </div>
          </div>
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p>📍 Bangalore, Karnataka</p>
            <p>📞 +91 96061 96774</p>
            <div className="contact-map">
              <iframe 
                title="Office Location"
                width="100%" height="200" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.915830206124!2d77.5921!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnMzEuNiJF!5e0!3m2!1sen!2sin!4v1625647000000!5m2!1sen!2sin"
                style={{border:0, borderRadius: '8px'}} allowFullScreen loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <footer>
        <div className="footer-content">
          <div className="copyright">© 2026 Nanadagokula Designs & Services. All Rights Reserved.</div>
        </div>
      </footer> */}

      <footer>
  <div className="box-footer">
    <div className="footer-grid-simple">
      
      {/* Box 1: Branding */}
      <div className="footer-box">
        <div className="logo">Nanadagokula<span>.</span></div>
        <p>Architectural excellence in Karnataka.</p>
        <div className="mini-socials">
          <a href="#" className="ico-inst"><i className="fab fa-instagram"></i></a>
          <a href="#" className="ico-fb"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="ico-li"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Box 2: Quick Links */}
      <div className="footer-box">
        <h4>Navigation</h4>
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="https://linkedin.com/in/founder-profile">@Founder</a>
      </div>

      {/* Box 3: Legal */}
      <div className="footer-box">
        <h4>Policy</h4>
        <a href="#terms" onClick={() => alert("Terms: Architecture is a visual art, and the buildings speak for themselves.")}>Terms</a>
<a href="#privacy" onClick={() => alert("Privacy: Your privacy is the foundation of our trust.")}>Privacy</a>
        <a href="#contact">Contact</a>
      </div>

    </div>
    
    <div className="footer-copyright-simple">
      © 2026 Nanadagokula Designs.
    </div>
  </div>
</footer>

      <a href="https://wa.me/919606196774" className="whatsapp-float" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;