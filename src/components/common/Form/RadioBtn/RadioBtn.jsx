import React from 'react';

import s from './RadioBtn.module.scss';

const RadioBtn = ({ index, label }) => {
  return (
    <div className={s.block}>
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
        className={s.label}
      >
        {label}
      </label>
    </div>
  );
};

export default React.memo(RadioBtn);
