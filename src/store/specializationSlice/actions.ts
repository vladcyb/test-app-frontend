import { createAction } from '@reduxjs/toolkit';
import { SpecializationType } from '../../shared/types';

const prefix = 'specialization';

const actions = {
  add: createAction<Required<SpecializationType>>(`${prefix}/add`),
  delete: createAction<number>(`${prefix}/delete`),
  edit: createAction<Partial<SpecializationType>>(`${prefix}/edit`),
  set: createAction<Required<SpecializationType>[]>(`${prefix}/set`),
};

export default actions;
