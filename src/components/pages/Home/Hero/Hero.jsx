import React from 'react';
import PropTypes from 'prop-types';
import Intro from 'components/Intro/Intro';
import Header from 'components/Header/Header';

const Hero = ({ className }) => {
  return (
    <section className={className}>
      <Header />
      <Intro />
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Hero);
