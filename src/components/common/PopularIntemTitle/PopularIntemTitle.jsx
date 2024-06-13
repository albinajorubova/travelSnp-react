import React from 'react';
import cx from 'classnames';

import s from './PopularIntemTitle.module.scss';

const PopularIntemTitle = () => {
  return (
    <div className={s.title}>
      <p>Путешествие в&nbsp;горы</p>
      <span>от 80 000 руб</span>
    </div>
  );
};

export default React.memo(PopularIntemTitle);
