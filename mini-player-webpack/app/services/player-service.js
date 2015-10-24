const API_URL = 'https://api.soundcloud.com/tracks/',
      TOKEN = '10b1e7bf6b21e1a2a2971196b918833a';

let _player = document.createElement('audio');

export default class PlayerService{
  constructor()  {
    this.playlist = [];
  }

  getPlayList() {
    return this.playlist;
  }

  setPlayList(playlist = []) {
    this.playlist = playlist;
  }

  loadTrack(song) {
    if(!song) return;
    _player.src = API_URL + song + '/stream?client_id=' + TOKEN;
  }

  play(){
    if(_player.paused){
      return _player.play();
    }

    return _player.pause();
  }
}
