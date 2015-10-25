import PlayerDispatcher from "../dispatcher/PlayerDispatcher";
import PlayerConstants from "../constants/PlayerConstants";
import { EventEmitter } from "events";
import PlayerService from "../services/PlayerService";
import KeyboardService from "../services/KeyboardService";
import LocalStorageService from "../services/LocalStorageService";

let _playlist = [], _currentTrack, _Player = new PlayerService(), _LocalStorage = new LocalStorageService();

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

function _updateCurrentTrack (index) {
  if(index === _currentTrack) return _play();
  _currentTrack = index;
  _LocalStorage.set('currentTrack', _currentTrack);
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
    return _updateCurrentTrack( (!_currentTrack) ? len : _currentTrack -1 );
  }

  if(option === 'next') {
    return _updateCurrentTrack( (_currentTrack === len) ? 0 : _currentTrack +1 );
  }
}

class PlayerStoreFactory extends EventEmitter{

  constructor() {
    super();
    _currentTrack = _LocalStorage.get('currentTrack') || 0;
    _loadPlayList(require("!json!../../playlist.json"));
    this.init();
  }

  init(){
    _loadTrak();
    this._onComplete();
    this._onKeyBoardEvents();
  }

  _onComplete() {
    _Player.onComplete( () => {
      _changeTrack('next');
      this.emitChange();
    });
  }

  _onKeyBoardEvents(){
    let keyboardService = new KeyboardService();
    keyboardService.addTrigger(32, () => {
      _play();
      this.emitChange();
    });
    keyboardService.addTrigger(39, () => {
      _changeTrack('next');
      this.emitChange()
    }, true);
    keyboardService.addTrigger(37, () => {
      _changeTrack('prev');
      this.emitChange()
    }, true);
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
      _updateCurrentTrack(payload.action.index);
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
