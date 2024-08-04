import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import Link from 'next/link';

import s from './Header.module.scss';

const LINKS = [
  {
    id: 1,
    title: 'Туры',
    href: '#tours',
  },
  {
    id: 2,
    title: 'Создать Тур',
    href: '#createTour',
  },
  {
    id: 3,
    title: 'Отзывы',
    href: '#reviews',
  },
  {
    id: 4,
    title: 'Истории',
    href: '#histories',
  },
];

const Header = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('window.scrollY:', window.scrollY);
      if (window.scrollY >= 450) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={s.header}>
      <div className={cx(fix ? [s.scroll] : [s.noscroll])}>
        <div className={s.inner}>
          <Link
            href="#"
            passHref
            className={s.logo}
          >
            YourTour
          </Link>

          <nav className={s.nav}>
            {LINKS.map(link => (
              <Link
                key={link.id}
                href={link.href}
                passHref
                className={s.link}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <Link
            href="tel:+7 999 999 99 99"
            className={cx(s.link, s.numb)}
          >
            +7 999 999 99 99
          </Link>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
