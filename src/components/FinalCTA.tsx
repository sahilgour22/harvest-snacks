'use client';

import { useEffect, useRef } from 'react';
import './FinalCTA.css';

export default function FinalCTA() {
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
        <section className="final-cta-section" ref={sectionRef}>
            <div className="final-cta-container">
                <div className="final-cta-content reveal">
                    <h2 className="final-cta-title">
                        Fuel Your Daily Ambition with<br />Nature’s Purest Energy.
                    </h2>
                    <button className="final-cta-btn">
                        Shop the Collection
                    </button>
                </div>
            </div>
        </section>
    );
}
