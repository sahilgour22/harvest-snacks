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


            {/* 4. STORY / SOURCING SECTION */}
            {/* 4. STORY / SOURCING SECTION */}
            <section id="about" className="story-section" ref={storyRef}>
                <div className="story-bg-texture" />

                <div className="story-container">
                    <div className="story-grid">
                        {/* LEFT: Copy */}
                        <div className="story-text-content reveal">
                            <span className="story-eyebrow">Our Story</span>
                            <h2 className="story-title">Three Friends.<br />Premium Healthy Snacks.</h2>

                            <div className="story-prose">
                                <p>
                                    It started with a shared realization. We were three friends, building careers in the corporate world, yet feeling increasingly disconnected from what truly matters.
                                </p>
                                <p>
                                    On the same day, we made a choice. We walked away from the safety of the expected to build something honest.
                                </p>
                                <p>
                                    Three Fields is our shared ground—where three diverse perspectives unite to craft real, meaningful food rooted in nature. Explore our <a href="#products" className="text-[#C9A84E] underline decoration-skip-ink">healthy snack collection</a> today.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Abstract Visual */}
                        <div className="story-visual reveal" style={{ transitionDelay: '0.2s' }}>
                            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="abstract-three-shapes">
                                {/* Shape 1: Forest */}
                                <circle cx="150" cy="150" r="100" fill="#16402D" fillOpacity="0.1" className="shape-1" />
                                {/* Shape 2: Gold */}
                                <circle cx="250" cy="200" r="90" fill="#C9A84E" fillOpacity="0.15" className="shape-2" />
                                {/* Shape 3: Sage/Deep */}
                                <circle cx="180" cy="250" r="80" fill="#0F2A1E" fillOpacity="0.08" className="shape-3" />

                                {/* Connecting Lines (abstract unity) */}
                                <path d="M150 150 L250 200 L180 250 Z" stroke="#16402D" strokeOpacity="0.1" strokeWidth="1.5" className="shape-connection" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
