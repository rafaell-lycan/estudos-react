import React from "react";
import PlayerActions from "../actions/PlayerActions";
import PlayerStore from "../stores/PlayerStore";

export default React.createClass({
  getDefaultProps:function () {
    return {
      stream : {
        link: "https://developers.soundcloud.com/",
        title: "Powered by SoundCloud API"
      }
    }
  },

  componentWillMount: function () {
    this._updateInfo();
  },

  componentDidMount: function () {
    PlayerStore.addChangeListener(this._updateInfo);
  },

  componentWillUnmount: function () {
    PlayerStore.removeChangeListener(this._updateInfo);
  },

  _updateInfo: function () {
    this.setState({
      title: PlayerStore.getCurrentTrack().title,
      playClass: (PlayerStore.getStatus()) ? "fa fa-pause control" : "fa fa-play control"
    });
  },

  play: function () {
    PlayerActions.play();
  },

  prev: function () {
    PlayerActions.prev();
  },

  next: function () {
    PlayerActions.next();
  },

  render: function () {
    return (
      <div className="controls">
        <div className="track-info">{this.state.title}</div>
        <i className="fa fa-fast-backward control" onClick={this.prev}></i>
        <i className={this.state.playClass} onClick={this.play}></i>
        <i className="fa fa-fast-forward control" onClick={this.next}></i>
      </div>
      )
  }
})
