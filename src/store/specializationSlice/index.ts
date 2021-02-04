import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Specialization } from '../../shared/types';
import { StateType } from './types';

const initialState: StateType = {
  loading: false,
  data: [],
};

export const specializationSlice = createSlice({
  name: 'specialization',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Specialization>) => {
      state.data.push(payload);
    },
    delete: (state, { payload }: PayloadAction<number>) => {
      const index = state.data.findIndex((spec) => spec.id === payload);
      if (index >= 0) {
        state.data.splice(index, 1);
      }
    },
    set: (state, { payload }: PayloadAction<Required<Specialization>[]>) => {
      state.data = payload;
    },
    edit: (state, { payload }: PayloadAction<Required<Specialization>>) => {
      const index = state.data.findIndex((spec) => spec.id === payload.id);
      if (index >= 0) {
        state.data[index] = payload;
      }
    },
  },
});
