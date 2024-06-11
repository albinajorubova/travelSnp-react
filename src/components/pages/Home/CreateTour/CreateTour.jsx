import React from 'react';
import PropTypes from 'prop-types';
import TitileSubtitile from 'components/TitileSubtitile/TitileSubtitile';

const CreateTour = ({ className }) => {
  return (
    <section className={className}>
      <TitileSubtitile
        title="Собери свой тур"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />
    </section>
  );
};

CreateTour.propTypes = {
  className: PropTypes.string,
};

export default React.memo(CreateTour);
