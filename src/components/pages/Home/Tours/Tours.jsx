import React from 'react';
import PropTypes from 'prop-types';

import TitileSubtitile from 'components/TitileSubtitile';
import Tabs from 'components/Tabs';
import PopularBlock from 'components/PopularBlock';

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
      className={className}
    >
      <TitileSubtitile title="Выбери свой тур" />
      <Tabs />
      <PopularBlock cardsData={CARDSDATA} />
    </section>
  );
};

Tours.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Tours);
