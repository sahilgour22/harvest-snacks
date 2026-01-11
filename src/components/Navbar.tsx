'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md'
                : 'bg-transparent'
                }`}
            style={{
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F6F43] to-[#2A8F5A] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <span className="text-white font-bold text-xl">TF</span>
                        </div>
                        <span
                            className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#1F6F43]' : 'text-white'
                                }`}
                        >
                            Three Fields
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className={`font-medium transition-all duration-300 hover:text-[#F4C430] relative group ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                                }`}
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#products"
                            className={`font-medium transition-all duration-300 hover:text-[#F4C430] relative group ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                                }`}
                        >
                            Products
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#recipes"
                            className={`font-medium transition-all duration-300 hover:text-[#F4C430] relative group ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                                }`}
                        >
                            Recipes
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#about"
                            className={`font-medium transition-all duration-300 hover:text-[#F4C430] relative group ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                                }`}
                        >
                            About Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="#contact"
                            className={`font-medium transition-all duration-300 hover:text-[#F4C430] relative group ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                                }`}
                        >
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <button className="btn btn-accent hidden md:inline-flex">
                        Shop Now
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
