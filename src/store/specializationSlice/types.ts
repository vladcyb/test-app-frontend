import { Specialization } from '../../shared/types';

export type StateType = {
  loading: boolean
  data: Required<Specialization>[]
};
