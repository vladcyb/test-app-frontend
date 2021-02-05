import React from 'react';
import { StateType } from '../../store/masterSlice/types';
import './style.css';

type PropsType = {
  masters: StateType
};

export const Master = ({ masters }: PropsType) => (
  <div className="masters">
    <div className="masters__table">
      <div className="masters__tableHeader">
        <div>id</div>
        <div>login</div>
        <div>name</div>
        <div>surname</div>
        <div>patronymic</div>
        <div>specialization</div>
      </div>
      {masters.data.map((item) => (
        <div className="masters__row" key={item.id}>
          <div>{item.id}</div>
          <div>{item.login}</div>
          <div>{item.surname}</div>
          <div>{item.name}</div>
          <div>{item.patronymic}</div>
          <div>{item.Specialization.title}</div>
        </div>
      ))}
    </div>
  </div>
);
