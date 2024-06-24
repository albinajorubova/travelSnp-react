import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

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
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(PopularBlock);
