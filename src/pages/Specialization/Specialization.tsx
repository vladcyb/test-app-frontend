import React from 'react';
import { StateType } from '../../store/specializationSlice/types';
import './style.css';
import { useField } from '../../shared/hooks/useField';
import { useAppDispatch } from '../../store/store';
import { SpecializationThunk } from '../../store/specializationSlice/thunk';

type PropsType = {
  state: StateType
};

export const Specialization = ({ state }: PropsType) => {
  /* hooks */
  const titleField = useField();
  const dispatch = useAppDispatch();

  /* vars */
  const isLoading = state.loading;

  /* methods */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    dispatch(SpecializationThunk.add({ title: titleField.props.value }));
    titleField.clear();
  };

  return (
    <div className="specialization">
      <div className="specialization__tableHeader">
        <div>id</div>
        <div>login</div>
      </div>
      {state.data.map((item) => (
        <div className="specialization__row" key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <div className="specialization__addRow">
          <div />
          <div>
            <input type="text" {...titleField.props} disabled={isLoading} />
            <button type="submit" disabled={isLoading}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
