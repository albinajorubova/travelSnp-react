import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';

import s from './Button.module.scss';

const Button = ({ className, type }) => {
  return (
    <button
      className={cx(s.btn, className)}
      type={type}
    >
      Подробнее
      <img
        src="images/popular/str.svg"
        alt=""
      />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default React.memo(Button);
