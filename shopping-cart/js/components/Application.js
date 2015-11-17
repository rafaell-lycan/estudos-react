'use strict';

let React = require('react');
var ProductsStore = require('../stores/ProductsStore');
var CartStore = require('../stores/CartStore');
var ProductsComponent = require('./Products');
var CartComponent = require('./Cart');

function getApplicationState () {
  return {
    products: ProductsStore.getProducts(),
    cart: {
      items: CartStore.getCartItems(),
      amount: CartStore.getCartAmount(),
      total: CartStore.getCartTotal(),
      isVisible: CartStore.getCartVisible()
    }
  };
}

// Create main View Controller
let Application = React.createClass({

  // Set initial state from Stores
  getInitialState: function () {
    return getApplicationState();
  },

  // Add change listener to store
  componentDidMount: function () {
    ProductsStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },

  // Remove change listener from store
  componentWillUnmount: function () {
    ProductsStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },

  // Update state when store change
  _onChange: function () {
    this.setState(getApplicationState());
  },

  // Render the main component and childs, passing state via props
  render: function () {
    return (<div className="container">
        <h1>Shopping Cart Application</h1>
        <ProductsComponent products={this.state.products} />
        <CartComponent cart={this.state.cart} />
      </div>
    );
  }
});

module.exports = Application;