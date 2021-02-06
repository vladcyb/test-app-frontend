import React, { useCallback } from 'react';
import { SpecializationType } from '../../../shared/types';
import { useAppDispatch } from '../../../store/store';
import { SpecializationThunk } from '../../../store/specializationSlice/thunk';

export const SpecializationRow = ({ id, title }: Required<SpecializationType>) => {
  /* hooks */
  const dispatch = useAppDispatch();

  /* methods */
  const handleDelete = useCallback(async () => {
    dispatch(SpecializationThunk.delete(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="specialization__row" key={id}>
      {/* eslint-disable-next-line */}
      <button
        className="specialization__remove"
        type="button"
        onClick={handleDelete}
      />
      <div>
        {id}
      </div>
      <div>
        {title}
      </div>
    </div>
  );
};
