import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const CartData = ({ productId, productName, imageUrl, price, units, delCart }) => {
    return (
        <div class="ibm-grid-col-sm-4-4 cart-item ibm-padding-bottom-1 ibm-margin-top-1 ibm-margin-bottom-2" id={productId}>
            <div class="ibm-grid-container">
                <div class="ibm-grid-col-lg-16-4 ibm-grid-col-sm-4-4"><img src={imageUrl} alt="IBM" width="100%" class="ibm-resize ibm-margin-bottom-1" title="IBM" /></div>
                <div class="ibm-grid-col-lg-16-12 ibm-grid-col-sm-4-4">
                    <div class="ibm-grid-container">

                        <div class="ibm-grid-col-sm-4-4">
                            <div class="ibm-grid-container">
                                <div class="ibm-grid-col-md-8-6"><h4 class="ibm-h4">{productName}</h4></div>
                                <div class="ibm-grid-col-md-8-2 ibm-right"><button class="remove-item-btn" type="button" onClick={() => delCart({ productId })}>Remove</button></div>
                            </div>
                        </div>

                        <div class="ibm-grid-col-lg-16-5 ibm-grid-col-md-8-8">
                            <p>
                                <label for="size">Size:</label><br />
                                <span>
                                    <input type="text" class="ibm-styled-input" value="" placeholder="N/A" id="size" name="size" disabled />
                                </span>
                            </p>
                        </div>
                        <div class="ibm-grid-col-lg-16-3 ibm-grid-col-md-8-8">
                            <p>
                                <label for="size">Quantity<span class="ibm-required">*</span></label><br />
                                <span>
                                    <input type="text" class="ibm-styled-input" placeholder={units} id="size" name="size" disabled/>
                                </span>
                            </p>
                        </div>
                        <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-8">

                            <p>
                                <label for="date-input">
                                    Select date<span class="ibm-required">* </span>
                                    <span class="ibm-icon-nolink"><a class="ibm-information-link" href="#" onclick="alert('Some custom popup or tooltip goes here.');return false;" title="Information link"></a></span>
                                </label>
                                <span>
                                    <input type="date" name="date" placeholder="Date" class="ibm-styled-input" />
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
