'use client';

import { useEffect, useRef } from 'react';
import './Recipes.css';

interface Recipe {
    id: number;
    title: string;
    time: string;
    servings: string;
    image: string;
    description: string;
}

const recipes: Recipe[] = [
    {
        id: 1,
        title: 'Spicy Masala Makhana',
        time: '12 mins',
        servings: '2 People',
        image: '/brand-packet.png',
        description: 'A crunchy, spicy protein snack. Perfect for clean mid-day cravings.',
    },
    {
        id: 2,
        title: 'Almond Energy Balls',
        time: '15 mins',
        servings: '12 Balls',
        image: '/brand-packet.png',
        description: 'No-bake energy bites made with raw almonds and natural sweeteners.',
    },
    {
        id: 3,
        title: 'Super Seed Smoothie',
        time: '05 mins',
        servings: '1 Glass',
        image: '/brand-packet.png',
        description: 'A nutrient-dense blend topped with our premium seed collection.',
    }
];

export default function Recipes() {
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
        <section id="recipes" className="recipes-section" ref={sectionRef}>
            <div className="recipes-container">
                {/* Section Header */}
                <div className="recipes-header reveal">
                    <div className="recipes-header-content">
                        <span className="recipes-eyebrow">Kitchen Chronicles</span>
                        <h2 className="recipes-title">
                            Crafted for Your Lifestyle
                        </h2>
                    </div>
                </div>

                {/* Recipes Grid */}
                <div className="recipes-grid">
                    {recipes.map((recipe, index) => (
                        <div
                            key={recipe.id}
                            className="recipe-card reveal"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            {/* 1. Image Wrapper */}
                            <div className="recipe-image-wrapper">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    loading="lazy"
                                />
                            </div>

                            {/* 2. Content Wrapper */}
                            <div className="recipe-card-content">
                                <h3 className="recipe-card-title">{recipe.title}</h3>
                                <p className="recipe-card-description">{recipe.description}</p>

                                <div className="recipe-meta">
                                    <div className="meta-item">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{recipe.time}</span>
                                    </div>
                                    <div className="meta-item">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <span>{recipe.servings}</span>
                                    </div>
                                </div>

                                <div className="recipe-card-cta">
                                    View Full Recipe
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-12 md:hidden reveal" style={{ transitionDelay: '0.4s' }}>
                    <a href="#recipes" className="recipes-view-all">
                        View All Recipes
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
