import React from 'react';
import {Layout, Filters} from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';


const Content = styled.div`
display: grid;
grip-gap: 20px;
margin-top: 20px;
grid-template-columns: 1fr 3fr;

`


export default function AllProducts() {
    const {products, collections} = React.useContext(ProductContext);

    return (
<Layout>
    <h4>All Products</h4>
    <SVGTextContentElement>
       <Filters />
       <div>Products</div>
    </SVGTextContentElement>
</Layout>
    )
}