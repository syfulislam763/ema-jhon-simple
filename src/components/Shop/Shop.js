import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
        const first10 = fakeData.slice(0, 10);
        const [products, setProducts] = useState(first10)

        const [cart, setCart] = useState([]);

        useEffect(() => {
            const getItems = getDatabaseCart();
            const objectKey = Object.keys(getItems);
            const outputValue = objectKey.map( pdKey => {
                const product = fakeData.find(pd => pd.key === pdKey);
                product.quantity = getItems[pdKey];
                return product;
            })
            setCart(outputValue)
        }, [])

        const productAdd = (product) => {

            const Added = product.key;
            const sameData = cart.find(pd => pd.key === Added);
            let count = 1;
            let newCart;
            if(sameData){
                count = sameData.quantity + 1;
                sameData.quantity = count;
                const others = cart.filter(pd => pd.key !== Added);
                newCart = [...others, sameData];
            }else{
                product.quantity = 1;
                newCart = [...cart, product];
            }
            
            setCart(newCart);
            addToDatabaseCart(Added, count);
        }

        return ( 
            <div>
                <div className = "shop-container">
                    <div className = "shop-products" > {
                        products.map(pd => < Product
                            key = {pd.key} 
                            showAddToCart = { true }
                            productAdd = { productAdd }
                            product = { pd } >
                            </Product>)
                        }
                    </div> 
                    <div className = "shop-card">
                        <Cart cart = { cart } > 
                            <Link to="order">
                                <button className = "main-button">Order Review</button>
                            </Link>
                        </Cart> 
                    </div> 
                </div> 
            </div>
            );
        };

        export default Shop;