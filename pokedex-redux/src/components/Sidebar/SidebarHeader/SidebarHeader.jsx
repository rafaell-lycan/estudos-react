import React, { Component } from 'react';

import './SidebarHeader.css';
import Pill from '../../Pill/Pill';
import PillsCollection from '../../PillsCollection/PillsCollection';
export default class SidebarHeader extends Component {

  closeSidebar = () => {
    const { onClick } = this.props;
    console.log('closeSidebar');

    if (onClick) onClick();
  }
  render() {


    return (
      <header className={'sidebar-header'}>
        <figure className={'sidebar-header__img'}>
          <img
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
            alt={'Bulbasaur'}
          />
        </figure>
        <div className={'sidebar-header__meta'}>
          <span className={'sidebar-header__number'}>#001</span>
          <h2 className={'sidebar-header__name'}>Bulbasaur</h2>
          <PillsCollection collection={['grass', 'poison']} />
        </div>
        <span
          className={'sidebar-header__close'}
          onClick={this.closeSidebar}
        />
      </header>
    );
  }
}