'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#FAFAF7] relative overflow-hidden">
            <div className="container relative z-10 px-4 md:px-0">

                {/* Header / Our Story */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#1F6F43] font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 font-display">
                        Restoring the Connection with Real Food
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        "Three Fields was born to bring clean, honest nutrition straight from farms to families."
                    </p>
                </div>

                {/* Values & Nutrition Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-stretch">
                    {/* Core Values */}
                    <div className="h-full bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#1F6F43] mb-8 font-display">Our Values</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-[#1F6F43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1A1A1A]">Clean Ingredients</h4>
                                    <p className="text-gray-500 leading-relaxed">We source only the finest natural ingredients directly from nature.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-[#1F6F43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1A1A1A]">No Preservatives</h4>
                                    <p className="text-gray-500 leading-relaxed">Absolutely zero artificial additives, chemicals, or hidden nasties.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-[#1F6F43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[#1A1A1A]">High Nutrition</h4>
                                    <p className="text-gray-500 leading-relaxed">Packed with essential nutrients, vitamins, and minerals for your health.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nutritional Highlights */}
                    <div className="h-full bg-[#1F6F43] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4C430] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold mb-8 font-display relative z-10">Nutritional Powerhouse</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="text-3xl font-bold text-[#F4C430] mb-2">High</div>
                                <div className="text-lg font-medium">Protein Content</div>
                                <p className="text-white/70 text-sm mt-2 leading-relaxed">Essential for muscle repair and daily energy.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="text-3xl font-bold text-[#F4C430] mb-2">Rich</div>
                                <div className="text-lg font-medium">Dietary Fiber</div>
                                <p className="text-white/70 text-sm mt-2 leading-relaxed">Supports healthy digestion and gut health.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 col-span-1 sm:col-span-2 hover:bg-white/15 transition-colors">
                                <div className="text-3xl font-bold text-[#F4C430] mb-2">Healthy</div>
                                <div className="text-lg font-medium">Fats & Omega-3</div>
                                <p className="text-white/70 text-sm mt-2 leading-relaxed">Good for heart health and brain function.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manufacturing Process */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-[#1A1A1A] font-display">From Farm to Pack</h3>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our transparent manufacturing process ensures you get nothing but the best.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Sourcing', desc: 'Direct from certified organic farms', color: 'bg-blue-50', icon: '🌱' },
                            { title: 'Roasting', desc: 'Slow roasted for perfect crunch', color: 'bg-orange-50', icon: '🔥' },
                            { title: 'Packaging', desc: 'Sealed to lock in freshness', color: 'bg-green-50', icon: '📦' }
                        ].map((step, idx) => (
                            <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`absolute inset-0 ${step.color} flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 group-hover:scale-105`}>
                                    <span className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{step.icon}</span>
                                    <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{step.title}</h4>
                                    <p className="text-gray-600 font-medium">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Safety & Hygiene */}
                <div className="border-t border-gray-100 pt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { title: 'ISO Certified', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                            {
                                title: 'Hygienic Packaging', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            },
                            { title: 'Quality Checks', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /> },
                            { title: 'Sustainable', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center gap-4 group">
                                <div className="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#1F6F43] group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {item.icon}
                                    </svg>
                                </div>
                                <span className="font-bold text-[#1A1A1A] text-lg">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
