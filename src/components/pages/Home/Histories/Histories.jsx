import React from 'react';
import PropTypes from 'prop-types';

import TitileSubtitile from 'components/TitileSubtitile';
import HistoryCard from 'components/HistoryCard';

const Histories = ({ className }) => {
  return (
    <section
      id="histories"
      className={className}
    >
      <TitileSubtitile
        title="Истории путешествий"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />
      <HistoryCard />
    </section>
  );
};

Histories.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Histories);
