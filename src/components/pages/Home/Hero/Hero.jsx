import React from 'react';
import PropTypes from 'prop-types';

import Intro from 'components/Intro';
import Header from 'components/Header';

const Hero = ({ className }) => {
  return (
    <section
      id="Hero"
      className={className}
    >
      <Header />
      <Intro />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Hero);
