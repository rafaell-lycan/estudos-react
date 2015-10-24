import React from "react";

export default React.createClass({
  componentDidMount: function () {
    console.log("->", this.props);
  },

  render: function () {
    return(
      <li className="song-item">
        <span className="index">{this.props.key}</span>
        <span className="title">{this.props.trackInfo.title}</span>
        <div className="span time">{this.props.trackInfo.duration}</div>
      </li>
      )
  }
})
