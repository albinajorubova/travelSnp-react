import React from 'react';
import Link from 'next/link';
import s from './Header.module.scss';

const links = [
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
        className={s.scroll__header}
        id="scroll1"
      >
        <div className={s.header__inner}>
          <Link
            href="#"
            passHref
            className={s.header__logo}
          >
            YourTour
          </Link>

          <nav className={s.header__nav}>
            {links.map(link => (
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
            className={`${s.nav__link} ${s.numb}`}
          >
            +7 999 999 99 99
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
