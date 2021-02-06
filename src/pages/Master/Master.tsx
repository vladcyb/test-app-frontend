import React, { useState } from 'react';
import { StateType } from '../../store/masterSlice/types';
import { StateType as SpecializationStateType } from '../../store/specializationSlice/types';
import { MasterRow } from './__row';
import { useField } from '../../shared/hooks/useField';
import { AddMasterType } from '../../shared/types';
import { useAppDispatch } from '../../store/store';
import { MasterThunk } from '../../store/masterSlice/thunk';
import './style.css';

type PropsType = {
  masterState: StateType
  specializationState: SpecializationStateType
};

export const Master = ({
  masterState,
  specializationState,
}: PropsType) => {
  /* fields */
  const login = useField();
  const name = useField();
  const surname = useField();
  const patronymic = useField();
  const [specializationId, setSpecializationId] = useState(-1);

  /* hooks */
  const dispatch = useAppDispatch();

  /* vars */
  const isLoading = masterState.loading;
  const isFormDisabled = isLoading || specializationId === -1;

  /* methods */
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormDisabled) {
      return;
    }
    const obj: AddMasterType = {
      login: login.props.value,
      name: name.props.value,
      surname: surname.props.value,
      patronymic: patronymic.props.value,
      specId: specializationId,
    };
    login.clear();
    name.clear();
    surname.clear();
    patronymic.clear();
    setSpecializationId(-1);
    dispatch(MasterThunk.add(obj));
  };

  const handleSelectChange = (e: any) => {
    setSpecializationId(parseInt(e.target.value, 10));
  };

  return (
    <div className="masters">
      <div className="masters__tableHeader">
        <div />
        <div>id</div>
        <div>login</div>
        <div>name</div>
        <div>surname</div>
        <div>patronymic</div>
        <div>specialization</div>
      </div>
      {masterState.data.map((item) => (
        <MasterRow key={item.id} data={item} />
      ))}
      <form className="masters__addRow" onSubmit={handleAdd}>
        <div />
        <div />
        <input type="text" {...login.props} />
        <input type="text" {...name.props} />
        <input type="text" {...surname.props} />
        <input type="text" {...patronymic.props} />
        <select onChange={handleSelectChange} value={specializationId}>
          <option value={-1}>(не выбрано)</option>
          {specializationState.data.map((spec) => (
            <option key={spec.id} value={spec.id}>
              {spec.title}
            </option>
          ))}
        </select>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <button type="submit" disabled={isFormDisabled}>Add</button>
      </form>
    </div>
  );
};
