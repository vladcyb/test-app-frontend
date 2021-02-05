import { SpecializationType } from '../../shared/types';

export type StateType = {
  loading: boolean
  data: Required<SpecializationType>[]
};
