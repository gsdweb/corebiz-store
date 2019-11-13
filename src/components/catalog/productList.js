import React, { Component } from 'react';
import './Catalog.css';
import { Link, Route } from 'react-router-dom';

const Product = ({ productId, productName, imageUrl, price, addCart }) => {
    return (
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 catalog" id={productId}>
            <div class="ibm-card">
                <div class="ibm-card__image">
                <Link to={`${productId}`}><img src={imageUrl} alt={productName} width="100%" class="ibm-resize" title={productName}/></Link>
                </div>
                <div class="ibm-card__content">
                    <h4 class="ibm-h4">{productName}</h4>
                    <p class="ibm-ind-link"><Link to={`${productId}`}>View</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Product;