import { createAction } from '@reduxjs/toolkit';
import { Specialization } from '../../shared/types';

const prefix = 'specialization';

const actions = {
  add: createAction<Required<Specialization>>(`${prefix}/add`),
  delete: createAction<number>(`${prefix}/delete`),
  edit: createAction<Partial<Specialization>>(`${prefix}/edit`),
  set: createAction<Required<Specialization>[]>(`${prefix}/set`),
};

export default actions;
