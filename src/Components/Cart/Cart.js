import React from 'react';
import './Cart.css'

const Cart = ({ cart, randomChoose }) => {
    return (
        <div >
            <div className='fixed-cart'>
                {
                    cart.map(item => (
                        <div >
                            <p className='cart-items'>{item.name}</p>
                        </div>
                    ))
                }
                <button onClick={() => randomChoose()} className='choose-btn'>Choose One</button>
            </div>
        </div>
    );
};

export default Cart;

//j component diye 