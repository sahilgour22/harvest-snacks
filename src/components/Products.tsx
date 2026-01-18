'use client';

import { useEffect, useRef } from 'react';
import './Products.css';

interface Product {
    id: number;
    name: string;
    benefit: string;
    image: string;
    category: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Foxnuts (Makhana)',
        benefit: 'Premium Roasted Superfood',
        image: '/brand-packet.png',
        category: 'makhana',
    },
    {
        id: 2,
        name: 'Foxnuts (Makhana)',
        benefit: 'Brain Fuel • Perfectly Crunchy',
        image: '/brand-packet.png',
        category: 'almonds',
    },
    {
        id: 3,
        name: 'Foxnuts (Makhana)',
        benefit: 'Omega-3 Rich • Daily Nutrient Boost',
        image: '/brand-packet.png',
        category: 'seeds',
    },
    // {
    //     id: 4,
    //     name: 'Pistachio Kernels',
    //     benefit: 'High Protein • Lightly Salted',
    //     image: '/nuts.png',
    //     category: 'almonds',
    // },
    // {
    //     id: 5,
    //     name: 'Pumpkin Seeds',
    //     benefit: 'Zinc Rich • Great for Heart Health',
    //     image: '/seeds.png',
    //     category: 'seeds',
    // },
    // {
    //     id: 6,
    //     name: 'Gourmet Cashews',
    //     benefit: 'Creamy • Handpicked Quality',
    //     image: '/nuts.png',
    //     category: 'cashews',
    // }
];

export default function Products() {
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
        <section id="products" className="products-section" ref={sectionRef}>
            {/* Structured Data for Products */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(products.map(p => ({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": p.name,
                        "image": `https://threefields.com${p.image}`,
                        "description": p.benefit,
                        "brand": {
                            "@type": "Brand",
                            "name": "Three Fields"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://threefields.com#products",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock"
                        }
                    })))
                }}
            />

            {/* Background text */}
            <div className="pointer-events-none absolute bottom-10 left-[-10%] w-[120%] select-none">
                <div className="whitespace-nowrap font-['Chicken_Pie'] text-[20vw] font-black leading-none text-black/10">
                    THREE FIELDS THREE FIELDS THREE FIELDS THREE FIELDS
                </div>
            </div>

            <div className="products-container">
                <div className="products-header reveal">
                    {/* <span className="products-pretitle">The Collection</span> */}
                    <h2 className="products-title">Nature's Finest Healthy Snacks</h2>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`product-card product-card-${product.category} reveal`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={`${product.name} - ${product.benefit} by Three Fields`}
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-subtitle">{product.benefit}</p>
                            <a href="#recipes" className="product-cta">View Recipes</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
