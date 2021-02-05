import { createAction } from '@reduxjs/toolkit';
import { Master } from '../../shared/types';

const prefix = 'master';

const actions = {
  add: createAction<Required<Master>>(`${prefix}/add`),
  delete: createAction<number>(`${prefix}/delete`),
  edit: createAction<Partial<Master>>(`${prefix}/edit`),
  set: createAction<Required<Master>[]>(`${prefix}/set`),
};

export default actions;
