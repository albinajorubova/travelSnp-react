import React from 'react';
import PropTypes from 'prop-types';

import TitileSubtitile from 'components/TitileSubtitile';
import PictureGrid from 'components/PictureGrid';

import s from './Pictures.module.scss';

const PHOTO1 = [
  '/images/travel_photo/1.png',
  './images/travel_photo/2.png',
  './images/travel_photo/3.png',
  './images/travel_photo/4.png',
];

const PHOTO2 = [
  './images/travel_photo/5.png',
  './images/travel_photo/6.png',
  './images/travel_photo/7.png',
  './images/travel_photo/8.png',
  './images/travel_photo/9.png',
];

const PHOTO3 = [
  './images/travel_photo/10.png',
  './images/travel_photo/11.png',
  './images/travel_photo/12.png',
  './images/travel_photo/13.png',
];

const Pictures = ({ className }) => {
  return (
    <section
      id="pictures"
      className={className}
    >
      <TitileSubtitile
        title="Фотографии путешествий"
        text1="Идейные соображения высшего порядка,"
        text2="а также рамки и место обучения кадров"
      />
      <div className={s.container}>
        <PictureGrid imagePaths={PHOTO1} />
        <PictureGrid imagePaths={PHOTO2} />
        <PictureGrid imagePaths={PHOTO3} />
      </div>
    </section>
  );
};

Pictures.propTypes = {
  className: PropTypes.string,
};

export default React.memo(Pictures);
