import React from 'react';
import { StateType } from '../../store/masterSlice/types';

type PropsType = {
  masters: StateType
};

export const Master = ({ masters }: PropsType) => (
  <div className="masters">
    <div className="masters__table">
      {masters.data.map((item) => (
        <div key={item.id}>
          {item.login}
        </div>
      ))}
    </div>
  </div>
);
