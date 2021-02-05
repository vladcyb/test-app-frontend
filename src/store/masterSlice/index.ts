import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateType } from './types';
import { MasterType } from '../../shared/types';

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
});
