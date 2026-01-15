'use client';

import { useState, useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = contactRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/mvzzgbqw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section ref={contactRef} className="contact-section">
            <div className="contact-container">
                <div className="contact-header reveal">
                    <span className="contact-eyebrow">Get In Touch</span>
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">
                        Have a question or want to learn more about our products? We'd love to hear from you.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-wrapper reveal">
                        <form 
                            action="https://formspree.io/f/mvzzgbqw"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="contact-form"
                        >
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                    disabled={status === 'submitting'}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="product-inquiry">Product Inquiry</option>
                                    <option value="wholesale">Wholesale & Bulk Orders</option>
                                    <option value="partnership">Partnership Opportunities</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-textarea"
                                    rows={6}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            {status === 'success' && (
                                <div className="form-message form-message-success">
                                    <svg className="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Thank you for your message! We will get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-message form-message-error">
                                    <svg className="message-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="contact-submit-btn"
                                disabled={status === 'submitting' || status === 'success'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info-wrapper reveal">
                        <div className="contact-info-card">
                            <h3 className="info-card-title">Contact Information</h3>
                            <p className="info-card-description">
                                Reach out to us through any of these channels. We're here to help!
                            </p>

                            <div className="contact-info-list">
                                <div className="contact-info-item">
                                    <div className="info-icon-wrapper">
                                        <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="info-content">
                                        <h4 className="info-label">Address</h4>
                                        <p className="info-value">123 Nature's Way,<br />Green Valley, CA 90210</p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon-wrapper">
                                        <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="info-content">
                                        <h4 className="info-label">Email</h4>
                                        <a href="mailto:hello@threefields.com" className="info-value info-link">
                                            hello@threefields.com
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon-wrapper">
                                        <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="info-content">
                                        <h4 className="info-label">Phone</h4>
                                        <a href="tel:+1234567890" className="info-value info-link">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-socials">
                                <h4 className="socials-title">Follow Us</h4>
                                <div className="socials-list">
                                    {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                                        <a
                                            key={social}
                                            href={`#${social.toLowerCase()}`}
                                            className="social-link"
                                            aria-label={social}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <rect width="18" height="18" x="3" y="3" rx="4" opacity="0.2" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span>{social}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
