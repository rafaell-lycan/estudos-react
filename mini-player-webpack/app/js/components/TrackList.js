import React from 'react'
import Track from './Track'
import Utils from '../Utils'
import PlayerActions from '../actions/PlayerActions'
import PlayerStore from '../stores/PlayerStore'

export default React.createClass({

  componentWillMount: function () {
    this._renderTrackList()
  },

  componentDidMount: function () {
    PlayerStore.addChangeListener(this._renderTrackList)
  },

  componentWillUnmount: function () {
    PlayerStore.removeChangeListener(this._renderTrackList)
  },

  _renderTrackList: function () {
    this.setState({
      currentTrack: PlayerStore.getCurrentTrack().trackId,
      playlist: PlayerStore.getPlayList()
    })
  },

  renderTrackList: function () {
    return this.state.playlist.map((info, index) => {
      info.active = (info.trackId === this.state.currentTrack) ? this.getActiveClass() : ''
      info.duration = Utils.formatTimeDuration(info.duration)
      return <Track key={index} index={index + 1} track={info} play={this._playTrack} />
    })
  },

  getActiveClass: function () {
    let Activeclass = 'is-active'
    if (PlayerStore.getStatus()) Activeclass += ' is-playing'
    return Activeclass
  },

  _playTrack: function (data) {
    PlayerActions.changeTrack((data.index - 1))
  },

  render: function () {
    return (
      <div className='player-list'>
        <ul className='song-list'>
          {this.renderTrackList()}
        </ul>
      </div>
      )
  }
})
