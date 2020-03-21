import React from 'react';

const Review = (props) => {
    //console.log(props.removeHandler)
    const {name, category, price, quantity} = props.product;
    
    return (
        <div style={{borderBottom:'1px solid #ddd'}}>
            <h1 style={{fontSize:'20px',color:'lightblack'}}>{name}</h1>
            <p style={{fontWeight:600}}>category: {category}</p>
            <p style={{fontWeight:600}}>price: {price}</p>
            <p style={{fontWeight:600}}>quantity: {quantity}</p>
            <br/>
            <button style={{marginBottom:'20px'}} className = "main-button" onClick={() => props.removeHandler(props.product)}>
            remove</button>
        </div>
    );
};

export default Review;