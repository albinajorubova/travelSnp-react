import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Link from 'next/link';

import PopularIntemTitle from 'components/PopularIntemTitle';
import Button from 'components/Button';

import s from './PopularItem.module.scss';

const PopularItem = () => {
  return (
    <div className={s.item}>
      <div className={s.back}>
        <PopularIntemTitle />
        <Button className={s.btn} />
      </div>
    </div>
  );
};

export default React.memo(PopularItem);
