import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                        ></Products>)

                    }
                </div>
                <div className='cart-container'>
                    <h1>cart</h1>

                </div>
            </div>
        </div>
    );
};

export default Shop;