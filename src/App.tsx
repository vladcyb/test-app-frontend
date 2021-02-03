import React from 'react';
import { Route } from 'react-router-dom';

export const App = () => (
  <div className="app">
    <Route exact path="/">
      Hello
    </Route>
  </div>
);
