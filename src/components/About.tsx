'use client';

import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const benefitsRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const benefitEls = benefitsRef.current?.querySelectorAll('.reveal');
        const storyEls = storyRef.current?.querySelectorAll('.reveal');

        benefitEls?.forEach((el) => observer.observe(el));
        storyEls?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* 3. WHY / BENEFITS SECTION (Premium Crafted Moment) */}
            <section id="benefits" className="benefits-section" ref={benefitsRef}>
                <div className="benefits-container">
                    <div className="benefits-header reveal">
                        <span className="benefits-eyebrow">The Three Fields Standard</span>
                        <h2 className="benefits-title">Refining the Art of Wellbeing</h2>
                    </div>

                    <div className="benefits-grid">
                        {/* Benefit Card 1 */}
                        <div className="benefit-card reveal">
                            <div className="benefit-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L12 9" />
                                    <path d="M12 9C12 9 15 6 18 6C21 6 22 8 22 10C22 12 19 14 16 14C13 14 12 12 12 12" />
                                    <path d="M12 9C12 9 9 6 6 6C3 6 2 8 2 10C2 12 5 14 8 14C11 14 12 12 12 12" />
                                    <path d="M12 12L12 22" />
                                </svg>
                            </div>
                            <div className="benefit-card-content">
                                <h4>Clean Ingredients</h4>
                                <p>Sourced directly from certified organic estates, prioritizing ecological harmony and raw purity.</p>
                            </div>
                        </div>

                        {/* Benefit Card 2 */}
                        <div className="benefit-card reveal" style={{ transitionDelay: '0.1s' }}>
                            <div className="benefit-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="9.88" y1="9.88" x2="14.12" y2="14.12" />
                                </svg>
                            </div>
                            <div className="benefit-card-content">
                                <h4>Zero Integrity Loss</h4>
                                <p>Absolutely no synthetic additives or hidden chemicals. We protect the true essence of every seed.</p>
                            </div>
                        </div>

                        {/* Benefit Card 3 */}
                        <div className="benefit-card reveal" style={{ transitionDelay: '0.2s' }}>
                            <div className="benefit-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="benefit-card-content">
                                <h4>Elite Roasting</h4>
                                <p>Slow-roasted in artisanal small batches to preserve natural oils, textures, and micronutrients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. STORY / SOURCING SECTION */}
            <section id="story" className="story-section" ref={storyRef}>
                <div className="story-background-overlay" />

                <div className="story-container">
                    <div className="story-card reveal">
                        <div className="story-divider" />

                        <div className="story-content">
                            <span className="story-eyebrow">Our Story</span>

                            <h2 className="story-title">
                                Restoring the Connection with Real Food
                            </h2>

                            <p className="story-description">
                                Three Fields was born from a simple realization — the modern snack aisle
                                had lost its soul. We return to the fields, sourcing ancient superfoods
                                and roasting them with patience to bring clean, honest nutrition
                                straight from farms to your family.
                            </p>

                            <div className="story-stats-grid">
                                <div className="story-stat">
                                    <span className="stat-unit">100%</span>
                                    <span className="stat-text">Traceable Sourcing</span>
                                </div>

                                <div className="story-stat">
                                    <span className="stat-unit">Zero</span>
                                    <span className="stat-text">Systemic Additives</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
