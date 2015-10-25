import React from 'react'
import Player from './Player'
import CoverArt from './CoverArt'
import PlayerStore from '../stores/PlayerStore'

export default React.createClass({

  componentWillMount: function () {
    this._loadPlayer()
  },

  componentDidMount: function () {
    PlayerStore.addChangeListener(this._onPlayerStoreChange)
  },

  componentWillUnmount: function () {
    PlayerStore.removeChangeListener(this._onPlayerStoreChange)
  },

  _onPlayerStoreChange: function () {
    this._loadPlayer()
  },

  _loadPlayer: function () {
    this.setState({
      playlist: PlayerStore.getPlayList(),
      currentTrack: PlayerStore.getCurrentTrack()
    })
  },

  getCurrentTrack: function () {
    return this.state.currentTrack
  },

  renderPlayer: function () {
    return <Player currentTrack={this.getCurrentTrack()}/>
  },

  renderCoverArt: function () {
    return <CoverArt currentTrack={this.getCurrentTrack()}/>
  },

  render: function () {
    return (
      <div className='main'>
        {this.renderPlayer()}
        {this.renderCoverArt()}
      </div>
    )
  }
})
