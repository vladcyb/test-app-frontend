import React, { useEffect, useState } from 'react';
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

  /* state */
  const [specializationId, setSpecializationId] = useState(-1);
  const [filterSpecId, setFilterSpecId] = useState(0);
  const [offset, setOffset] = useState(0);

  /* hooks */
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(MasterThunk.update({ offset }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  /* vars */
  const { loading: isLoading, data: { count } } = masterState;
  const isFormDisabled = isLoading || specializationId === -1;

  /* methods */
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormDisabled) {
      return;
    }
    const obj: AddMasterType = {
      login: login.props.value.trim(),
      name: name.props.value.trim(),
      surname: surname.props.value.trim(),
      patronymic: patronymic.props.value.trim(),
      specId: specializationId,
    };
    const actionResult = await dispatch(MasterThunk.add(obj));
    const { error } = actionResult.payload;
    if (error) {
      alert(error);
    } else {
      login.clear();
      name.clear();
      surname.clear();
      patronymic.clear();
      setSpecializationId(-1);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecializationId(parseInt(e.target.value, 10));
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSpecId(parseInt(e.target.value, 10));
  };

  const handleApplyFilter = () => {
    dispatch(MasterThunk.update({ specId: filterSpecId, offset }));
  };

  const handlePrevClick = () => {
    setOffset((value) => value - 10);
  };

  const handleNextClick = () => {
    setOffset((value) => value + 10);
  };

  return (
    <div className="master">
      <button type="button" onClick={handlePrevClick} disabled={offset === 0}>previous</button>
      <button type="button" onClick={handleNextClick} disabled={offset + 10 >= count}>next</button>
      <div className="master__tableHeader">
        <div className="master__headerId">id</div>
        <div>login</div>
        <div>name</div>
        <div>surname</div>
        <div>patronymic</div>
        <div>specialization</div>
      </div>
      {masterState.data.rows.map((item) => (
        <MasterRow
          key={item.id}
          data={item}
          specializationState={specializationState}
          isLoading={isLoading}
        />
      ))}
      <form className="master__addRow" onSubmit={handleAdd}>
        <input className="master__addRowLogin" type="text" {...login.props} />
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
        <button className="master__addBtn" type="submit" disabled={isFormDisabled}>Add</button>
      </form>
      <div className="master__filter">
        <select onChange={handleChangeFilter} defaultValue={0}>
          <option value={0}>(не выбрано)</option>
          {specializationState.data.map((spec) => (
            <option value={spec.id} key={spec.id}>{spec.title}</option>
          ))}
        </select>
        <button type="button" onClick={handleApplyFilter}>
          Отфильтровать
        </button>
      </div>
    </div>
  );
};
