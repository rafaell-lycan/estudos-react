import React from "react";

export default React.createClass({
  render: function () {
    return(
      <li className={`song-item ${this.props.track.active}`} onClick={this.props.play.bind(null, this.props)}>
        <i className="fa fa-volume-up sound"></i>
        <span className="index">{this.props.index}</span>
        <span className="title">{this.props.track.title}</span>
        <div className="span time">{this.props.track.duration}</div>
      </li>
      )
  }
})
