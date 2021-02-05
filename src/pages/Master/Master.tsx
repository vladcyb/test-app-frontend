import React from 'react';
import { StateType } from '../../store/masterSlice/types';
import { MasterRow } from './__row';
import './style.css';

type PropsType = {
  state: StateType
};

export const Master = ({ state }: PropsType) => (
  <div className="masters">
    <div className="masters__tableHeader">
      <div>id</div>
      <div>login</div>
      <div>name</div>
      <div>surname</div>
      <div>patronymic</div>
      <div>specialization</div>
    </div>
    {state.data.map((item) => (
      <MasterRow key={item.id} data={item} />
    ))}
  </div>
);
