import React, { useState } from 'react';
import cx from 'classnames';

import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import s from './Form.module.scss';

const Input = ({
  label,
  type,
  placeholder,
  onFocus,
  onBlur,
  register,
  required,
  component,
  control,
  options,
}) => {
  const [inputType, setInputType] = useState(type);

  if (component === 'masked') {
    return (
      <div className={s.labInp}>
        <label className={s.label}>{label}</label>
        <Controller
          name="phone"
          control={control}
          rules={{ required }}
          render={({ field }) => (
            <InputMask
              mask="+7 (999) 999-99-99"
              placeholder="+7 (___) ___-__-__"
              className={s.input}
              {...field}
            />
          )}
        />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className={cx(s.labInp, s.arrow)}>
        <label className={s.label}>{label}</label>
        <select
          name={label}
          className={cx(s.input, s.select)}
          {...register(label, { required })}
        >
          {options.map(option => (
            <option
              key={option.value}
              value={option.value}
              className={option.isPlaceholder ? s.hide : undefined}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={s.labInp}>
      <label className={s.label}>{label}</label>
      <input
        type={inputType}
        className={s.input}
        placeholder={placeholder}
        onFocus={() => onFocus && onFocus(setInputType)}
        onBlur={() => onBlur && onBlur(setInputType)}
        {...register(label, { required })}
      />
    </div>
  );
};

export default Input;
