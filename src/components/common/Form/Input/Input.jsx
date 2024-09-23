import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import s from './Input.module.scss';

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
      <div className={s.block}>
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
              {...register(label, { required })}
            />
          )}
        />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className={cx(s.block, s.arrow)}>
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
    <div className={s.block}>
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

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  component: PropTypes.oneOf(['masked']),
  control: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isPlaceholder: PropTypes.bool,
    })
  ),
};

export default Input;
