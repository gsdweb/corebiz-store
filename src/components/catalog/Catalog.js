import React, { Component } from "react";
import axios from "axios";
import Logo from "../../assets/logo.png";
import Product from "./productList";

export default class Catalog extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    axios
      .get(`https://desolate-brushlands-20405.herokuapp.com/api/v1/products`, {})
      .then(res => {
        console.log("ResData:", res.data);
        const products = res.data;
        this.setState({ products });
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-4 catalog-top mb-1">
          <div className="row">
            <div className="col-lg-12 col-md-8 col-sm-4">
              <img src={Logo} className="img-fluid catalog-top-logo" />
            </div>
            <div className="col-lg-12 col-md-8 col-sm-4">
              <h2>E-commerce test</h2>
              <p>
                The easiest way to shop IBM merchandise items. Simply choose
                what you want and we'll work with vendors to have your order
                delivered as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="row catalog-container">
          <div className="col-sm-4">
            <h3>Merchandise products available for quotation</h3>
          </div>
          {this.state.products.map(p => (
            <Product
              key={p.productId}
              {...p}
              addCart={this.props.addCartfunc}
            />
          ))}
        </div>
      </div>
    );
  }
}
