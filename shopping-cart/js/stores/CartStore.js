'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let CartConstants =  require('../constants/CartConstants');

let _products = {}, _cartVisible = false;

function ProductCartModel(product) {
  this.id = product.id;
  this.name = product.name;
  this.price = product.price;
  this.sku = product.sku;
  this.amount = 1;
}

function _addItem (product) {
  if(!_products[product.id]) {
    return _products[product.id] = new ProductCartModel(product);
  }

  _products[product.id].amount += 1;
}

function _removeItem (product) {
  delete _products[product.id];
}

function _setVisibility (visibility) {
  _cartVisible = visibility;
}

class CartStoreFactory extends EventEmitter{

  // Return cart items
  getCartItems () {
    return _products;
  }

  // Retrurn amount of items in cart
  getCartAmount () {
    return Object.keys(_products).length;
  }

  // Return cart total cost
  getCartTotal () {
    let total = 0;

    for (let prod in _products) {
      total += _products[prod].price * _products[prod].amount;
    }

    return parseFloat(total.toFixed(2));
  }

  // Return cart visibility state
  getCartVisible () {
    return _cartVisible;
  }

  // Emit Change event
  emitChange () {
    this.emit('change');
  }

  // Add change listener
  addChangeListener (callback) {
    this.on('change', callback)
  }

  // Remove change listener
  removeChangeListener (callback) {
    this.removeListener('change', callback)
  }
}

let CartStore = new CartStoreFactory();

AppDispatcher.register(function (payload) {
  let action = payload.action;

  switch(action.actionType) {
    case CartConstants.CART_ADD:
      _addItem(action.product)
      break;
    case CartConstants.CART_REMOVE:
      _removeItem(action.product)
      break;
    case CartConstants.CART_VISIBLE:
      _setVisibility(action.isVisible)
      break;
    default:
      return;
  }

  CartStore.emitChange();
});

module.exports = CartStore;
