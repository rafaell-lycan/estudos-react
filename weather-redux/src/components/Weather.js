import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherFetchData } from '../actions/weather';

import weatherIcon from '../utils/icons';

import './Weather.css';
import sun from '../sun.svg';
import cloud from '../cloud.svg';
import search from '../search.svg';

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
          <search className="weather__search" />
        </header>

        <div className="weather__info">
          <div className="icon">{weatherIcon(this.props.weather.icon)}</div>
          {this.props.weather.temperature}º 
        </div>

        <ul className="weather__next-days">
          {this.props.weather.days.map((day, index) => (
            <li key={index}>
              <span className="weather__day">{day.dayName}</span>
              <span className="weather__temperature">{day.temperature}º</span>
              <span className="weather__condition"><img src={cloud} alt={day.condition}/></span>
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
        fetchData: (url) => dispatch(weatherFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
