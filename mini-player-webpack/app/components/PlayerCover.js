import React from "react";
import Controls from "./PlayerControls";
import PlayerService from "../services/player-service";

export default React.createClass({
  getDefaultProps:function () {
    return {
      stream : {
        link: "https://developers.soundcloud.com/",
        title: "Powered by SoundCloud API"
      }
    }
  },

  getInitialState: function () {
    return {
      menu : "",
      player: new PlayerService(),
      playerBtn: "fa-play"
    }
  },

  toggleMenu: function () {
    this.setState({
      menu: (!this.state.menu) ? "is-open" : ""
    })
  },

  togglePlayButton: function () {
    this.setState({
      playerBtn: (this.state.playerBtn !== "fa-play") ? "fa-play" : "fa-pause"
    });
  },

  componentDidMount: function () {
    this.state.player.setPlayList(require("!json!../playlist.json"));
  },

  render: function () {
    return (
      <div className={"player-art " + this.state.menu} style={this.props.bgImg}>
        <span className="toggle-menu" onClick={this.toggleMenu}></span>
        <a href={this.props.stream.link} className="stream-brand" title={this.props.stream.title} target="_blank">
            <i className="fa fa-soundcloud"></i>
          </a>
          <Controls onClickPlay={this.togglePlayButton} playerBtn={this.state.playerBtn} />
      </div>
      )
  }
})
