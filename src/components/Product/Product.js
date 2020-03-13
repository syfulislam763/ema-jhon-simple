import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return ( 
        <div>
            <div className="product">
                <div className="img-part">
                    <img src={img} alt=""/>
                </div>
                <div className="content-part">
                    <h4 className="name">{name}</h4>
                    <p><small>by: {seller}</small></p>
                    <p style={{fontWeight:600}}>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button className="main-button" onClick={() => props.productAdd(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart} />add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;