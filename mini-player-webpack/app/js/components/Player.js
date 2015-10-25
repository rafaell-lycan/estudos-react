import React from 'react'
import TrackList from './TrackList'
import PlayerCover from './PlayerCover'

export default React.createClass({
  propTypes: {
    currentTrack: React.PropTypes.object
  },

  render: function () {
    return (
      <div className='player'>
        <div className='player-container'>
          <TrackList/>
          <PlayerCover
          currentTrack={this.props.currentTrack}
          />
        </div>
      </div>
      )
  }
})
