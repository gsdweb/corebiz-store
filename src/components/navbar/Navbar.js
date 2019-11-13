import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav class="col-12">
                    <div class="row pt-1 pb-1 mb-2">
                        <div class="col-sm-4 logo"><Link to="/">E-Commerce test</Link></div>
                        <div class="col-sm-4 text-right cart"><Link to="/cart"><i class="fas fa-shopping-cart"></i>Cart <span className="cart-number-circle">{this.props.cartData.length}</span></Link></div>
                    </div>
                </nav>
            </header>
        );
    }
}
