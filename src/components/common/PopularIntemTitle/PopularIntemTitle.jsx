import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './PopularIntemTitle.module.scss';

const PopularIntemTitle = ({ title, price }) => {
  return (
    <div className={s.title}>
      <p>
        Путешествие <br /> {title}
      </p>
      <span>{price}</span>
    </div>
  );
};

PopularIntemTitle.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default React.memo(PopularIntemTitle);
