import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import actions from './actions';
import { AddMasterType } from '../../shared/types';
import { EditMaster } from './types';

export const MasterThunk = {
  update: createAsyncThunk(
    'master/update',
    async (arg, { dispatch }) => {
      const result = await API.Master.get();
      dispatch(actions.set(result.data.result));
    },
  ),
  delete: createAsyncThunk(
    'master/delete',
    async (id: number, { dispatch }) => {
      const result = await API.Master.delete(id);
      if (result.data.ok) {
        dispatch(actions.delete(id));
      }
    },
  ),
  add: createAsyncThunk(
    'master/add',
    async (props: AddMasterType, {
      dispatch,
      rejectWithValue,
    }) => {
      const result = await API.Master.add(props);
      if (result.data.ok) {
        dispatch(actions.add(result.data.result));
      } else {
        return rejectWithValue(result.data);
      }
      return '';
    },
  ),
  edit: createAsyncThunk(
    'master/edit',
    async (props: EditMaster, { dispatch, rejectWithValue }) => {
      const requestResult = await API.Master.edit(props);
      const { ok, result } = requestResult.data;
      if (ok) {
        await dispatch(actions.edit(result));
      } else {
        return rejectWithValue({ error: 'Something went wrong!' });
      }
      return result;
    },
  ),
};
