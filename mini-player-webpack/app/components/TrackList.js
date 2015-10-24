import React from "react";
import Track from "./Track";

export default React.createClass({
  parseTrackDuration: function (duration) {
    let time = (duration / 1000 /60);
    return time.toFixed(2).replace('.',':');
  },

  render: function () {
    let tracks = this.props.trackList.map( (info, index) => {
      info.duration = this.parseTrackDuration(info.duration);
      return <Track key={index + 1} trackInfo={info} />
    });

    return (
      <div className="player-list">
        <ul className="song-list">
          {tracks}
        </ul>
      </div>
      )
  }
})
