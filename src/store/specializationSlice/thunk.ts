import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import actions from './actions';

export const SpecializationThunk = {
  update: createAsyncThunk(
    'specialization/update',
    async (arg, { dispatch }) => {
      const result = await API.Specialization.get();
      dispatch(actions.set(result.data.result));
    },
  ),
};
