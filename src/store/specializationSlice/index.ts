import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpecializationType } from '../../shared/types';
import { StateType } from './types';
import { SpecializationThunk } from './thunk';

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
      .addCase(SpecializationThunk.update.pending, (state) => {
        state.loading = true;
      })
      .addCase(SpecializationThunk.update.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(SpecializationThunk.update.rejected, (state) => {
        state.loading = false;
      })
      .addCase(SpecializationThunk.add.pending, (state) => {
        state.loading = true;
      })
      .addCase(SpecializationThunk.add.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(SpecializationThunk.add.rejected, (state) => {
        state.loading = false;
      });
  },
});
