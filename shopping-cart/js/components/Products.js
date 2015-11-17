'use strict';

let React = require('react');
let CartActions = require('../actions/CartActions');
let ProductsMock = require('../utils/Products');

let Products = React.createClass({

  // Request products from somewhere
  _loadProducts: function () {
    setTimeout(CartActions.loadProducts.bind(null, ProductsMock.load()));
  },

  // Load products when the component render
  componentDidMount: function () {
    this._loadProducts();
  },

  // Parse our product list in components (ugly way)
  renderProducts : function () {
    return this.props.products.map( (product, i) => {
      return (
        <div key={i} className="col-md-3">
          <h4>{product.name}</h4>
          <img src={product.image} alt={product.name} className="img-responsive img-thumbnail" />
          <p><b>Price:</b> {product.price} </p>
          <p><b>Quantity:</b> {product.inventory} </p>

          <button className="btn btn-lg btn-primary">Add to Cart</button>
        </div>
      )
    });
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