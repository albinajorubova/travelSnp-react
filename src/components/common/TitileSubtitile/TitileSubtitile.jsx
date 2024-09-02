import React from 'react';
import PropTypes from 'prop-types';

import s from './TitileSubtitile.module.scss';

const TitleSubtitile = ({ title, text1, text2 }) => {
  return (
    <div className={s.block}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subTitile}>
        {text1 && <p className={s.text1}>{text1}</p>}
        {text2 && <p className={s.text2}>{text2}</p>}
      </div>
    </div>
  );
};

TitleSubtitile.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

TitleSubtitile.defaultProps = {
  text1: null,
  text2: null,
};

export default React.memo(TitleSubtitile);
