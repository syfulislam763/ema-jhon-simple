import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)

    const [cart, setCart] = useState([]);

    const productAdd = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            <div className="shop-container">
                <div className="shop-products">
                    {
                        products.map(pd => <Product
                                            productAdd={productAdd} 
                                            product={pd}>
                                            </Product>)
                    }
                </div>
                <div className="shop-card">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;