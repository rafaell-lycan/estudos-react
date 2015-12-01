'use strict';

let React = require('react');
let CartActions = require('../actions/CartActions');

let Cart = React.createClass({
  render: function () {
    return (
      <div className="row cart-component">
        <div className="text-center">
          <button className="btn btn-lg btn-danger">Show Cart (0)</button>
        </div>

        <div className="cart-container">

          <a href="#" className="glyphicon glyphicon-remove close-btn"></a>

          <ul>
          <li>
            <p className="beer-name">Beer Name</p>
            <p>0 x $ 9.99</p>
            <button className="btn btn-danger btn-block">Remove</button>
          </li>
          <li>
            <p className="beer-name">Beer Name</p>
            <p>0 x $ 9.99</p>
            <button className="btn btn-danger btn-block">Remove</button>
          </li>
          <li>
            <p className="beer-name">Beer Name</p>
            <p>0 x $ 9.99</p>
            <button className="btn btn-danger btn-block">Remove</button>
          </li>
          </ul>

          <div className="total">Total: 0</div>
        </div>
      </div>
    );
  }
});

module.exports = Cart;
