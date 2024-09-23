import React from 'react';
import PropTypes from 'prop-types';

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
      <div
        // htmlFor={`radio${index}`}
        className={s.label}
      >
        {label}
      </div>
    </div>
  );
};

RadioBtn.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(RadioBtn);
