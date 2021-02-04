import { Master } from '../../shared/types';

export type StateType = {
  loading: boolean
  data: Required<Master>[]
};
