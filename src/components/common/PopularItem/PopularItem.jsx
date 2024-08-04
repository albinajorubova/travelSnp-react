import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Link from 'next/link';

import Button from 'components/Button';

import s from './PopularItem.module.scss';

const PopularItem = ({ title, price, imageSrc }) => {
  return (
    <div
      className={s.item}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={s.back}>
        <div className={s.title}>
          <p>
            Путешествие <br /> {title}
          </p>
          <span>{price}</span>
        </div>
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
