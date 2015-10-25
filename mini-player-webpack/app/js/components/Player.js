import React from "react";
import TrackList from "./TrackList";
import PlayerCover from "./PlayerCover";
import PlayerService from "../services/PlayerService";
import PlayerActions from "../actions/PlayerActions";

export default React.createClass({
  render: function () {
    return (
      <div className="player">
        <div className="player-container">
          <TrackList/>
          <PlayerCover
          currentTrack={this.props.currentTrack}
          />
        </div>
      </div>
      )
  }
})
