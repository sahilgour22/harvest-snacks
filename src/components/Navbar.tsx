'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav
                className={`navbar-fixed ${isScrolled || isMenuOpen ? 'navbar-scrolled' : 'navbar-initial'}`}
            >
                <div className="navbar-container">
                    {/* Logo */}
                    <Link href="/" className="nav-logo-wrapper group" onClick={closeMenu}>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1F6F43] to-[#2A8F5A] flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                            <span className="text-white font-bold text-lg select-none">TF</span>
                        </div>
                        <span className="nav-logo-text">
                            Three Fields
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="nav-menu">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="#products" className="nav-link">Products</Link>
                        <Link href="#recipes" className="nav-link">Recipes</Link>
                        <Link href="#about" className="nav-link">About Us</Link>
                        <Link href="#contact" className="nav-link">Contact</Link>
                    </div>

                    {/* CTA/Toggle Group */}
                    <div className="flex items-center gap-4">
                        <button className="nav-cta-button">
                            Shop Now
                        </button>

                        <button
                            className={`mobile-toggle ${isMenuOpen ? 'is-active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 8h16M4 16h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <div className={`mobile-menu-drawer ${isMenuOpen ? 'is-open' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-nav-links">
                        <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
                        <Link href="#products" className="mobile-nav-link" onClick={closeMenu}>Products</Link>
                        <Link href="#recipes" className="mobile-nav-link" onClick={closeMenu}>Recipes</Link>
                        <Link href="#about" className="mobile-nav-link" onClick={closeMenu}>About Us</Link>
                        <Link href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>
                    </div>
                    <div className="mobile-menu-footer">
                        <button className="mobile-cta-button" onClick={closeMenu}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div className="mobile-overlay" onClick={closeMenu} />
            )}
        </>
    );
}

