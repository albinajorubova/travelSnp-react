import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Footer from 'components/Footer';
import TravelTime from 'components/TravelTime';

import Hero from './Hero';
import CreateTour from './CreateTour';
import Tours from './Tours';
import Reviews from './Reviews';
import Pictures from './Pictures';
import Histories from './Histories';

import s from './Home.module.scss';

const Home = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>
      <Hero className={s.section} />
      <Tours className={s.section} />
      <CreateTour className={s.section} />
      <Reviews className={s.section} />
      <Pictures className={s.section} />
      <Histories className={s.section} />
      <TravelTime />
      <Footer />
    </div>
  );
};

Home.propTypes = {
  className: string,
};

export default React.memo(Home);
