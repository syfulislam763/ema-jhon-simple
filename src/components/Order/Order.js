import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Review from '../Review/Review';
import Cart from '../Cart/Cart';
import happy from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const Order = () => {
        const [review, setReview] = useState([]);
        const [ordered, setOrdered] = useState(false);

        const auth = useAuth();

        const orderHandler = () => {
            setReview([]);
            setOrdered(true);
            processOrder();
        }

        const removeHandler = (product) => {
            console.log("removed me", product);
            const newReview = review.filter(pd => pd.key !== product.key);
            setReview(newReview);
            removeFromDatabaseCart(product.key);

        }

        useEffect(() => {
            const saveCart = getDatabaseCart();
            const porductkeys = Object.keys(saveCart);
            const cartProducts = porductkeys.map(key => {
                const product = fakeData.find(pd => pd.key === key);
                product.quantity = saveCart[key];
                return product;
            });
            setReview(cartProducts);
        }, [])

        const style = {
            width: '70%',
            backgroundColor: 'white',
            boxShadow: '5px 3px 15px gray',
            padding: '10px',
            width: '80%',
            marginBottom: '30px',
            marginLeft: '10%'
        }
        let thanks;
        if (ordered) {
            thanks = < img src = { happy }
            alt = "" / >
        }
        return ( 
            <div className = "shop-container">
                <div style = { style }>
                    <h1 style = {{ color: 'green' } }> Order List: { review.length } </h1>  
                    {
                        review.map(pd => < Review key = { pd.key }
                                removeHandler = { removeHandler }
                                product = { pd } > </Review>)
                    } 
                    <div style = {{ textAlign: 'center' } }> 
                        { thanks } 
                    </div> 
                    {
                        !review.length && <h1>you cart is empty. <a style={{textDecoration:'none'}} href="/shop">keep shopping</a></h1>
                    } 
                </div>  
                <div style = {{ margin: '5%' } } >
                    <Cart cart = { review } >
                        <Link to = "Shipment" > 
                            {
                                auth.user ?
                                < button className = "main-button" > Shipment CheckOut </button> 
                                :< button className = "main-button" > Sign In </button>  
                            } 
                        </Link>  
                    </Cart>  
                </div>  
            </div>
            );
        };

        export default Order;