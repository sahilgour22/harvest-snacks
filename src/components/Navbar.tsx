'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();
    const router = useRouter();

    const isContactPage = pathname === '/contact';

    // Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active Section Detection (Intersection Observer)
    useEffect(() => {
        if (isContactPage) return;

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -50% 0px', // Adjusted to trigger closer to center
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Logic: If Hero is visible, clear everything.
                    // Else, activate the section.
                    if (entry.target.id === 'hero') {
                        setActiveSection('');
                    } else {
                        setActiveSection(entry.target.id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe hero specifically plus other sections
        const hero = document.getElementById('hero');
        if (hero) observer.observe(hero);

        const sections = document.querySelectorAll('section[id]:not(#hero)');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [isContactPage]);

    // Prevent scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (pathname !== '/') {
            // If not on home, let normal navigation happen (or handle redirect)
            // Ideally we redirect to /#targetId
            return;
            // For now, Next.js Link handles the redirect to /#id automatically
        }

        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 100; // Navbar height offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    const isScrolledOrContact = isScrolled || isContactPage || isMenuOpen;
    // On Contact page, we always want the dark/scrolled style or a specific style? 
    // Prompt says "Sticky transformation" for scroll. Default is transparent. 
    // For Contact page, usually good to be visible. Let's assume Scrolled style for Contact page to ensure visibility.

    return (
        <nav className={`navbar-root ${isScrolledOrContact ? 'navbar-scrolled' : 'navbar-transparent'}`}>
            <div className="navbar-container">

                {/* --- CONTACT PAGE LAYOUT --- */}
                {isContactPage ? (
                    <div className="nav-contact-layout">
                        {/* Logo Centered (Absolute) */}
                        <div className="nav-contact-logo">
                            <Link href="/">
                                <div className="relative h-28 w-auto">
                                    <Image
                                        src="/brand-logo-white.png"
                                        alt="Three Fields"
                                        width={280}
                                        height={100}
                                        className="h-full w-auto object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Right Close Button */}
                        <div className="nav-contact-actions">
                            <Link href="/" className="nav-close-btn" aria-label="Close">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* --- HOME PAGE LAYOUT --- */
                    <div className="nav-home-layout">

                        {/* Left Nav */}
                        <div className="nav-side nav-left">
                            <a
                                href="#products"
                                className={`nav-item ${activeSection === 'products' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, 'products')}
                            >
                                Products
                                <span className="nav-indicator" />
                            </a>
                            <a
                                href="#standard"
                                className={`nav-item ${activeSection === 'standard' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, 'standard')}
                            >
                                Standard
                                <span className="nav-indicator" />
                            </a>
                        </div>

                        {/* Center Logo */}
                        <Link href="/" className="nav-logo-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="relative h-28 w-auto flex items-center justify-center">
                                <Image
                                    src="/brand-logo-white.png"
                                    alt="Three Fields"
                                    width={280}
                                    height={100}
                                    className="h-full w-auto object-contain transition-all duration-500"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Right Nav */}
                        <div className="nav-side nav-right">
                            <a
                                href="#about"
                                className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, 'about')}
                            >
                                Our Story
                                <span className="nav-indicator" />
                            </a>

                            <a
                                href="#recipes"
                                className={`nav-item ${activeSection === 'recipes' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, 'recipes')}
                            >
                                Recipes
                                <span className="nav-indicator" />
                            </a>

                            <Link href="/contact" className="nav-cta-premium">
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="mobile-toggle-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
                            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
                        </button>

                    </div>
                )}

            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'visible' : ''}`}>
                <div className="mobile-menu-links">
                    <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="mobile-link">Products</a>
                    <a href="#standard" onClick={(e) => handleNavClick(e, 'standard')} className="mobile-link">Standard</a>
                    <a href="#recipes" onClick={(e) => handleNavClick(e, 'recipes')} className="mobile-link">Recipes</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="mobile-link">Our Story</a>
                    <Link href="/contact" className="mobile-link highlight">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}

