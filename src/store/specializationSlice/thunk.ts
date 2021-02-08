import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import actions from './actions';
import { SpecializationType } from '../../shared/types';

export const SpecializationThunk = {
  update: createAsyncThunk(
    'specialization/update',
    async (arg, { dispatch }) => {
      const result = await API.Specialization.get();
      dispatch(actions.set(result.data.result));
    },
  ),
  add: createAsyncThunk(
    'specialization/add',
    async (props: SpecializationType, { dispatch }) => {
      const result = await API.Specialization.add(props);
      dispatch(actions.add(result.data.result));
    },
  ),
  delete: createAsyncThunk(
    'specialization/delete',
    async (id: number, { dispatch }) => {
      const result = await API.Specialization.delete(id);
      if (result.data.ok) {
        dispatch(actions.delete(id));
      }
    },
  ),
  edit: createAsyncThunk(
    'specialization/edit',
    async (specialization: SpecializationType, { dispatch, rejectWithValue }) => {
      const editResult = await API.Specialization.edit(specialization);
      const { ok, result } = editResult.data;
      if (ok) {
        await dispatch(actions.edit(result));
      } else {
        return rejectWithValue({ error: 'Something went wrong!' });
      }
      return result;
    },
  ),
};
