import React from "react";

export default React.createClass({
  getDefaultProps:function () {
    return {
      stream : {
        link: "https://developers.soundcloud.com/",
        title: "Powered by SoundCloud API"
      }
    }
  },

  render: function () {
    return (
      <div className="controls">
        <div className="track-info">{this.props.title}</div>
        <i className="fa fa-fast-backward control"></i>
        <i className={this.props.playerBtn + " fa control"} onClick={this.props.onClickPlay}></i>
        <i className="fa fa-fast-forward control"></i>
      </div>
      )
  }
})
