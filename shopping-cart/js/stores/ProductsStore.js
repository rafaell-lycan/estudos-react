'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let CartConstants = require('../constants/CartConstants');

// Initial data points
let _products = [];

// Will load products from some API
function loadProducts (data) {
  _products = data;
}

class ProductStoreFactory extends EventEmitter{

  // Return Product list
  getProducts () {
    return _products;
  }

  // Emit Change event
  emitChange () {
    this.emit('change');
  }

  // Add change listener
  addChangeListener (callback) {
    this.on('change', callback);
  }

  // Remove change listener
  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }

}

let ProductStore = new ProductStoreFactory();

AppDispatcher.register(function (payload) {
  let action = payload.action;

  switch (action.actionType) {
    case CartConstants.LOAD_PRODUCTS:
      loadProducts(action.data);
      break;
    default:
      return;
  }

  ProductStore.emitChange();
});

module.exports = ProductStore;
