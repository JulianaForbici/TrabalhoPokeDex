import React from 'react';

export function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.thumbnailUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p>R$ 0,00</p>
        </div>
    );
}