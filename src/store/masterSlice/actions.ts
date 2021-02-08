import { createAction } from '@reduxjs/toolkit';
import { MasterType } from '../../shared/types';
import { EditMaster } from './types';

const prefix = 'master';

const actions = {
  add: createAction<Required<MasterType>>(`${prefix}/add`),
  delete: createAction<number>(`${prefix}/delete`),
  edit: createAction<EditMaster>(`${prefix}/edit`),
  set: createAction<Required<MasterType>[]>(`${prefix}/set`),
};

export default actions;
