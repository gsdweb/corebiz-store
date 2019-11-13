import React, { Component } from 'react';
import axios from 'axios';
import './Catalog.css';
import Products from '../../data/products.json';
import { Link, Route } from 'react-router-dom';

const Product = ({ id, name, description, images, addCart, imgs}) => {
    axios.get(`https://desolate-brushlands-20405.herokuapp.com/api/v1/products`, {})
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
    var thumbs = images[0].url;
    return (
        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4 catalog" id={id}>
            <div class="ibm-card">
                <div class="ibm-card__image">
                <Link to={`${id}`}><img src={thumbs} alt={name} width="100%" class="ibm-resize" title={name}/></Link>
                </div>
                <div class="ibm-card__content">
                    <h4 class="ibm-h4">{name}</h4>
                    <p class="ibm-ind-link"><Link to={`${id}`}>View</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Product;