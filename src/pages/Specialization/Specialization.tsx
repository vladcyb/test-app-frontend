import React from 'react';
import { SpecializationType } from '../../shared/types';
import './style.css';

type PropsType = {
  list: SpecializationType[]
};

export const Specialization = ({
  list,
}: PropsType) => (
  <div className="specialization">
    <div className="specialization__table">
      {list.map((item) => item.title)}
    </div>
  </div>
);
