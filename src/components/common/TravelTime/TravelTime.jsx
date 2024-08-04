import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import s from './TravelTime.module.scss';

const TravelTime = () => {
  return (
    <section className={s.block}>
      <img
        src="images/footer.jpg"
        alt="#"
      />
      <div className={s.text}>
        <h1>Пора в путешествие вместе с нами!</h1>
        <p>
          Напиши на почту и узнай подробности на&nbsp;
          <span>
            <Link
              href="mailto:yourtour@gmail.com"
              className={s.link}
            >
              yourtour@gmail.com
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default React.memo(TravelTime);
