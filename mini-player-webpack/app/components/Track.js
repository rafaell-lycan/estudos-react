import React from "react";

export default React.createClass({
  render: function () {
    return(
      <li className="song-item" onClick={this.props.play.bind(null, this.props)}>
        <span className="index">{this.props.index}</span>
        <span className="title">{this.props.trackInfo.title}</span>
        <div className="span time">{this.props.trackInfo.duration}</div>
      </li>
      )
  }
})
