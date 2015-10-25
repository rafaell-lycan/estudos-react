const IS_SUPPORTED = !!window.localStorage

const GLOBAL_KEY = process.env.LOCALSTORAGE_KEY || ''

function concatKey (key) {
  return `${GLOBAL_KEY}:${key}`
}

export default class LocalStorageService {
  constructor () {
    this.isSupported = IS_SUPPORTED
  }

  set (key, value) {
    if (!IS_SUPPORTED || !key || !value) return

    return window.localStorage.setItem(concatKey(key), JSON.stringify(value)) === undefined
  }

  get (key) {
    if (!IS_SUPPORTED || !key) return

    return JSON.parse(window.localStorage.getItem(concatKey(key)))
  }

  remove (key) {
    if (!IS_SUPPORTED || !key) return

    return window.localStorage.removeItem(concatKey(key)) === undefined
  }

  clearAll () {
    if (!IS_SUPPORTED) return

    return window.localStorage.clear() === undefined
  }
}
