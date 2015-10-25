const API_URL = 'https://api.soundcloud.com/tracks/'
const TOKEN = '10b1e7bf6b21e1a2a2971196b918833a'

let _player = document.createElement('audio')

export default class PlayerService {
  constructor () {
    this.trackId
  }

  loadTrack (track) {
    if (!track.trackId) return

    this.trackId = track.trackId

    _player.src = `${API_URL}${track.trackId}/stream?client_id=${TOKEN}`
  }

  hasTrack () {
    return !!this.trackId
  }

  isPlaying () {
    return !_player.paused
  }

  onComplete (callback) {
    return _player.addEventListener('ended', callback)
  }

  play () {
    if (_player.paused) {
      return _player.play()
    }

    return _player.pause()
  }
}
