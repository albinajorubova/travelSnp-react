import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Link from 'next/link';

import s from './Review.module.scss';

const REVIEWS = [
  {
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
    autor: 'Мария',
    tour: 'Вдали от дома',
    img: './images/review/photo-1.jpg',
  },
  {
    text: ' Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее  развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    autor: 'Павел',
    tour: 'Путешествие в горы',
    img: './images/review/photo-2.jpg',
  },
];

const Review = () => {
  return (
    <div className={s.card}>
      {REVIEWS.map(reviews => (
        <div className={s.item}>
          <p>{reviews.text}</p>
          <div className={s.author}>
            <div className={s.description}>
              <h1>{reviews.autor}</h1>
              <span>Тур: {reviews.tour}</span>
            </div>
            <img
              src={reviews.img}
              alt="#"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Review);
