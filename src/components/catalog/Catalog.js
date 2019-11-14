import React, { Component } from "react";
import axios from "axios";
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
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>Merchandise products available for quotation</h3>
          </div>
          <div className="row">
            {this.state.products.map(p => (
              <Product
                key={p.productId}
                {...p}
                addCart={this.props.addCartfunc}
              />
            ))}
          </div>

        </div>
      </div>
    );
  }
}
