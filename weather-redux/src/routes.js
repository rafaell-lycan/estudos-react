import React from 'react';
import { Route } from 'react-router';
import Weather from './components/Weather';

export default(
  <Route>
    <Route path="/" component={Weather} />
  </Route>
);