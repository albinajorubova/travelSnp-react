import React, { useState } from 'react';
import cx from 'classnames';

import Link from 'next/link';

import Button from 'components/Button';

import s from './HistoryCard.module.scss';

const DATA = [
  {
    id: 1,
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    list: ['вкусная еда', 'дешевый транспорт', 'красивый город.'],
    src: '/images/story_photo/1.jpg',
    nav: [
      { text: 'instagram', link: 'instagram.com' },
      { text: 'facebook', link: 'facebook.com' },
      { text: 'YouTube', link: 'youtube.com' },
    ],
  },
  {
    id: 2,
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    src: '/images/story_photo/2.jpg',
    nav: [
      { text: 'instagram', link: 'instagram.com' },
      { text: 'ВКонтакте', link: 'vk.com' },
    ],
  },
  {
    id: 3,
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    src: '/images/story_photo/3.jpg',
    nav: [
      { text: 'instagram', link: 'instagram.com' },
      { text: 'facebook', link: 'facebook.com' },
      { text: 'ВКонтакте', link: 'vk.com' },
    ],
  },
];

const HistoryCard = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleCardHover = id => {
    setHoveredCardId(id);
  };

  return (
    <div className={s.section}>
      {DATA.map(item => (
        <div
          key={item.id}
          className={s.block}
          style={{ backgroundImage: `url(${item.src})` }}
          onMouseEnter={() => handleCardHover(item.id)}
          onMouseLeave={() => setHoveredCardId(null)}
        >
          <div className={s.back}>
            <div className={s.textBlock}>
              <h3 className={s.title}>{item.title}</h3>
              <p className={s.text}>{item.text}</p>
              <br />
              <br />
              {item.list?.map((listItem, index) => (
                <li
                  key={index}
                  className={s.li}
                >
                  {listItem}
                </li>
              ))}
            </div>
            <section className={s.navBlock}>
              <Button
                className={cx(s.btn, {
                  [s.btnHovered]: item.id === hoveredCardId,
                })}
              />
              <nav className={s.social}>
                {item.nav.map((nav, index) => (
                  <Link
                    href={nav.link}
                    key={index}
                  >
                    {nav.text}
                  </Link>
                ))}
              </nav>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(HistoryCard);
