import React from 'react';
import ProductContext from 'context/ProductContext';
import {ProductsGrid} from '../ProductsGrid';

export function FeaturedProducts() {
    const {collections} = React.useContext(ProductsContext);

const featuredCollection = collections.find(
    collection => collection.title === 'Featured Hats'
)

    return (
        <section>
            <h1>Featured Hat</h1>
            <ProductsGrid products={featuredCollection.products} />
        </section>
    );
}