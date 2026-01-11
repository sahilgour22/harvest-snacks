'use client';

import { useEffect, useRef } from 'react';

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
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #1F6F43 0%, #2A8F5A 50%, #1F6F43 100%)',
            }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div
                    className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
                    style={{
                        background: 'radial-gradient(circle, #F4C430 0%, transparent 70%)',
                        animation: 'float 8s ease-in-out infinite',
                    }}
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-25 blur-[100px]"
                    style={{
                        background: 'radial-gradient(circle, #8B5E3C 0%, transparent 70%)',
                        animation: 'float 10s ease-in-out infinite',
                        animationDelay: '2s',
                    }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, #2A8F5A 0%, transparent 70%)',
                        animation: 'float 12s ease-in-out infinite',
                        animationDelay: '4s',
                    }}
                ></div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/4 float" style={{ animationDelay: '0s', animation: 'float 6s ease-in-out infinite' }}>
                    <div className="w-3 h-3 rounded-full bg-white/20 backdrop-blur-sm"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 float" style={{ animationDelay: '1s', animation: 'float 7s ease-in-out infinite' }}>
                    <div className="w-2 h-2 rounded-full bg-white/15 backdrop-blur-sm"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/3 float" style={{ animationDelay: '2s', animation: 'float 8s ease-in-out infinite' }}>
                    <div className="w-4 h-4 rounded-full bg-white/25 backdrop-blur-sm"></div>
                </div>
                <div className="absolute top-2/3 right-1/3 float" style={{ animationDelay: '3s', animation: 'float 9s ease-in-out infinite' }}>
                    <div className="w-2 h-2 rounded-full bg-white/20 backdrop-blur-sm"></div>
                </div>
                <div className="absolute bottom-1/4 left-2/3 float" style={{ animationDelay: '1.5s', animation: 'float 7.5s ease-in-out infinite' }}>
                    <div className="w-3 h-3 rounded-full bg-white/18 backdrop-blur-sm"></div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="container relative z-40">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <h1
                                className="text-6xl md:text-7xl lg:text-8xl leading-tight mb-6"
                            >
                                Clean Fuel From Nature's Fields
                            </h1>
                        </div>

                        <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                                Premium foxnuts, nuts & seeds crafted for everyday energy
                            </p>
                        </div>

                        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
                            <button className="btn btn-accent text-lg px-8 py-4">
                                Explore Products
                            </button>
                            <button className="btn btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-[#1F6F43]">
                                View Recipes
                            </button>
                        </div>

                        {/* Stats or Trust Indicators */}
                        <div className="animate-on-scroll flex gap-8 pt-12" style={{ animationDelay: '0.8s' }}>
                            <div>
                                <div className="text-4xl font-bold text-[#F4C430]">
                                    100%
                                </div>
                                <div className="text-sm text-white/80">Natural</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#F4C430]">
                                    Zero
                                </div>
                                <div className="text-sm text-white/80">Preservatives</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#F4C430]">
                                    Premium
                                </div>
                                <div className="text-sm text-white/80">Quality</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Floating Product Visuals */}
                    <div className="relative h-[600px] hidden md:block">
                        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                            {/* Main Product Card - Center */}
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    animation: 'float 4s ease-in-out infinite, rotate3d 8s ease-in-out infinite',
                                }}
                            >
                                <div className="w-72 h-80 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl p-6 flex items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(244,196,48,0.3)]">
                                    <div className="text-center">
                                        <div className="w-52 h-52 mx-auto mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/makhana.png"
                                                alt="Premium Makhana"
                                                className="w-full h-full object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            Premium Makhana
                                        </h3>
                                        <p className="text-white/80 text-sm">Roasted to perfection</p>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Product Card - Top Left */}
                            <div
                                className="absolute top-16 left-4"
                                style={{
                                    animation: 'float 5s ease-in-out infinite 0.5s, rotate3d 10s ease-in-out infinite',
                                }}
                            >
                                <div className="w-44 h-52 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl p-4 flex items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(139,94,60,0.3)]">
                                    <div className="text-center">
                                        <div className="w-28 h-28 mx-auto mb-3 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/nuts.png"
                                                alt="Mixed Nuts"
                                                className="w-full h-full object-contain drop-shadow-xl"
                                            />
                                        </div>
                                        <p className="text-sm text-white font-semibold">Mixed Nuts</p>
                                        <p className="text-xs text-white/70">Energy boost</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tertiary Product Card - Bottom Right */}
                            <div
                                className="absolute bottom-16 right-4"
                                style={{
                                    animation: 'float 4.5s ease-in-out infinite 1s, rotate3d 9s ease-in-out infinite',
                                }}
                            >
                                <div className="w-44 h-52 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl p-4 flex items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(244,196,48,0.3)]">
                                    <div className="text-center">
                                        <div className="w-28 h-28 mx-auto mb-3 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/seeds.png"
                                                alt="Super Seeds"
                                                className="w-full h-full object-contain drop-shadow-xl"
                                            />
                                        </div>
                                        <p className="text-sm text-white font-semibold">Super Seeds</p>
                                        <p className="text-xs text-white/70">Nutrient rich</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
