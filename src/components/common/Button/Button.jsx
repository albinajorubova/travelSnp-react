import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
import Image from 'next/image';

import s from './Button.module.scss';

const Button = ({ className }) => {
  return (
    <button
      className={cx(s.btn, className)}
      type="button"
    >
      Подробнее
      <Image
        width="22"
        height="16"
        src="/images/popular/str.svg"
        alt="popular"
      />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Button);
