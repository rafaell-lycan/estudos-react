const IS_SUPPORTED = !!window.localStorage;

const GLOBAL_KEY = process.env.LOCALSTORAGE_KEY || '';

function concatKey (key) {
  return `${GLOBAL_KEY}:${key}`;
}

export default class LocalStorageService{
  constructor(){
    this.isSupported = IS_SUPPORTED
  }

  set(key, value) {
    if(!IS_SUPPORTED || !key || !value) return;

    return localStorage.setItem(concatKey(key), JSON.stringify(value) ) === undefined;
  }

  get(key) {
    if(!IS_SUPPORTED || !key) return;

    return JSON.parse(localStorage.getItem(concatKey(key)));
  }

  remove(key) {
    if(!IS_SUPPORTED || !key) return;

    return localStorage.removeItem(concatKey(key)) === undefined;
  }

  clearAll () {
    if(!IS_SUPPORTED) return;

    return localStorage.clear() === undefined;
  }
}
