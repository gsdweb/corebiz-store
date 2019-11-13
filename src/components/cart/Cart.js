import React, { Component } from 'react';
import CartData from '../cart/CartData';
import './Cart.css';
import { Link } from 'react-router-dom';

export default class Cart extends Component {

    render() {
        console.log("CartData:",this.props.cartData)
        return (
            <div id="ibm-content-wrapper">
                <main role="main" aria-labelledby="ibm-pagetitle-h1">
                    <div id="ibm-content-main">
                        <div class="ibm-grid-container">
                            <div class="ibm-grid-col-sm-4-4">
                                <Link to="/">
                                    <p class="ibm-icon-nolink ibm-back-link"><span>Back</span></p>
                                </Link>
                            </div>
                            <div class="ibm-grid-col-sm-4-4">
                                <h3 class="ibm-h3">Shopping Cart</h3>
                                <h5 class="ibm-h5">{this.props.cartData.length} items</h5>
                            </div>
                            <div class="ibm-grid-col-lg-16-12 ibm-grid-col-md-8-4">
                                {
                                    this.props.cartData.map(cm => (cm.productId == undefined) ? "Sem itens na sua lista ainda." : <CartData key={cm.productId} {...cm} addCart={this.props.addCartfunc} delCart={this.props.delCartfunc} />)
                                }
                            </div>

                            <div class="ibm-grid-col-lg-16-4 ibm-grid-col-md-8-4">
                                <div class="ibm-card card-cart">
                                    <div class="ibm-card__content">
                                        <h3 class="ibm-h3 ibm-margin-bottom-1">Subtotal: {this.props.cartData.length} items</h3>
                                        <button class="ibm-btn-pri" type="button">Place Order</button>
                                        <Link to="/"><button class="ibm-btn-sec ibm-margin-bottom-1" type="button">Continue Shopping</button></Link>
                                        <p>By placing your order, you agree to <a href="#">the IBM purchase policies</a> and <a href="#">IBM's personal information policies</a>.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
