'use client';

import './Footer.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-main">

                    {/* Column 1: Brand */}
                    <div className="footer-brand">
                        <Image
                            src="/brand-logo-white.png"
                            alt="Three Fields"
                            width={300}
                            height={96}
                            className="mb-6 h-40 w-auto object-contain"
                        />
                        <p>
                            Clean fuel from nature's fields. Premium nutrition crafted for your everyday energy.
                        </p>
                        <div className="footer-socials">
                            <a href="#instagram" className="social-link" aria-label="Instagram">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#x" className="social-link" aria-label="X (Twitter)">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#youtube" className="social-link" aria-label="YouTube">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0F2A1E" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div>
                        <h4 className="footer-col-title">Explore</h4>
                        <ul className="footer-nav-list">
                            {['Home', 'Products', 'Recipes', 'About Us'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="footer-nav-link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div>
                        <h4 className="footer-col-title">Products</h4>
                        <ul className="footer-nav-list">
                            {['Makhana', 'Almonds', 'Cashews', 'Super Seeds'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="footer-nav-link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="footer-col-title">Contact</h4>
                        <ul className="footer-contact-list">
                            <li className="contact-item">
                                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Nature's Way,<br />Green Valley, CA 90210</span>
                            </li>
                            <li className="contact-item">
                                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:hello@threefields.com" className="contact-link">hello@threefields.com</a>
                            </li>
                            <li className="contact-item">
                                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="footer-bottom">
                    <p>© 2026 Three Fields. All Rights Reserved.</p>
                    <div className="footer-legal-links">
                        <a href="#" className="footer-legal-link">Privacy Policy</a>
                        <a href="#" className="footer-legal-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

