import React from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
import Image from 'next/image';

import s from './Button.module.scss';

const Button = ({ className, type }) => {
  return (
    <button className={cx(s.btn, className)}>
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
  type: PropTypes.string,
};

export default React.memo(Button);
