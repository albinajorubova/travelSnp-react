import React from 'react';
import cx from 'classnames';
import PropTypes, { arrayOf, string, shape } from 'prop-types';

import Link from 'next/link';

import PopularItem from 'components/PopularItem';

import s from './PopularBlock.module.scss';

const PopularBlock = ({ cardsData }) => {
  return (
    <div className={s.block}>
      {cardsData.map((card, index) => (
        <PopularItem
          key={index}
          title={card.title}
          price={card.price}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};

PopularBlock.propTypes = {
  cardsData: arrayOf(
    shape({
      title: string.isRequired,
      price: string.isRequired,
      imageSrc: string.isRequired,
    })
  ).isRequired,
};

export default React.memo(PopularBlock);
