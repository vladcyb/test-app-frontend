import React from 'react';
import { StateType } from '../../store/specializationSlice/types';
import { useField } from '../../shared/hooks/useField';
import { useAppDispatch } from '../../store/store';
import { SpecializationThunk } from '../../store/specializationSlice/thunk';
import { SpecializationRow } from './__row';
import './style.css';

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
        <div />
        <div>id</div>
        <div>title</div>
      </div>
      {state.data.map((item) => (
        <SpecializationRow
          key={item.id}
          id={item.id}
          title={item.title}
          specializationState={state}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <div className="specialization__addRow">
          <div />
          <div />
          <div>
            <input type="text" {...titleField.props} disabled={isLoading} />
            <button className="specialization__add" type="submit" disabled={isLoading}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
