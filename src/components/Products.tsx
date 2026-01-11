'use client';

import Image from 'next/image';

const products = [
    {
        id: 1,
        name: 'Foxnuts (Makhana)',
        benefit: 'High Protein • Roasted',
        image: '/product-foxnuts.png',
        accent: '#F4C430' // Yellow
    },
    {
        id: 2,
        name: 'Premium Almonds',
        benefit: 'Brain Food • Crunchy',
        image: '/product-almonds.png',
        accent: '#8B5E3C' // Brown
    },
    {
        id: 3,
        name: 'Roasted Cashews',
        benefit: 'Creamy • Rich Taste',
        image: '/product-cashews.png',
        accent: '#1F6F43' // Green
    },
    {
        id: 4,
        name: 'Flax Seeds',
        benefit: 'Omega-3 Rich • Raw',
        image: '/seeds.png',
        accent: '#8B5E3C'
    },
    {
        id: 5,
        name: 'Chia Seeds',
        benefit: 'Fiber Boost • Superfood',
        image: '/seeds.png',
        accent: '#F4C430'
    },
    {
        id: 6,
        name: 'Pumpkin Seeds',
        benefit: 'Zinc Rich • Tasty',
        image: '/seeds.png',
        accent: '#1F6F43'
    }
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-[#FAFAF7] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1F6F43]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4C430]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#1F6F43] font-bold tracking-wider uppercase text-sm mb-2 block">Our Collection</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                        Fueled by Nature
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-[2rem] p-6 pb-24 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div
                                className="absolute inset-0 rounded-[2rem] border-2 border-transparent transition-colors duration-300 group-hover:border-[color:var(--accent-color)]"
                                style={{ '--accent-color': product.accent } as React.CSSProperties}
                            />

                            {/* Image Container */}
                            <div className="relative h-64 w-full mb-6 flex items-center justify-center p-4 bg-gray-50 rounded-[1.5rem] overflow-visible group-hover:bg-transparent transition-colors duration-300">
                                <div className="relative w-48 h-48 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center relative z-10">
                                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 font-display">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 font-medium text-sm">
                                    {product.benefit}
                                </p>
                            </div>

                            {/* Button Container - Bottom aligned */}
                            <div className="absolute bottom-6 left-6 right-6">
                                {/* Hover State Button (Solid) */}
                                <button
                                    className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center gap-2 absolute bottom-0 left-0 right-0 z-20"
                                    style={{ backgroundColor: product.accent }}
                                >
                                    View Product
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                {/* Static State Button (Outline) */}
                                <div
                                    className="w-full py-4 rounded-xl font-bold text-center border-2 transition-opacity duration-300 group-hover:opacity-0"
                                    style={{ borderColor: product.accent, color: product.accent }}
                                >
                                    View Product
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
