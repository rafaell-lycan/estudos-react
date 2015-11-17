'use strict';

let React = require('react');
let CartActions = require('../actions/CartActions');

let Cart = React.createClass({
  render: function () {
    return (
      <div className="row cart-component">
        <h2>Cart</h2>
      </div>
    );
  }
});

module.exports = Cart;