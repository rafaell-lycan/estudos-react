import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

export default function configStore(initialState) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(logger, thunk)
    );
}