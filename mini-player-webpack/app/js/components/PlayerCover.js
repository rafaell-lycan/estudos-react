import React from 'react'
import Controls from './PlayerControls'
import PlayerStore from '../stores/PlayerStore'
import Utils from '../Utils'

export default React.createClass({
  propTypes: {
    currentTrack: React.PropTypes.object,
    stream: React.PropTypes.object
  },

  getDefaultProps: function () {
    return {
      stream: {
        link: 'https://developers.soundcloud.com/',
        title: 'Powered by SoundCloud API'
      }
    }
  },

  componentWillMount: function () {
    this._updateInfo()
  },

  componentDidMount: function () {
    PlayerStore.addChangeListener(this._onPlayerStoreChange)
  },

  componentWillUnmount: function () {
    PlayerStore.removeChangeListener(this._onPlayerStoreChange)
  },

  _onPlayerStoreChange: function () {
    this._updateInfo(PlayerStore.getCurrentTrack().thumbnail)
  },

  _updateInfo: function (url) {
    this.setState({
      menuClass: 'player-art',
      menuOpen: false,
      playerBtn: 'fa-play',
      cover: Utils.formatBgUrl(url || this.props.currentTrack.thumbnail)
    })
  },

  toggleMenu: function () {
    this.setState({
      menuOpen: !this.state.menuOpen,
      menuClass: (!this.state.menuOpen) ? 'player-art is-open' : 'player-art'
    })
  },

  togglePlayButton: function () {
    this.setState({
      playerBtn: (this.state.playerBtn !== 'fa-play') ? 'fa-play' : 'fa-pause'
    })
  },

  render: function () {
    return (
      <div className={this.state.menuClass} style={{backgroundImage: this.state.cover}}>

        <span className='toggle-menu' onClick={this.toggleMenu}></span>
        <a href={this.props.stream.link} className='stream-brand' title={this.props.stream.title} target='_blank'>
            <i className='fa fa-soundcloud'></i>
          </a>
          <Controls playAction={this.togglePlayButton} currentTrack={this.props.currentTrack} playerBtn={this.state.playerBtn} />

      </div>
      )
  }
})
