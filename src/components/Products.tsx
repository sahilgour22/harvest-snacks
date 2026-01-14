'use client';

import './Products.css';

const products = [
    {
        id: 1,
        name: 'Foxnuts (Makhana)',
        benefit: 'Premium Roasted Superfood',
        image: '/makhana.png', // Using the clean image from hero context
    },
    {
        id: 2,
        name: 'Premium Almonds',
        benefit: 'Brain Fuel • Perfectly Crunchy',
        image: '/nuts.png',
    },
    {
        id: 3,
        name: 'Super Seed Mix',
        benefit: 'Omega-3 Rich • Daily Nutrient Boost',
        image: '/seeds.png',
    },
    {
        id: 4,
        name: 'Pistachio Kernels',
        benefit: 'High Protein • Lightly Salted',
        image: '/nuts.png',
    },
    {
        id: 5,
        name: 'Pumpkin Seeds',
        benefit: 'Zinc Rich • Great for Heart Health',
        image: '/seeds.png',
    },
    {
        id: 6,
        name: 'Gourmet Cashews',
        benefit: 'Creamy • Handpicked Quality',
        image: '/nuts.png',
    }
];

export default function Products() {
    return (
        <section id="products" className="products-section">
            <div className="products-container">
                <div className="products-header">
                    <span className="products-pretitle">The Collection</span>
                    <h2 className="products-title">Nature's Finest Fuel</h2>
                </div>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            {/* 1. Product Image */}
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                />
                            </div>

                            {/* 2. Product Name */}
                            <h3 className="product-name">
                                {product.name}
                            </h3>

                            {/* 3. Subtitle */}
                            <p className="product-subtitle">
                                {product.benefit}
                            </p>

                            {/* 4. CTA */}
                            <div className="product-cta">
                                View Product
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

