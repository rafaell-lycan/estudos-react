'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let CartConstants = require('../constants/CartConstants');

let CartActionsActions = {

  // Load initial products
  loadProducts: function (data) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.LOAD_PRODUCTS,
      data: data
    })
  },

  // Add item to cart
  addToCart: function (productId) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_ADD,
      product: productId
    })
  },

  // Remove item from cart
  removeFromCart: function (productId) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_REMOVE,
      product: productId
    })
  },

  toggleCaartVisible: function (isVisible) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_VISIBLE,
      isVisible: isVisible
    })
  }

}

module.exports = CartActionsActions;