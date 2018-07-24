import React, { Component } from 'react';

import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarContent from './SidebarContent/SidebarContent';

import './Sidebar.css';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: { id: 1 },
      isOpen: true
    }
  }


  handleCloseEvent = () => {
    console.log('handleCloseEvent');
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { pokemon, isOpen } = this.state;

    const sidebarClass = `sidebar ${ !!isOpen ? 'sidebar--opened' : ''}`;
    return (
      <div className={sidebarClass}>
        <div className={'sidebar__overlay'} onClick={this.handleCloseEvent}/>
        <aside className={'sidebar__wrap'}>
          <SidebarHeader data={pokemon} onClick={this.handleCloseEvent} />
          <SidebarContent />
        </aside>
      </div>
    );
  }
}