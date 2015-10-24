import React from "react";
import Player from "./Player";
import CoverArt from "./CoverArt";

export default React.createClass({
  getInitialState: function () {
    return {
      style: {
        backgroundImage : this.formatBgImg('http://www.helenabordon.com/wp-content/uploads/2013/06/tumblr_mizfw6c0FI1qe4751o1_1362142518_cover.jpg')
      }
    }
  },

  formatBgImg: function (url) {
    return 'url(' + url + ')';
  },

  loadBg: function (url) {
    console.log("->", url);
  },

  render: function() {
    return (
      <div className="main">
        <Player updateBg={this.loadBg} bgImg={this.state.style}/>
        <CoverArt bgImg={this.state.style}/>
      </div>
    );
  },
});
