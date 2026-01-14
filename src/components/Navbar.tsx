'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar-fixed ${isScrolled ? 'navbar-scrolled' : 'navbar-initial'}`}
        >
            <div className="navbar-container">
                {/* Logo */}
                <Link href="/" className="nav-logo-wrapper group">
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

                {/* CTA Button */}
                <div className="flex items-center">
                    <button className="nav-cta-button">
                        Shop Now
                    </button>

                    {/* Mobile Menu Button - Minimal Icon */}
                    <button
                        className="mobile-toggle"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 8h16M4 16h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

