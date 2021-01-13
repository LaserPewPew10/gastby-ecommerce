import React from 'react';

export function ProductsGrid({products}){
    return (
        <section>
            {products.map(product => (
                <div>{products.title}</div>
            ))}
        </section>
    )
}