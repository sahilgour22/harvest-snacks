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
            {/* 3. WHY / BENEFITS SECTION */}
            <section id="benefits" className="benefits-section" ref={benefitsRef}>
                <div className="benefits-container">
                    <div className="benefits-header reveal">
                        <span className="benefits-eyebrow">Why Three Fields?</span>
                        <h2 className="benefits-title">Crafted for Elite Wellbeing</h2>
                    </div>

                    <div className="benefits-v-grid">
                        <div className="benefit-item reveal">
                            <div className="benefit-icon">🌱</div>
                            <div className="benefit-content">
                                <h4>Clean Ingredients</h4>
                                <p>Sourced directly from certified organic farms focusing on ethical practices.</p>
                            </div>
                        </div>

                        <div className="benefit-divider" />

                        <div className="benefit-item reveal">
                            <div className="benefit-icon">🚫</div>
                            <div className="benefit-content">
                                <h4>No Preservatives</h4>
                                <p>Absolutely zero artificial additives, chemicals, or hidden nasties.</p>
                            </div>
                        </div>

                        <div className="benefit-divider" />

                        <div className="benefit-item reveal">
                            <div className="benefit-icon">💪</div>
                            <div className="benefit-content">
                                <h4>Elite Nutrition</h4>
                                <p>Slow-roasted in small batches to preserve nutrients and purity.</p>
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
