import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productkey} = useParams();
    const product= fakeData.find(pd => pd.key === productkey);

    const ProductDetails = {
        width:'70%',
        marginLeft:'15%',
        backgroundColor:'gray'
    }

    return ( 
        <div style={ProductDetails}>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;