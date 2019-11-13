import React, { Component } from "react";
import CartData from "../cart/CartData";
import "./Cart.css";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    console.log("CartData:", this.props.cartData);
    return (
      <div className="row">

        <div className="col-sm-4">
          <Link to="/">
            <p>
              <span>Back</span>
            </p>
          </Link>
        </div>
        <div className="col-sm-4">
          <h3>Shopping Cart</h3>
          <h5>{this.props.cartData.length} items</h5>
        </div>
        <div className="col-lg-12 col-md-8">
          {this.props.cartData.map(cm =>
            cm.productId == undefined ? (
              "Sem itens na sua lista ainda."
            ) : (
              <CartData
                key={cm.productId}
                {...cm}
                addCart={this.props.addCartfunc}
                delCart={this.props.delCartfunc}
              />
            )
          )}
        </div>

        <div className="col-lg-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="mb-1">
                Subtotal: {this.props.cartData.length} items
              </h3>
              <button className="btn btn-danger" type="button">
                Place Order
              </button>
              <Link to="/">
                <button className="btn btn-secondary mb-1" type="button">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
