import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import Link from 'next/link';

import Button from 'components/Button';

import s from './HistoryNav.module.scss';

const LINKS = [
  {
    id: 1,
    instagram: 'instagram',
    facebook: 'facebook',
    YouTube: 'YouTube',
    Vk: '',
    href: '#histories',
  },
  {
    id: 2,
    instagram: 'instagram',
    facebook: '',
    YouTube: '',
    Vk: 'ВКонтакте',
    href: '#histories',
  },
  {
    id: 3,
    instagram: 'instagram',
    facebook: 'facebook',
    YouTube: '',
    Vk: 'ВКонтакте',
    href: '#histories',
    href: '#histories',
  },
];

const HistoryNav = ({ isHovered, id }) => {
  const link = LINKS.find(link => link.id === id);

  return (
    <section className={s.navBlock}>
      <Button
        className={cx(s.btn, {
          [s.btnHovered]: isHovered,
        })}
      />
      <nav className={s.block}>
        {link.instagram && <Link href={link.instagram}>Instagram</Link>}
        {link.facebook && <Link href={link.facebook}>Facebook</Link>}
        {link.YouTube && <Link href={link.YouTube}>YouTube</Link>}
        {link.Vk && <Link href={link.Vk}>ВКонтакте</Link>}
      </nav>
    </section>
  );
};

HistoryNav.propTypes = {
  isHovered: string,
  id: string.isRequired,
};

export default React.memo(HistoryNav);
