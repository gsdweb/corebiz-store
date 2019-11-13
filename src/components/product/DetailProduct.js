import React, { Component } from 'react';
import './Product.css';
import { Link, Route } from 'react-router-dom';

const DetailProduct = ({ productId, productName, imageUrl, price, addCart }) => {
    return (
        <div className="row" id={productId}>
            <div className="col-sm-4">
                <Link to="/">
                    <p className="ibm-icon-nolink ibm-back-link"><span>Back</span></p>
                </Link>
            </div>
            <div className="col-lg-12 col-md-8">
                <a href={imageUrl} data-fancybox="images" data-caption={productName}><img src={imageUrl} alt="coreBiz" width="100%" className="img-fluid mb-1" title="coreBiz" /></a>
            </div>
            <div className="col-lg-12 col-md-8">
                <h3>{productName}</h3>
                <p>{price}</p>
            </div>
            <div className="col-lg-12 col-md-8">

                <div className="card">
                    <div className="card-body">
                        <h5>This product can be shipped worldwide</h5>

                        <p>
                            <label>Quantity</label><br />
                            <span>
                                <input type="text" placeholder="1" id="units" name="units" disabled />
                            </span>
                        </p>

                        <p>Add products to the shopping cart to request a quotation. If you need a product in a different color or size, add it separately.</p>
                        <button className="btn btn-danger" type="button" onClick={() => addCart({ productId, productName, imageUrl, price, units: 1 })}>Add to Cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailProduct;
