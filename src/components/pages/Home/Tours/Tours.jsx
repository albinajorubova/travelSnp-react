import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import TitileSubtitile from 'components/TitileSubtitile';
import Tabs from 'components/Tabs';
import PopularItem from 'components/PopularItem';

import s from './Tours.module.scss';

const CARDSDATA = [
  {
    title: 'в горы',
    price: 'от 80 000 руб',
    imageSrc: '/images/popular/1.jpg',
  },
  {
    title: 'в горы',
    price: 'от 80 000 руб',
    imageSrc: '/images/popular/2.jpg',
  },
  {
    title: '  в горы',
    price: 'от 80 000 руб',
    imageSrc: '/images/popular/3.jpg',
  },
  {
    title: '  в горы',
    price: 'от 80 000 руб',
    imageSrc: '/images/popular/4.jpg',
  },
  {
    title: '  в горы',
    price: 'от 80 000 руб',
    imageSrc: '/images/popular/5.jpg',
  },
  {
    title: '  в горы',
    price: 'от 80 000 руб',
    imageSrc: '/images/popular/6.jpg',
  },
];

const Tours = ({ className }) => {
  return (
    <section
      id="tours"
      className={cx({ className }, s.tour)}
    >
      <TitileSubtitile title="Выбери свой тур" />
      <Tabs />
      <div className={s.block}>
        {CARDSDATA.map(card => (
          <PopularItem
            key={`${card.title}-${card.imageSrc}`}
            title={card.title}
            price={card.price}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

Tours.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Tours);
