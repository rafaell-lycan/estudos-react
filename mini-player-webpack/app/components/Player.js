import React from "react";
import TrackList from "./TrackList";
import PlayerCover from "./PlayerCover";

export default React.createClass({
  getInitialState: function () {
    return {
      playlist: require("!json!../playlist.json")
    }
  },

  render: function () {
    return (
      <div className="player">
        <div className="player-container">
          <TrackList trackList={this.state.playlist} />
          <PlayerCover bgImg={this.props.bgImg} />
        </div>
      </div>
      )
  }
})
