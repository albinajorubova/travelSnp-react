import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Tabs from 'components/Tabs';
import Footer from 'components/Footer';

import Hero from './Hero';
import CreateTour from './CreateTour';
import Tours from './Tours';
import Reviews from './Reviews';
import Pictures from './Pictures';
import Histories from './Histories';

import s from './Home.module.scss';

const Home = ({ className }) => {
  const SectionClassName = cx(s.section, className);

  return (
    <div className={cx(s.root, className)}>
      <Hero className={SectionClassName} />
      <Tours className={SectionClassName} />
      <CreateTour className={SectionClassName} />
      <Reviews className={SectionClassName} />
      <Pictures className={SectionClassName} />
      <Histories className={SectionClassName} />
      <Footer className={SectionClassName} />
    </div>
  );
};

Home.propTypes = {
  className: string,
};

export default React.memo(Home);
