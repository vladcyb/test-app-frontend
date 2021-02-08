import { MasterType } from '../../shared/types';

export type StateType = {
  loading: boolean
  data: Required<MasterType>[]
};

export type EditMaster = {
  id: number
  login?: string
  surname?: string
  name?: string
  patronymic?: string
  specId?: number
};
