import React from 'react';
import PropTypes from 'prop-types';
import TitileSubtitile from 'components/TitileSubtitile/TitileSubtitile';

const Pictures = ({ className }) => {
  return (
    <section className={className}>
      <TitileSubtitile
        title="Фотографии путешествий"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />
    </section>
  );
};

Pictures.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Pictures);
