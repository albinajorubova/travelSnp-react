import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TitileSubtitile from 'components/TitileSubtitile';
import HistoryCard from 'components/HistoryCard';

import s from './Histories.module.scss';

const Histories = ({ className }) => {
  return (
    <section
      id="histories"
      className={cx({ className }, s.histories)}
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
