import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import Hero from './Hero/Hero';
import Footer from 'components/Footer/Footer';

import s from './Home.module.scss';

const Home = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      <Hero />
      Home
      <Footer />
    </div>
  );
};

Home.propTypes = {
  className: string,
};

Home.defaultProps = {};

export default React.memo(Home);
