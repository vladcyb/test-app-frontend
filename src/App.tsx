import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { Master, Specialization } from './pages';
import { Navigation } from './components/Navigation';
import { useAppDispatch } from './store/store';
import { SpecializationThunk } from './store/specializationSlice/thunk';
import { MasterThunk } from './store/masterSlice/thunk';
import { getSpecialization } from './store/specializationSlice/selectors';
import './app.css';

export const App = () => {
  /* hooks */
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(SpecializationThunk.update());
    dispatch(MasterThunk.update());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const masters = useSelector(getMaster);
  const specializations = useSelector(getSpecialization);

  return (
    <div className="app">
      <Navigation />
      <Route exact path="/">
        <Redirect to="/specializations" />
      </Route>
      <Route exact path="/specializations">
        <Specialization list={specializations.data} />
      </Route>
      <Route exact path="/masters">
        <Master />
      </Route>
    </div>
  );
};
