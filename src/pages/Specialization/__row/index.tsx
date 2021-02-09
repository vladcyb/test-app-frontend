import React, { useState } from 'react';
import { SpecializationType } from '../../../shared/types';
import { useAppDispatch } from '../../../store/store';
import { SpecializationThunk } from '../../../store/specializationSlice/thunk';
import { useField } from '../../../shared/hooks/useField';

type PropsType = {
  isLoading: boolean
} & Required<SpecializationType>;

export const SpecializationRow = ({ id, title, isLoading }: PropsType) => {
  /* state */
  const [isEditing, setIsEditing] = useState(false);
  const titleField = useField(title);

  /* hooks */
  const dispatch = useAppDispatch();

  /* methods */
  const handleDelete = async () => {
    const result = await dispatch(SpecializationThunk.delete(id));
    if ((result.payload as any).error) {
      alert((result.payload as any).error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const handleEdit = async () => {
    if (isLoading) {
      return;
    }
    const result = await dispatch(SpecializationThunk.edit({ id, title: titleField.props.value }));
    if (!result.payload.error) {
      setIsEditing(false);
    }
  };

  return (
    <div className="specialization__row" key={id}>
      <div className="specialization__actions">
        {/* eslint-disable-next-line */}
        <button
          className="specialization__edit"
          type="button"
          onClick={handleEditClick}
        />
        {/* eslint-disable-next-line */}
        <button
          className="specialization__remove"
          type="button"
          onClick={handleDelete}
        />
      </div>
      <div>
        {id}
      </div>
      {isEditing ? (
        <div>
          <input type="text" {...titleField.props} />
          <button
            className="specialization__save"
            type="button"
            onClick={handleEdit}
            disabled={isLoading}
          >
            Save
          </button>
          <button className="specialization__cancel" type="button" onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          {title}
        </div>
      )}
    </div>
  );
};
