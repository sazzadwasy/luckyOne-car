import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAutomobile } from '@fortawesome/free-solid-svg-icons'
    ;
import './Products.css'

const Products = ({ product }) => {
    return (
        <div className='product-info'>
            <img src={product.img} alt='' ></img>
            <p>Name : {product.name}</p>
            <p>Price : {product.price}</p>
            <button className='add-btn' ><FontAwesomeIcon icon={faAutomobile}></FontAwesomeIcon><p>Add to cart</p></button>
        </div>
    );
};

export default Products;