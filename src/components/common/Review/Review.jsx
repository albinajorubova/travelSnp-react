import React from 'react';

import Image from 'next/image';

import insertBr from 'utils/insertBr';

import s from './Review.module.scss';

const REVIEWS = [
  {
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
    autor: 'Мария',
    tour: 'Вдали от дома',
    img: '/images/review/photo-1.jpg',
  },
  {
    text: ' Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее  развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
    autor: 'Павел',
    tour: 'Путешествие в горы',
    img: '/images/review/photo-2.jpg',
  },
];

const Review = () => {
  return (
    <div className={s.card}>
      {REVIEWS.map(review => (
        <div
          key={`${review.autor}-${review.tour}`}
          className={s.item}
        >
          <p dangerouslySetInnerHTML={{ __html: insertBr(review.text) }} />
          <div className={s.author}>
            <div className={s.description}>
              <h1>{review.autor}</h1>
              <span>Тур: {review.tour}</span>
            </div>
            <Image
              width="100"
              height="100"
              src={review.img.startsWith('/') ? review.img : `/${review.img}`}
              alt={review.autor}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Review);
