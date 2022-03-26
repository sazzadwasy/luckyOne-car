import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const showInfoInCart = (product) => {

        const newCart = [...cart, product]
        setCart(newCart)
    }
    const randomChoose = () => {
        const index = Math.floor(Math.random() * cart.length)
        alert(cart[index].name)

    }
    console.log(cart)
    return (
        <div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                            showInfoInCart={showInfoInCart}
                        ></Products>)

                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}
                        randomChoose={randomChoose}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
//ans: 