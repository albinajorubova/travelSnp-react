import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Link from 'next/link';

import PopularItem from 'components/PopularItem';

import s from './PopularBlock.module.scss';

const PopularBlock = () => {
  return (
    <div className={s.popular__block}>
      <PopularItem />
    </div>
  );
};

export default React.memo(PopularBlock);
