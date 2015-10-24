import React from "react";
import TrackList from "./TrackList";
import PlayerCover from "./PlayerCover";
import PlayerService from "../services/PlayerService";

export default React.createClass({
  getInitialState: function () {
    return {
      playlist: require("!json!../playlist.json"),
      player: new PlayerService(),
      currentTrack: 0
    }
  },

  componentDidMount: function () {
    this.state.player.setPlayList(this.state.playlist);
  },

  play: function (track) {
    if(!track) return this.state.player.play();
    console.log("->", track);

    this.state.player.loadTrack(track.trackInfo.trackId);
    this.state.player.play();

    this.props.updateBg(track.trackInfo.thumbnail);

    this.setState({
      currentTrack: track.index - 1
    });
  },

  next: function () {

  },

  prev: function () {

  },

  getTrackName: function () {
    return this.state.playlist[this.state.currentTrack].title;
  },

  render: function () {
    return (
      <div className="player">
        <div className="player-container">
          <TrackList trackList={this.state.playlist} play={this.play} />
          <PlayerCover
          bgImg={this.props.bgImg}
          trackInfo={this.getTrackName}
          actions={{
            play: this.play,
            next: this.next,
            prev: this.prev,
          }}
          />
        </div>
      </div>
      )
  }
})
