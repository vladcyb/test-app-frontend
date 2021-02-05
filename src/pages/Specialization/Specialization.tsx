import React from 'react';
import { StateType } from '../../store/specializationSlice/types';
import './style.css';

type PropsType = {
  specs: StateType
};

export const Specialization = ({ specs }: PropsType) => (
  <div className="specialization">
    <div className="specialization__table">
      <div className="specialization__tableHeader">
        <div>id</div>
        <div>login</div>
      </div>
      {specs.data.map((item) => (
        <div className="specialization__row" key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  </div>
);
