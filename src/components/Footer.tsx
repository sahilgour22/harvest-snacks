'use client';

import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-main">

                    {/* Column 1: Brand */}
                    <div className="footer-brand">
                        <h2>Three Fields</h2>
                        <p>
                            Clean fuel from nature's fields. Premium nutrition crafted for your everyday energy.
                        </p>
                        <div className="footer-socials">
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
                                </a>
                            ))}
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

