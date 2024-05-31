import React from 'react';
import Intro from 'components/Intro/Intro';
import Header from 'components/Header/Header';

const Hero = () => {
  return (
    <>
      <Header />
      <Intro />
    </>
  );
};

export default React.memo(Hero);
