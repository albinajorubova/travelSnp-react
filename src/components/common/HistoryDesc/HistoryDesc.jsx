import React, { useState } from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Link from 'next/link';

import HistoryNav from 'components/HistoryNav';

import s from './HistoryDesc.module.scss';

const DESC = [
  {
    id: 1,
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    li1: 'вкусная еда',
    li2: 'дешевый транспорт',
    li3: 'красивый город.',
    src: '/images/story_photo/1.jpg',
  },
  {
    id: 2,
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    li1: '',
    li2: '',
    li3: '',
    src: '/images/story_photo/2.jpg',
  },
  {
    id: 3,
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    li1: '',
    li2: '',
    li3: '',
    src: '/images/story_photo/3.jpg',
  },
];

const HistoryDesc = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleCardHover = id => {
    setHoveredCardId(id);
  };

  return (
    <div className={s.section}>
      {DESC.map(desc => (
        <div
          key={desc.id}
          className={s.block}
          style={{ backgroundImage: `url(${desc.src})` }}
          onMouseEnter={() => handleCardHover(desc.id)}
          onMouseLeave={() => setHoveredCardId(null)}
        >
          <div className={s.back}>
            <div className={s.textBlock}>
              <h3 className={s.title}>{desc.title}</h3>
              <p className={s.text}>{desc.text}</p>
              <br />
              <br />

              {[desc.li1, desc.li2, desc.li3]
                .filter(item => item !== '')
                .map((item, index) => (
                  <li
                    key={index}
                    className={s.li}
                  >
                    {item}
                  </li>
                ))}
            </div>
            <HistoryNav
              id={desc.id}
              isHovered={desc.id === hoveredCardId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(HistoryDesc);
