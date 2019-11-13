import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../../assets/logo.png';
import Product from './productList';

export default class Catalog extends Component {
    state = {
        products: []
    }    
    componentDidMount(){
        axios.get(`https://desolate-brushlands-20405.herokuapp.com/api/v1/products`, {}).then(res => {
          console.log("ResData:",res.data);
          const products = res.data;
          this.setState({ products });
        })
    }
    render() {
        return (
            <div id="ibm-content-wrapper">
                <main role="main" aria-labelledby="ibm-pagetitle-h1">
                    <div id="ibm-content-main">
                        <div class="ibm-grid-container" data-items=".ibm-card" data-widget="setsameheight">
                            <div class="ibm-grid-col-sm-4-4 catalog-top ibm-margin-bottom-1">

                                <div class="ibm-grid-container">
                                    <div class="ibm-grid-col-lg-16-2 ibm-grid-col-md-8-4 ibm-grid-col-sm-4-4">
                                        <img src={Logo} class="ibm-resize catalog-top-logo" />
                                    </div>
                                    <div class="ibm-grid-col-lg-16-14 ibm-grid-col-md-8-4 ibm-grid-col-sm-4-4">
                                        <h2 class="ibm-h2">E-commerce test</h2>
                                        <p>The easiest way to shop IBM merchandise items. Simply choose what you want and we'll work with vendors to have your order delivered as soon as possible.</p>
                                    </div>
                                </div>

                            </div>

                            <div class="ibm-grid-container catalog-container" data-items=".ibm-card" data-widget="setsameheight">
                                <div class="ibm-grid-col-sm-4-4"><h3 class="ibm-h3">Merchandise products available for quotation</h3></div>
                                {
                                    this.state.products.map(p => <Product key={p.productId} {...p} addCart={this.props.addCartfunc} />)
                                }
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
