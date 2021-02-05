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
};
