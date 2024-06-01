import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import s from './Tabs.module.scss';

const Tabs = () => {
    const tabs = ["Популярные", "Авторские","Походы","Сплавы","Велопрогулки"];
  return (
    <nav className={s.tabs__main}>
    {tabs.map((tab) => (
      <Link href={'/Tours'} key={tab} className={s.main__link}>{tab}</Link>
    ))}
  </nav>
  );
};

export default React.memo(Tabs);
