import { HAS_ERROR, IS_LOADING, FETCH_DATA_SUCCESS } from '../constants/weather.js';

export function hasErrored(state = false, action) {
    switch (action.type) {
        case HAS_ERROR:
            return action.value;
        default:
            return state;
    }
}
export function isLoading(state = false, action) {
    switch (action.type) {
        case IS_LOADING:
            return action.value;
        default:
            return state;
    }
}
export function weather(state = {days: []}, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return action.weather;
        default:
            return state;
    }
}