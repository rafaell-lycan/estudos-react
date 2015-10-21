module.exports = (function () {
  'use strict';

  var GLOBAL_KEY = process.env.LOCALSTORAGE_KEY || '';

  var IS_SUPPORTED = !!window.localStorage;

  function concatKey (key) {
    return GLOBAL_KEY + ':' + key;
  }

  function set(key, value) {
    if(!IS_SUPPORTED || !key || !value) return;

    return localStorage.setItem(concatKey(key), JSON.stringify(value) ) === undefined;
  }

  function get(key) {
    if(!IS_SUPPORTED || !key) return;

    return JSON.parse(localStorage.getItem(concatKey(key)));
  }

  function remove(key) {
    if(!IS_SUPPORTED || !key) return;

    return localStorage.removeItem(concatKey(key)) === undefined;
  }

  function clearAll () {
    if(!IS_SUPPORTED) return;

    return localStorage.clear() === undefined;
  }

  function localStorageService () {
    return {
      isSupported : IS_SUPPORTED,
      set : set,
      get: get,
      remove: remove,
      clearAll: clearAll
    };
  }

  return new localStorageService();
})();