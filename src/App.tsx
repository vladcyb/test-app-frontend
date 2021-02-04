import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { Masters, Specializations } from './pages';
import { routes } from './shared/routes';
import './app.css';

export const App = () => (
  <div className="app">
    <nav>
      <div>
        <Link to={routes.specializations.root}>Specializations</Link>
      </div>
      <div>
        <Link to={routes.masters.root}>Masters</Link>
      </div>
    </nav>
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
