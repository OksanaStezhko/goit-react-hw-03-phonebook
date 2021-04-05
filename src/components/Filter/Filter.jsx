import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={style.label} htmlFor="">
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

export default Filter;
