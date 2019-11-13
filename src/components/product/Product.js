import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';
import DetailProduct from '../product/DetailProduct';


export default class OpenProduct extends Component {
    state = {
        product: []
    }    
    componentDidMount(){
        const idUrl = window.location.pathname.split('/');
        axios.get(`https://desolate-brushlands-20405.herokuapp.com/api/v1/product/${idUrl[1]}`, {}).then(res => {
          console.log("ResDataProduct:",res.data);
          const product = res.data;
          this.setState({ product });
        })
    }
    render() {
        const idUrl = window.location.pathname.split('/');
        return (
            
            <div id="row">
                {
                    this.state.product.map(p => <DetailProduct key={p.productId} {...p} addCart={this.props.addCartfunc} />)
                }
            </div>
        )
    }
}
