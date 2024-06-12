import React from 'react';
import PropTypes from 'prop-types';

import TitileSubtitile from 'components/TitileSubtitile';
import Tabs from 'components/Tabs';

const Tours = ({ className }) => {
  return (
    <section
      id="tours"
      className={className}
    >
      <TitileSubtitile title="Выбери свой тур" />
      <Tabs />
    </section>
  );
};

Tours.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Tours);
