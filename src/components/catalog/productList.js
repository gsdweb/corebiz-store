import React, { Component } from 'react';
import './Catalog.css';
import { Link, Route } from 'react-router-dom';

const Product = ({ productId, productName, imageUrl, price, addCart }) => {
    return (
        <div className="col-lg-12 col-md-8 catalog" id={productId}>
            <div className="card">
                <div className="card-img-top">
                <Link to={`${productId}`}><img src={imageUrl} alt={productName} width="100%" className="img-fluid" title={productName}/></Link>
                </div>
                <div className="card-body">
                    <h4>{productName}</h4>
                    <p><Link to={`${productId}`}>View</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Product;