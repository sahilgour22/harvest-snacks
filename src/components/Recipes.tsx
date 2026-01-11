'use client';

import Image from 'next/image';

const recipes = [
    {
        id: 1,
        title: 'Spicy Masala Makhana',
        time: '10 mins',
        servings: '2 People',
        image: '/product-foxnuts.png',
        description: 'A crunchy, spicy snack packed with protein. Perfect for tea time!',
        color: '#F4C430'
    },
    {
        id: 2,
        title: 'Almond Energy Balls',
        time: '15 mins',
        servings: '12 Balls',
        image: '/product-almonds.png',
        description: 'No-bake energy bites made with dates, almonds, and cocoa.',
        color: '#8B5E3C'
    },
    {
        id: 3,
        title: 'Super Seed Smoothie',
        time: '5 mins',
        servings: '1 Glass',
        image: '/seeds.png',
        description: 'A nutrient-dense smoothie topped with chia, flax, and pumpkin seeds.',
        color: '#1F6F43'
    }
];

export default function Recipes() {
    return (
        <section id="recipes" className="py-24 bg-white relative overflow-hidden">

            <div className="container relative z-10 px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-[#1F6F43] font-bold tracking-wider uppercase text-sm mb-2 block">Kitchen Chronicles</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] max-w-lg">
                            Crafted for Your Lifestyle
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-[#1F6F43] font-bold hover:text-[#185534] transition-colors">
                        View All Recipes
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-[#FAFAF7] cursor-pointer"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-110">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={recipe.image}
                                        alt={recipe.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content - Bottom Default */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-12">
                                <div className="flex items-center gap-4 text-white/80 text-sm font-medium mb-3">
                                    <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {recipe.time}
                                    </span>
                                    <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        {recipe.servings}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-white font-display leading-tight mb-2">
                                    {recipe.title}
                                </h3>
                            </div>

                            {/* Hover Overlay Content */}
                            <div className="absolute inset-0 bg-[#1F6F43]/90 backdrop-blur-sm p-8 flex flex-col justify-center items-center text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                <h3 className="text-2xl font-bold text-white font-display mb-4">
                                    {recipe.title}
                                </h3>
                                <p className="text-white/90 mb-8 leading-relaxed">
                                    {recipe.description}
                                </p>
                                <button className="bg-[#F4C430] text-[#1A1A1A] px-8 py-3 rounded-xl font-bold hover:bg-white transition-colors duration-300">
                                    View Full Recipe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-[#1F6F43] font-bold">
                        View All Recipes
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
