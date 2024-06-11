import React from 'react';
import PropTypes from 'prop-types';
import TitileSubtitile from 'components/TitileSubtitile/TitileSubtitile';

const Reviews = ({ className }) => {
  return (
    <section className={className}>
      <TitileSubtitile
        title="Отзывы наших путешественников"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />
    </section>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Reviews);
