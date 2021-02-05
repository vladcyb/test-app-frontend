import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Masters, Specializations } from './pages';
import { Navigation } from './components/Navigation';
import './app.css';
import API from './api';

export const App = () => {
  useEffect(() => {
    const getData = async () => {
      const [specs, masters] = await Promise.all([
        API.Specialization.get(),
        API.Master.get(),
      ]);
      console.log(specs.data, masters.data);
    };
    getData();
  }, []);
  return (
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
};
