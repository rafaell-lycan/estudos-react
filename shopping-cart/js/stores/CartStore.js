'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let CartConstants =  require('../constants/CartConstants');

let _products = [], _cartVisible = false;

function _addItem (product) {
  _products.push(product);
}

function _removeItem (product) {
  return;
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
    return _products.length;
  }

  // Return cart totol cost
  getCartTotal () {
    return 0;
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