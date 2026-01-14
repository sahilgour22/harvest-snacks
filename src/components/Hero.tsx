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
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={heroRef} className="hero-section">
            {/* Background Layer */}
            <div className="hero-background-elements">
                <div
                    className="gradient-orb w-[600px] h-[600px] -top-20 -left-20"
                    style={{ background: 'radial-gradient(circle, #F4C430 0%, transparent 70%)', opacity: 0.15 }}
                />
                <div
                    className="gradient-orb w-[500px] h-[500px] bottom-0 right-0"
                    style={{ background: 'radial-gradient(circle, #2A8F5A 0%, transparent 70%)', opacity: 0.2 }}
                />
            </div>

            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left content: Text & Actions */}
                    <div className="hero-content">
                        <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                            <h1 className="hero-h1">
                                Clean Fuel From Nature's Fields
                                <span className="text-[#F4C430]">.</span>
                            </h1>
                        </div>

                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <p className="hero-p">
                                Premium foxnuts, roasted nuts & organic seeds crafted for consistent everyday energy. Zero additives, just pure nature.
                            </p>
                        </div>

                        <div className="animate-on-scroll hero-cta-group" style={{ animationDelay: '0.3s' }}>
                            <button className="hero-btn hero-btn-primary">
                                Explore Products
                            </button>
                            <button className="hero-btn hero-btn-secondary">
                                View Recipes
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="animate-on-scroll hero-stats" style={{ animationDelay: '0.4s' }}>
                            <div className="stat-item">
                                <span className="stat-value">100%</span>
                                <span className="stat-label">Natural</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">Zero</span>
                                <span className="stat-label">Preservatives</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">Elite</span>
                                <span className="stat-label">Quality</span>
                            </div>
                        </div>
                    </div>

                    {/* Right content: Product Visuals */}
                    <div className="hero-visuals hidden md:flex">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Main Product Visual */}
                            <div className="relative z-20 animate-float-subtle">
                                <div className="w-80 h-[420px] rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col items-center justify-center p-8 transition-transform duration-700 hover:scale-[1.02]">
                                    <div className="w-64 h-64 mb-6 flex items-center justify-center">
                                        <img
                                            src="/makhana.png"
                                            alt="Premium Makhana"
                                            className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Premium Makhana</h3>
                                        <div className="h-0.5 w-12 bg-[#F4C430] mx-auto rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating decorative elements - reduced noise */}
                            <div className="absolute top-10 left-0 animate-float-subtle" style={{ animationDelay: '1s' }}>
                                <div className="w-40 h-40 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-white/10">
                                    <img src="/nuts.png" alt="" className="w-28 h-28 object-contain opacity-80" />
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-0 animate-float-subtle" style={{ animationDelay: '2s' }}>
                                <div className="w-40 h-40 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-white/10">
                                    <img src="/seeds.png" alt="" className="w-28 h-28 object-contain opacity-80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Minimal */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-white/40">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
            </div>
        </section>
    );
}

