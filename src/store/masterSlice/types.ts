import { MasterType } from '../../shared/types';

export type DataType = {
  count: number
  rows: Required<MasterType>[]
};

export type StateType = {
  loading: boolean
  data: DataType
  filterBySpec: number
  loaded: boolean
};

export type EditMaster = {
  id: number
  login?: string
  surname?: string
  name?: string
  patronymic?: string
  specId?: number
};
