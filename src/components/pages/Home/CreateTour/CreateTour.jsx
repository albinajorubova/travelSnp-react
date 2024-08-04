import React from 'react';
import PropTypes from 'prop-types';

import TitileSubtitile from 'components/TitileSubtitile';
import Form from 'components/Form';

const CreateTour = ({ className }) => {
  return (
    <section
      id="createTour"
      className={className}
    >
      <TitileSubtitile
        title="Собери свой тур"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />
      <Form />
    </section>
  );
};

CreateTour.propTypes = {
  className: PropTypes.string,
};

export default React.memo(CreateTour);
