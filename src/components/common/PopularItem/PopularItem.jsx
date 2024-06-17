import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Link from 'next/link';

import PopularIntemTitle from 'components/PopularIntemTitle';
import Button from 'components/Button';

import s from './PopularItem.module.scss';

const PopularItem = ({ title, price, imageSrc }) => {
  return (
    <div
      className={s.item}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={s.back}>
        <PopularIntemTitle
          title={title}
          price={price}
        />
        <Button className={s.btn} />
      </div>
    </div>
  );
};

PopularItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default React.memo(PopularItem);
