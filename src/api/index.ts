import Responses from './methods/responses';
import instance from './axios';
import { MasterType, SpecializationType } from '../shared/types';

const API = {
  Specialization: {
    add: (props: SpecializationType) => Responses(
      instance.post('/specialization', props),
    ),
    get: () => Responses(
      instance.get('/specialization'),
    ),
    edit: (props: Partial<SpecializationType>) => {
      if (!props.id) {
        throw Error('Enter master id!');
      }
      return Responses(
        instance.put('/specialization', props),
      );
    },
    delete: (id: number) => Responses(
      instance.delete(`/specialization/${id}`),
    ),
  },
  Master: {
    add: (props: MasterType) => Responses(
      instance.post('/master', props),
    ),
    get: () => Responses(
      instance.get('/master'),
    ),
    edit: (props: Partial<MasterType>) => Responses(
      instance.put('/master', props),
    ),
    delete: (id: number) => Responses(
      instance.delete(`/master/${id}`),
    ),
  },
};

export default API;
