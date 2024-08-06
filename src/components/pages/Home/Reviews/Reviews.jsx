import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TitileSubtitile from 'components/TitileSubtitile';
import Review from 'components/Review';

import s from './Reviews.module.scss';

const Reviews = ({ className }) => {
  return (
    <section
      id="reviews"
      className={cx({ className }, s.reviews)}
    >
      <TitileSubtitile
        title="Отзывы наших путешественников"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />

      <Review />
    </section>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Reviews);
