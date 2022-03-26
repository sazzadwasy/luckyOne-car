import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='fixed'>
            <h1>hello cart</h1>
            <div className='cart-info'>
                <p>{cart.name}</p>
            </div>
        </div>
    );
};

export default Cart;