'use client';

import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

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

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-container">

                {/* SUBSECTION 1: OUR STORY */}
                <div className="about-story-hero reveal">
                    <span className="about-eyebrow">Our Story</span>
                    <h2 className="about-heading">
                        Restoring the Connection with Real Food
                    </h2>
                    <p className="about-description">
                        "Three Fields was born to bring clean, honest nutrition straight from farms to families."
                    </p>
                </div>

                {/* SUBSECTION 2: OUR VALUES & NUTRITION */}
                <div className="about-grid-features">
                    {/* Values Card */}
                    <div className="feature-card reveal">
                        <h3 className="feature-title">Our Values</h3>
                        <div className="values-list">
                            <div className="value-row">
                                <div className="value-icon">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="value-content">
                                    <h4>Clean Ingredients</h4>
                                    <p>We source only the finest natural ingredients directly from nature.</p>
                                </div>
                            </div>
                            <div className="value-row">
                                <div className="value-icon">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                    </svg>
                                </div>
                                <div className="value-content">
                                    <h4>No Preservatives</h4>
                                    <p>Absolutely zero artificial additives, chemicals, or hidden nasties.</p>
                                </div>
                            </div>
                            <div className="value-row">
                                <div className="value-icon">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div className="value-content">
                                    <h4>High Nutrition</h4>
                                    <p>Packed with essential nutrients, vitamins, and minerals for your health.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nutrition card */}
                    <div className="feature-card feature-card-green reveal">
                        <h3 className="feature-title">Nutritional Powerhouse</h3>
                        <div className="nutrition-grid">
                            <div className="nutrition-item">
                                <span className="nutrition-keyword">High</span>
                                <span className="nutrition-explain">Protein Content: Essential for muscle repair and daily energy.</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrition-keyword">Rich</span>
                                <span className="nutrition-explain">Dietary Fiber: Supports healthy digestion and gut health.</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrition-keyword">Healthy</span>
                                <span className="nutrition-explain">Fats & Omega-3: Good for heart health and brain function.</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrition-keyword">Zero</span>
                                <span className="nutrition-explain">Trans-fat: Clean ingredients for light, guilt-free snacking.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SUBSECTION 3: FROM FARM TO PACK */}
                <div className="about-process-section">
                    <div className="about-sub-heading reveal">
                        <h3 className="about-sub-title">From Farm to Pack</h3>
                        <p className="about-sub-description">Our transparent manufacturing process ensures you get nothing but the best.</p>
                    </div>

                    <div className="about-process-grid">
                        <div className="process-card reveal">
                            <span className="process-icon">🌱</span>
                            <h4>Sourcing</h4>
                            <p>Direct from certified organic farms focusing on ethical practices.</p>
                        </div>
                        <div className="process-card reveal" style={{ transitionDelay: '0.1s' }}>
                            <span className="process-icon">🔥</span>
                            <h4>Roasting</h4>
                            <p>Slow roasted in small batches to ensure the perfect crunch and nutrient lock.</p>
                        </div>
                        <div className="process-card reveal" style={{ transitionDelay: '0.2s' }}>
                            <span className="process-icon">📦</span>
                            <h4>Packaging</h4>
                            <p>Oxygen-removed sealing to keep the snacks fresh without any chemicals.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

