import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch('https://formspree.io/f/moevydoa', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(e.target)
  });
  setFormData({ name: '', email: '', subject: '', message: '' });
};

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <p className="intro">
        Email: <a href="mailto:redrouthu2025@gmail.com">redrouthu2025@gmail.com</a> · Location: Marietta, GA
      </p>

      <form onSubmit={handleSubmit} className="plain-form">
        <div>
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What is this about?" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Your message..." />
        </div>
        <button type="submit" className="plain-btn">Send Message</button>
      </form>
    </section>
  );
}
