import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import s from './Tabs.module.scss';
const Tab = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];
const Tabs = () => {
  return (
    <nav className={s.tabs__main}>
      {Tab.map(tab => (
        <Link
          href={'/Tours'}
          key={tab}
          className={s.main__link}
        >
          {tab}
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(Tabs);
