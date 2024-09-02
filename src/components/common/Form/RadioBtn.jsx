import React from 'react';

import s from './Form.module.scss';

const RadioBtn = ({ index, label }) => {
  return (
    <div className={s.radioBlock}>
      <input
        type="radio"
        name="YesNo"
        id={`radio${index}`}
      />
      <label
        className={s.fakeInput}
        htmlFor={`radio${index}`}
      />
      <label
        htmlFor={`radio${index}`}
        className={s.radioLabel}
      >
        {label}
      </label>
    </div>
  );
};

export default React.memo(RadioBtn);
