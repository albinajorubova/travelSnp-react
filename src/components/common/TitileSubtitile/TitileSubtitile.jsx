import React from 'react';
import PropTypes from 'prop-types';

import s from './TitileSubtitile.module.scss';

const TitleSubtitile = ({ title, text1, text2 }) => {
  return (
    <div className={s.block}>
      <h1 className={s.main__title}>{title}</h1>
      <div>
        <p className={s.text1}>{text1}</p>
        <p className={s.text2}>{text2}</p>
      </div>
    </div>
  );
};

TitleSubtitile.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default React.memo(TitleSubtitile);
