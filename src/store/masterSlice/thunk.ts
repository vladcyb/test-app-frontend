import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import actions from './actions';

export const MasterThunk = {
  update: createAsyncThunk(
    'master/update',
    async (arg, { dispatch }) => {
      const result = await API.Master.get();
      dispatch(actions.set(result.data.result));
    },
  ),
  delete: createAsyncThunk(
    'master/update',
    async (id: number, { dispatch }) => {
      const result = await API.Master.delete(id);
      if (result.data.ok) {
        dispatch(actions.delete(id));
      }
    },
  ),
};
