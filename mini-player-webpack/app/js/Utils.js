let Utils = {
  formatBgUrl: (url) => `url(${url})`,
  formatTimeDuration: (duration) => {
    if (typeof duration === 'string') return duration

    let time = (duration / 1000 / 60)
    return time.toFixed(2).replace('.', ':')
  }
}

export default Utils
