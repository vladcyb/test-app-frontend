import React from 'react';
import { StateType } from '../../store/specializationSlice/types';
import './style.css';

type PropsType = {
  specs: StateType
};

export const Specialization = ({ specs }: PropsType) => (
  <div className="specialization">
    <div className="specialization__table">
      {specs.data.map((item) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  </div>
);
