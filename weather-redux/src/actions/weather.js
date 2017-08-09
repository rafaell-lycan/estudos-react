import Moment from 'moment';
import { fetchData } from '../utils/api';
import { HAS_ERROR, IS_LOADING, FETCH_DATA_SUCCESS } from '../constants/weather';


export function hasError(bool) {
    return {
        type: HAS_ERROR,
        value: bool
    }
}

export function isLoading(bool) {
    return {
        type: IS_LOADING,
        value: bool
    }
}

export function fetchDataSuccess(weather) {
    return {
        type: FETCH_DATA_SUCCESS,
        weather
    }
}

export function weatherFetchData(city = `Barcelona`) {
    return (dispatch) => {
        dispatch(isLoading(true))
        fetchData(city)
            .then(data => {
                dispatch(isLoading(false))
                return parseWeatherData(data)
            })
            .then(weather => dispatch(fetchDataSuccess(weather)))
            .catch(err => dispatch(hasError(true)))
    }
}

function parseWeatherData(data) {
    let newData = {
        city: data.city.name,
        country: data.city.country,
        days: []
    };

    newData = Object.assign(newData, getDailyData(data.list[0]))

    newData.days = data.list
        .filter(filterNextDays)
        .map(getDailyData);

    return newData;
}
function filterNextDays(d, i) {
    return i > 0;
}

function getDailyData(day) {
    return {
        condition: day.weather[0].main,
        temperature: parseInt(day.temp.day, 10),
        dayName: getDayName(day.dt),
        icon: day.weather[0].icon
    };
}

function getDayName(dateTime) {
    let days = {
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      nextWeek: "dddd",
      lastDay: "dddd",
      lastWeek: "dddd"
    }

    return Moment(dateTime * 1000).calendar(null, days)
}