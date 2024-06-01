

import React from 'react';
import TitileSubtitile from 'components/TitileSubtitile/TitileSubtitile';

const Reviews = () => {
  return (
    <>
      <TitileSubtitile
        title="Отзывы наших
        путешественников"
        text1="Идейные соображения высшего порядка,"
        text2=" а также рамки и место обучения кадров"
      />
    </>
  );
};

export default React.memo(Reviews);
