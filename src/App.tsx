import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Masters, Specializations } from './pages';
import { Navigation } from './components/Navigation';
import './app.css';

export const App = () => (
  <div className="app">
    <Navigation />
    <Route exact path="/">
      <Redirect to="/specializations" />
    </Route>
    <Route exact path="/specializations">
      <Specializations />
    </Route>
    <Route exact path="/masters">
      <Masters />
    </Route>
  </div>
);
