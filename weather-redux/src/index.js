import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configStore from './store/configStore';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './fonts/weathericons-regular-webfont.ttf';

const store = configStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>    
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
