import React, { useCallback } from 'react';
import { MasterType } from '../../../shared/types';
import { useAppDispatch } from '../../../store/store';
import { MasterThunk } from '../../../store/masterSlice/thunk';

type PropsType = {
  data: Required<MasterType>
};

export const MasterRow = ({
  data: {
    id,
    Specialization,
    patronymic,
    surname,
    name,
    login,
  },
}: PropsType) => {
  /* hooks */
  const dispatch = useAppDispatch();

  /* methods */
  const handleDelete = useCallback(() => {
    dispatch(MasterThunk.delete(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="masters__row" key={id}>
      <div>
        {/* eslint-disable-next-line */}
        <button className="masters__remove" onClick={handleDelete} type="button" />
        {id}
      </div>
      <div>{login}</div>
      <div>{surname}</div>
      <div>{name}</div>
      <div>{patronymic}</div>
      <div>{Specialization.title}</div>
    </div>
  );
};
