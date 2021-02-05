import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpecializationType } from '../../shared/types';
import { StateType } from './types';
import { MasterThunk } from '../masterSlice/thunk';

const initialState: StateType = {
  loading: false,
  data: [],
};

export const specializationSlice = createSlice({
  name: 'specialization',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Required<SpecializationType>>) => {
      state.data.push(payload);
    },
    delete: (state, { payload }: PayloadAction<number>) => {
      const index = state.data.findIndex((spec) => spec.id === payload);
      if (index >= 0) {
        state.data.splice(index, 1);
      }
    },
    set: (state, { payload }: PayloadAction<Required<SpecializationType>[]>) => {
      state.data = payload;
    },
    edit: (state, { payload }: PayloadAction<Required<SpecializationType>>) => {
      const index = state.data.findIndex((spec) => spec.id === payload.id);
      if (index >= 0) {
        state.data[index] = payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(MasterThunk.update.pending, (state) => {
        state.loading = true;
      })
      .addCase(MasterThunk.update.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(MasterThunk.update.rejected, (state) => {
        state.loading = false;
      });
  },
});
