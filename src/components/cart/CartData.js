import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const CartData = ({ productId, productName, imageUrl, price, units, delCart }) => {
    return (
        <div className="col-sm-4 cart-item pb-1 mt-1 mb-2" id={productId}>
            <div className="row">
                <div className="col-lg-12 col-sm-4"><img src={imageUrl} alt="CoreBiz" width="100%" className="img-fluid mb-1" title="CoreBiz" /></div>
                <div className="col-lg-12 col-sm-4">
                    <div className="row">

                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-md-8"><h4>{productName}</h4></div>
                                <div className="col-md-8 text-right"><button className="remove-item-btn" type="button" onClick={() => delCart({ productId })}>Remove</button></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-8">
                            <p>
                                <label htmlFor="size">Size:</label><br />
                                <span>
                                    <input type="text" value="" placeholder="N/A" id="size" name="size" disabled />
                                </span>
                            </p>
                        </div>
                        <div className="col-lg-12 col-md-8">
                            <p>
                                <label htmlFor="size">Quantity<span>*</span></label><br />
                                <span>
                                    <input type="text" placeholder={units} id="size" name="size" disabled/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartData;
