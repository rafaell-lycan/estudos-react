'use strict';

let React = require('react');
let CartActions = require('../actions/CartActions');
let ProductsMock = require('../utils/Products');
let Product = require('./Product');

let Products = React.createClass({

  // Request products from somewhere
  _loadProducts: function () {
    setTimeout(CartActions.loadProducts.bind(null, ProductsMock.load()));
  },

  // Load products when the component render
  componentDidMount: function () {
    this._loadProducts();
  },

  // Parse our product list in Product component
  renderProducts : function () {
    return this.props.products.map( (product, i) => {
      return <Product key={product.id} product={product} addProduct={this.addProduct} />
    });
  },

  // Add Product action
  addProduct: function (product) {
    CartActions.addToCart(product);
  },

  // Render product view
  render: function () {
    return (
      <div className="row">
        {this.renderProducts()}
      </div>
    );
  }
});

module.exports = Products;
