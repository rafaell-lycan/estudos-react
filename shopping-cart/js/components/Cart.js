'use strict';

let React = require('react');
let CartActions = require('../actions/CartActions');

let Cart = React.createClass({

  toggleCaartDisplay: function (e) {
    e.preventDefault();
    CartActions.toggleCaartVisible(!this.props.cart.isVisible);
  },

  removeProduct: function (productId) {
    CartActions.removeFromCart(productId);
  },

  renderProductsList: function () {
    let products = this.props.cart.items;

    return Object.keys(products).map(product => {
      return (
        <li key={products[product].id}>
          <p className="beer-name">{products[product].name}</p>
          <p>{products[product].amount} x $ {products[product].price}</p>
          <button className="btn btn-danger btn-block" onClick={this.removeProduct.bind(null, products[product])}>Remove</button>
        </li>
      )
    });
  },

  render: function () {
    return (
      <div className="row cart-component">
        <div className="text-center">
          <a href="#" className="btn btn-lg btn-danger" onClick={this.toggleCaartDisplay}>Show Cart ({this.props.cart.amount})</a>
        </div>

        <div className={this.props.cart.isVisible? 'cart-container' : 'cart-container hidden'}>

          <a href="#" className="glyphicon glyphicon-remove close-btn" onClick={this.toggleCaartDisplay}></a>

          <ul>
            {this.renderProductsList()}
          </ul>

          <div className="total">Total: {this.props.cart.total}</div>
        </div>
      </div>
    );
  }
});

module.exports = Cart;
