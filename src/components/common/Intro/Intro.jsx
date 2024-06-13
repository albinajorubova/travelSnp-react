import React from 'react';
import cx from 'classnames';

import s from './Intro.module.scss';

const Intro = () => {
  return (
    <section className={s.intro}>
      <div className={s.container}>
        <div className={s.inner}>
          <h1 className={s.title}>Идеальные путешествия существуют</h1>
          <p className={s.p}>
            Идейные соображения высшего порядка, а также рамки и <br />
            место обучения кадров
          </p>
          <button className={s.button}>Найти тур</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
