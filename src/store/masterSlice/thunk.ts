import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import actions from './actions';
import { AddMasterType } from '../../shared/types';
import { EditMaster } from './types';
import { IGetMaster } from '../../api/interfaces';

export const MasterThunk = {
  update: createAsyncThunk(
    'master/update',
    async (props: IGetMaster, { dispatch }) => {
      const result = await API.Master.get(props);
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
      return result.data;
    },
  ),
  edit: createAsyncThunk(
    'master/edit',
    async (props: EditMaster, { dispatch, rejectWithValue }) => {
      const requestResult = await API.Master.edit(props);
      const { ok, result, error } = requestResult.data;
      if (ok) {
        await dispatch(actions.edit(result));
      } else {
        return rejectWithValue({ error });
      }
      return result;
    },
  ),
};
