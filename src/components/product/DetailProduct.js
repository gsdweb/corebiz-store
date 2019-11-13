import React, { Component } from 'react';
import './Product.css';
import { Link, Route } from 'react-router-dom';

const DetailProduct = ({ productId, productName, imageUrl, price, addCart }) => {
    return (
        <div class="ibm-grid-container" id={productId}>
            <div class="ibm-grid-col-sm-4-4">
                <Link to="/">
                    <p class="ibm-icon-nolink ibm-back-link"><span>Back</span></p>
                </Link>
            </div>
            <div class="ibm-grid-col-lg-16-2 ibm-grid-col-md-8-8">
                <a href={imageUrl} data-fancybox="images" data-caption={productName}><img src={imageUrl} alt="IBM" width="100%" class="ibm-resize ibm-margin-bottom-1" title="IBM" /></a>
            </div>
            <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-2">
                <h3 class="ibm-h3">{productName}</h3>
                <p>{price}</p>
            </div>
            <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-3">

                <div class="ibm-card card-detail">
                    <div class="ibm-card__content">
                        <h5 class="ibm-h5">This product can be shipped worldwide</h5>

                        <p class="ibm-form-elem-grp">
                            <label>Quantity</label><br />
                            <span>
                                <input type="text" class="ibm-styled-input" placeholder="1" id="units" name="units" disabled />
                            </span>
                        </p>

                        <p>Add products to the shopping cart to request a quotation. If you need a product in a different color or size, add it separately.</p>
                        <button class="ibm-btn-pri" type="button" onClick={() => addCart({ productId, productName, imageUrl, price, units: 1 })}>Add to Cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailProduct;
