import React from "react";
import PlayerStore from "../stores/PlayerStore";
import Utils from "../Utils";

export default React.createClass({

  componentWillMount: function () {
    this._updateCover();
  },

  componentDidMount: function () {
    PlayerStore.addChangeListener(this._onPlayerStoreChange);
  },

  componentWillUnmount: function () {
    PlayerStore.removeChangeListener(this._onPlayerStoreChange);
  },

  _onPlayerStoreChange: function () {
    this._updateCover(PlayerStore.getCurrentTrack().thumbnail);
  },

  _updateCover: function (url) {

    this.setState({
      cover: Utils.formatBgUrl(url || this.props.currentTrack.thumbnail)
    });
  },

  render: function  () {
    return (
      <div className="bg-art" style={{backgroundImage: this.state.cover}}></div>
      )
  }
})
