import PlayerDispatcher from "../dispatcher/PlayerDispatcher";
import PlayerConstants from "../constants/PlayerConstants";

let PlayerActions = {
  play: () => {
    PlayerDispatcher.handleViewAction({
      actionType: PlayerConstants.PLAY_MUSIC,
      data: null
    });
  },

  next: () => {
    PlayerDispatcher.handleViewAction({
      actionType: PlayerConstants.NEXT_TRACK,
      data: null
    });
  },

  prev: () => {
    PlayerDispatcher.handleViewAction({
      actionType: PlayerConstants.PREV_TRACK,
      data: null
    });
  },

  changeTrack: (index, track) => {
    PlayerDispatcher.handleViewAction({
      actionType: PlayerConstants.CHANGE_TRACK,
      index: index,
      track: track
    });
  },

  loadPlayList: playlist => {
    PlayerDispatcher.handleViewAction({
      actionType: PlayerConstants.LOAD_PLAYLIST,
      data: playlist
    })
  }
};

export default PlayerActions;
