import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { weatherFetchData } from '../actions/weather';

import './Weather.css';

import { Icon } from './Icon';
import getIcon from '../utils/icons';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    if (this.props.hasError) {
        return <p>Some shit happened here!</p>
    }

    if (this.props.isLoading) {
        return <p>Loading...</p>
    }
      
    return (
      <div className="weather">
        <header className="weather__header">
          <h2 className="weather__title">{this.props.weather.city}</h2>
          <small className="weather__period">{this.props.weather.dayName}</small>
          <div className="weather__search">
            <Link to={{
              pathname: '/search'
            }}>
              <Icon icon="search" alt="search" />
            </Link>
          </div>
        </header>

        <div className="weather__info">
          <Icon icon={this.props.weather.icon} alt={this.props.weather.condition} />
          {this.props.weather.temperature}º 
        </div>

        <ul className="weather__next-days">
          {this.props.weather.days.map((day, index) => (
            <li key={index}>
              <span className="weather__day">{day.dayName}</span>
              <span className="weather__temperature">{day.temperature}º</span>
              <span className="weather__condition">
                <Icon icon={day.icon} alt={day.condition} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        hasError: state.hasError,
        isLoading: state.isLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (city) => dispatch(weatherFetchData(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
