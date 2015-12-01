'use strict';

let React = require('react');
let Product = React.createClass({

  // Render product view
  render: function () {
    return (
      <div className='col-md-3'>
        <h4 className='text-center'>{this.props.product.name}</h4>
        <img src={this.props.product.image} alt={this.props.product.name} className='img-responsive img-thumbnail' />
        <p><b>Price:</b> {this.props.product.price} </p>
        <p><b>Quantity:</b> {this.props.product.inventory} </p>

        <button className='btn btn-lg btn-block btn-danger' onClick={this.props.addProduct.bind(null, this.props.product)}>Add to Cart</button>
      </div>
    );
  }
});

module.exports = Product;
