const API_URL = 'https://api.soundcloud.com/tracks/',
      TOKEN = '10b1e7bf6b21e1a2a2971196b918833a';

let _player = document.createElement('audio');

export default class PlayerService{
  constructor()  {
    this.playlist = [];
    this.trackId;
  }

  getPlayList() {
    return this.playlist;
  }

  setPlayList(playlist = []) {
    this.playlist = playlist;
    this.loadTrack(playlist[0].trackId, 0);
  }

  loadTrack(trackId) {
    if(!trackId) return;

    this.trackId = trackId;

    _player.src = API_URL + trackId + '/stream?client_id=' + TOKEN;
  }

  hasTrack() {
    return !!this.trackId;
  }

  play(){
    if(_player.paused){
      return _player.play();
    }

    return _player.pause();
  }
}
