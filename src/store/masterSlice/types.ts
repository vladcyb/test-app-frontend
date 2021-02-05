import { MasterType } from '../../shared/types';

export type StateType = {
  loading: boolean
  data: Required<MasterType>[]
};
