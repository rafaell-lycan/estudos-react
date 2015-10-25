import PlayerDispatcher from "../dispatcher/PlayerDispatcher";
import PlayerConstants from "../constants/PlayerConstants";
import { EventEmitter } from "events";
import PlayerService from "../services/PlayerService";

let _playlist = [], _currentTrack = 0, _Player = new PlayerService();

function _loadPlayList (playlist) {
  _playlist = playlist;
}

function _loadTrak(playAfter) {
  _Player.loadTrack(_getTrack());

  if(playAfter) {
    _play();
  }
}

function _getTrack () {
  return _playlist[_currentTrack];
}

function _updateCurrentTrack (index, track) {
  if(index === _currentTrack) return _play();
  _currentTrack = index;
  _loadTrak(true);
}

function _play () {
  if(!_Player.hasTrack()) return;
  return _Player.play();
}

function _changeTrack (option) {
  if(!option) return;

  let len = _playlist.length - 1;

  if(option === 'prev') {
    _currentTrack = (!_currentTrack) ? len : _currentTrack -1;
    return _loadTrak(true);
  }

  if(option === 'next') {
    _currentTrack = (_currentTrack === len) ? 0 : _currentTrack +1;
    return _loadTrak(true);
  }
}

class PlayerStoreFactory extends EventEmitter{

  constructor() {
    super();
    _loadPlayList(require("!json!../../playlist.json"));
    _loadTrak();
    _Player.onComplete( () => {
      _changeTrack('next');
      this.emitChange();
    });
  }

  getPlayList () {
    return _playlist;
  }

  getCurrentTrack () {
    return _getTrack();
  }

  getStatus() {
    return _Player.isPlaying();
  }

  emitChange () {
    this.emit('change');
  }

  addChangeListener (callback) {
    this.on('change', callback)
  }

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }
};
const PlayerStore = new PlayerStoreFactory();
export default PlayerStore;

PlayerDispatcher.register(function (payload) {

  switch(payload.action.actionType) {
    case PlayerConstants.LOAD_PLAYLIST:
      _loadPlayList(payload.action.data);
      break;
    case PlayerConstants.CHANGE_TRACK:
      _updateCurrentTrack(payload.action.index, payload.action.track);
      PlayerStore.emitChange();
      break;
    case PlayerConstants.PLAY_MUSIC:
      _play();
      PlayerStore.emitChange();
      break;
    case PlayerConstants.NEXT_TRACK:
      _changeTrack('next');
      PlayerStore.emitChange();
      break;
    case PlayerConstants.PREV_TRACK:
      _changeTrack('prev');
      PlayerStore.emitChange();
      break;
  }
});
