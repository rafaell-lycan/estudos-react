import { combineReducers } from 'redux';
import { weather, hasErrored, isLoading } from './weather';

export default combineReducers({
    weather,
    hasErrored,
    isLoading
});