import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateType } from './types';
import { MasterType } from '../../shared/types';
import { MasterThunk } from './thunk';
import { SpecializationThunk } from '../specializationSlice/thunk';

const initialState: StateType = {
  loading: false,
  data: [],
};

export const masterSlice = createSlice({
  name: 'master',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Required<MasterType>>) => {
      state.data.push(payload);
    },
    delete: (state, { payload }: PayloadAction<number>) => {
      const index = state.data.findIndex((master) => master.id === payload);
      if (index >= 0) {
        state.data.splice(index, 1);
      }
    },
    set: (state, { payload }: PayloadAction<Required<MasterType>[]>) => {
      state.data = payload;
    },
    edit: (state, { payload }: PayloadAction<Required<MasterType>>) => {
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
      })
      .addCase(MasterThunk.add.pending, (state) => {
        state.loading = true;
      })
      .addCase(MasterThunk.add.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(MasterThunk.add.rejected, (state) => {
        state.loading = false;
      })
      .addCase(MasterThunk.edit.pending, (state) => {
        state.loading = true;
      })
      .addCase(MasterThunk.edit.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(MasterThunk.edit.rejected, (state) => {
        state.loading = false;
      })
      .addCase(SpecializationThunk.edit.fulfilled, (state, { payload }) => {
        state.data.forEach((master) => {
          if (master.Specialization.id === payload.id) {
            master.Specialization.title = payload.title;
          }
        });
      });
  },
});
