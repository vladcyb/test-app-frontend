import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import actions from './actions';
import { AddMasterType } from '../../shared/types';

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
  add: createAsyncThunk(
    'master/add',
    async (props: AddMasterType, { dispatch, rejectWithValue }) => {
      const result = await API.Master.add(props);
      if (result.data.ok) {
        dispatch(actions.add(result.data.result));
      } else {
        return rejectWithValue(result.data);
      }
      return '';
    },
  ),
};
