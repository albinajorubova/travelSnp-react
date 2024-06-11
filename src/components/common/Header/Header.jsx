import React from 'react';
import Link from 'next/link';

import cx from 'classnames';
import s from './Header.module.scss';

const Links = [
  {
    id: 1,
    title: 'Туры',
    url: '#chooseTour',
  },
  {
    id: 2,
    title: 'Создать Тур',
    url: '#createTour',
  },
  {
    id: 3,
    title: 'Отзывы',
    url: '#reviews',
  },
  {
    id: 4,
    title: 'Истории',
    url: '#story',
  },
];

const Header = () => {
  return (
    <header className={s.header}>
      <div
        className={s.scroll}
        id="scroll1"
      >
        <div className={s.inner}>
          <Link
            href="#"
            passHref
            className={s.logo}
          >
            YourTour
          </Link>

          <nav className={s.nav}>
            {Links.map(link => (
              <Link
                key={link.id}
                href={link.url}
                passHref
                className={s.nav__link}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <Link
            href="tel:+7 999 999 99 99"
            className={cx(s.nav__link, s.numb)}
          >
            +7 999 999 99 99
          </Link>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
