import Responses from './methods/responses';
import instance from './axios';
import { Master, Specialization } from '../shared/types';

const API = {
  Specialization: {
    add: (props: Specialization) => Responses(
      instance.post('/specialization', props),
    ),
    get: () => Responses(
      instance.get('/specialization'),
    ),
    edit: (props: Partial<Specialization>) => {
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
    add: (props: Master) => Responses(
      instance.post('/master', props),
    ),
    get: () => Responses(
      instance.get('/master'),
    ),
    edit: (props: Partial<Master>) => Responses(
      instance.put('/master', props),
    ),
    delete: (id: number) => Responses(
      instance.delete(`/master/${id}`),
    ),
  },
};

export default API;
