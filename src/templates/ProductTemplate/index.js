/* eslint-disable jsx-ally/no-onchange */
import React from 'react';
import { graphql } from 'gatsby';
import { Layout,ImageGallery } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';
import {navigate, useLocation} from '@reach/router';


export const query = graphql`
query ProductQuery($shopifyId: String){
    shopifyProduct(shopifyId: {eq: $shopifyId}) {
        shopifyId
        title
        description
        images {
            id
            localfile {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }   
    }
}
}
`;

export default function ProductTemplate(props) {
    const {getProductById} = React.useContext(CartContext);
    const [product, setProduct] = React.useState(null);
    const [selectedVariant, setSelectedVariant] = React.useState(null);
    const {search, origin, pathname} = useLocation();

    React.useEffect(() => {
        getProductById(props.data.shopifyProduct.shopifyId).then(result => {
            setProduct(result);
            setSelectedVariant(result.variants[0]);
        });
    },[getProductById, setProduct, props.data.shopifyProduct.shopifyId]);

    const handleVariantChange = (e) => {
        const newVariant= product?.variants.find(v => v.id === e.target.value );
        setSelectedVariant(newVariant);
        navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`, {
            replace: true
        })
    };

    return (
        <Layout>
            <Grid>
                <div>
                    <h1>{props.data.shopifyProduct.title}</h1>
                    <p>{props.data.shopifyProduct.description}</p>
                    {product?.availableForSale && (
                    <>
                    <SelectWrapper>
                    <stong>Variant</stong>
                    <select onChange={handleVariantChange}>
                        {product?.variants.map(v => (
                            <option key={v.id} value={v.id}>
                            {v.title}
                            </option>
                        ))}
                    </select>
                    </SelectWrapper>
                    {!!selectedVariant && <Price>${selectedVariant.price}</Price>}
                    </>
                    )}
                </div>
                <div>
                <ImageGallery images={props.data.shopifyProduct.images}/>
                </div>
            </Grid>
        </Layout>
    );
}
