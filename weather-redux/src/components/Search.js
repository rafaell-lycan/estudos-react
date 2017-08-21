import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { weatherFetchData } from '../actions/weather';

class Search extends Component {

  changeCity() {
    this.props.search(this.props.weather.city)
  }

  render() {
    return (
      <div className="weather">
        <header className="weather__header">
          <h2 className="weather__title">{}</h2>
          <small className="weather__period">{this.props.weather.dayName}</small>
          <input type="text" value={this.props.weather.city} />
          <button onClick={this.changeCity()}>Change</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        search: (city) => dispatch(weatherFetchData(city))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
