import React from 'react';
import {Layout} from 'components';
import ProductContext from 'context/ProductContext';


export default function AllProducts() {
    const {products, collections} = React.useContext(ProductContext);

    return (
<Layout>
    <h4>All Products</h4>
    <div>
        {collections.map(collection => (
            <div key={collection.shopifyId}>{collection.title}</div>
        ))}
    </div>
</Layout>
    )
}