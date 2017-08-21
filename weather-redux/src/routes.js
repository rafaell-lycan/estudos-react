import React from 'react';
import { Route } from 'react-router';
import Weather from './components/Weather';
import Search from './components/Search';

export default(
  <Route>
    <Route path="/" component={Weather} />
    <Route path="/search" component={Search} />
  </Route>
);