import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { specializationSlice } from './specializationSlice';

const store = configureStore({
  reducer: combineReducers({
    specialization: specializationSlice.reducer,
  }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
