'use client';

import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

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

        const elements = heroRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" ref={heroRef} className="hero-section">
            {/* SVG Filter for Hand-Crafted Texture */}
            <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
                <filter id="ink-distress-hero">
                    <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                </filter>
            </svg>
            {/* Minimal Background Layer */}
            <div className="hero-background-elements">
                <div
                    className="gradient-orb w-[800px] h-[800px] -top-40 -left-40"
                    style={{ background: 'radial-gradient(circle, #C9A84E 0%, transparent 70%)', opacity: 0.05 }}
                />
            </div>

            <div className="hero-container">
                <div className="hero-grid">
                    {/* 1. Primary Text Block */}
                    <div className="hero-text-block">
                        <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                            <h1 className="hero-h1">
                                Clean Fuel From Nature's Fields
                                <span className="text-[#C9A84E]">.</span>
                            </h1>
                        </div>

                        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                            <p className="hero-p">
                                Premium foxnuts, roasted nuts & organic seeds crafted for consistent everyday energy. Zero additives, just pure nature.
                            </p>
                        </div>
                    </div>

                    {/* 2. Visual Anchor - Clean, Minimal Focal Point */}
                    <div className="hero-visuals">
                        <div className="product-focal-point reveal product-animation">
                            <img
                                src="/hero-packets.png"
                                alt="Premium Three Fields Packets"
                                className="product-image-premium"
                            />

                            {/* Bold Handcrafted Tagline */}
                            <div className="hero-product-tagline">
                                CHOOSE YOUR<br />HEALTHY SNACK!
                            </div>
                        </div>
                    </div>

                    {/* 3. Actions & Integrity Block */}
                    <div className="hero-actions-block">
                        <div className="reveal hero-cta-group" style={{ transitionDelay: '0.6s' }}>
                            <button className="hero-btn hero-btn-primary">
                                Explore Products
                            </button>
                            <button className="hero-btn hero-btn-secondary">
                                View Recipes
                            </button>
                        </div>

                        {/* Confident Integrity Indicators */}
                        <div className="reveal hero-stats" style={{ transitionDelay: '0.7s' }}>
                            <div className="stat-item">
                                <span className="stat-value">100%</span>
                                <span className="stat-label">Natural Sourcing</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">Elite</span>
                                <span className="stat-label">Batch Quality</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
