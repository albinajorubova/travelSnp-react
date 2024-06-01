import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';
import Hero from './Hero/Hero';
import Footer from 'components/Footer/Footer';
import CreateTour from './CreateTour/CreateTour';
import Tours from './Tours/Tours';
import Reviews from './Reviews/Reviews';
import Pictures from './Pictures/Pictures';
import Histories from './Histories';
import Tabs from 'components/Tabs/Tabs';

import s from './Home.module.scss';

const Home = ({ className }) => {
  return (
    <div className={cx(s.root, className)}>

      <div className={s.section}>
        <Hero />
      </div>
      <div className={s.section}>
        <Tours />
      </div>
      <div className={s.section}>
        <CreateTour />
      </div>
      <div className={s.section}>
        <Reviews />
      </div>
      <div className={s.section}>
        <Pictures />
      </div>
      <div className={s.section}>
        <Histories />
      </div>
      <div className={s.section}>Home</div>
      <Footer />
    </div>
  );
};

Home.propTypes = {
  className: string,
};

export default React.memo(Home);
