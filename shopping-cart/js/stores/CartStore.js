'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let CartConstants =  require('../constants/CartConstants');

let _products = {}, cartInfo = {isVisible: false};

function ProductCartModel(product) {
  this.id = product.id;
  this.name = product.name;
  this.price = product.price;
  this.sku = product.sku;
  this.amount = 1;
}

function _addItem (product) {
  if(!_products[product.id]) {
    _products[product.id] = new ProductCartModel(product);
  } else {
    _products[product.id].amount += 1;
  }
  updateCartInfo();
}

function _removeItem (product) {
  delete _products[product.id];
  updateCartInfo();
}

function _setVisibility (visibility) {
  cartInfo.isVisible = visibility;
}

function updateCartInfo() {
  let amount = 0, total = 0;

  for(let prod in _products) {
    amount++;
    total += _products[prod].price * _products[prod].amount;
  }

  cartInfo.amount = amount;
  cartInfo.total = parseFloat(total.toFixed(2));
}

class CartStoreFactory extends EventEmitter{

  constructor() {
    super();
    updateCartInfo();
  }

  // Return cart items
  getCartItems () {
    return _products;
  }

  // Retrurn amount of items in cart
  getCartAmount () {
    return cartInfo.amount;
  }

  // Return cart totol cost
  getCartTotal () {
    return cartInfo.total;
  }

  // Return cart visibility state
  getCartVisible () {
    return cartInfo.isVisible;
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
