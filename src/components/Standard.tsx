'use client';

import { useEffect, useRef } from 'react';
import './Standard.css';

export default function Standard() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('standard-visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="standard" className="standard-section" ref={sectionRef}>
            <div className="standard-bg-texture" />

            <div className="standard-container">
                <div className="standard-header">
                    <span className="standard-eyebrow">The Three Fields Standard</span>
                    <h2 className="standard-headline">Refining the Art of Wellbeing</h2>
                </div>

                <div className="standard-pillars">
                    {/* Pillar 1: Clean Ingredients */}
                    <div className="standard-pillar">
                        <div className="pillar-icon-wrapper">
                            <svg className="pillar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    strokeOpacity="0.2"
                                />
                                <path
                                    d="M12 6V18M6 12H18" // Placeholder for a pure/leaf icon abstract
                                    strokeLinecap="round"
                                    className="animate-pulse-slow"
                                />
                                <path
                                    d="M12 6C12 6 16 8 16 12C16 16 12 18 12 18C12 18 8 16 8 12C8 8 12 6 12 6Z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3 className="pillar-title">Clean Ingredients</h3>
                        <p className="pillar-desc">
                            sourced from the finest origins, ensuring absolute purity and zero artificial additives in every single batch.
                        </p>
                    </div>

                    {/* Pillar 2: Zero Integrity Loss */}
                    <div className="standard-pillar">
                        <div className="pillar-icon-wrapper">
                            <svg className="pillar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="3" y="3" width="18" height="18" rx="2" strokeOpacity="0.2" />
                                <path
                                    d="M9 12L11 14L15 10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="animate-draw"
                                />
                                <path d="M12 16V16.01" strokeLinecap="round" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3 className="pillar-title">Zero Integrity Loss</h3>
                        <p className="pillar-desc">
                            Our proprietary handling process preserves 99% of nutritional value from farm to your pantry.
                        </p>
                    </div>

                    {/* Pillar 3: Elite Roasting */}
                    <div className="standard-pillar">
                        <div className="pillar-icon-wrapper">
                            <svg className="pillar-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.0706 21 12 21Z" strokeOpacity="0.2" />
                                <path
                                    d="M12 8V12L14 14"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 18L18 6" // Heat wave abstract
                                    strokeLinecap="round"
                                    strokeOpacity="0"
                                >
                                    <animate attributeName="stroke-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                                </path>
                            </svg>
                        </div>
                        <h3 className="pillar-title">Elite Roasting</h3>
                        <p className="pillar-desc">
                            Slow-roasted in small batches to unlock deep, complex flavors without compromising texture.
                        </p>
                    </div>
                </div>
            </div>

            {/* Inline Animation Styles for specific SVGs if needed beyond global CSS */}
            <style jsx>{`
                .animate-pulse-slow {
                    animation: pulse 4s ease-in-out infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}</style>
        </section>
    );
}
