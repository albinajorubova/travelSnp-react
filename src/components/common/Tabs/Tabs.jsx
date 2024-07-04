import React, { useState } from 'react';
import cx from 'classnames';

import Link from 'next/link';

import s from './Tabs.module.scss';

const TAB = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Популярные');

  const handleClick = tab => {
    setActiveTab(tab);
  };

  return (
    <nav className={s.tabs}>
      {TAB.map(tab => (
        <Link
          href=""
          key={tab}
          className={cx(s.link, { [s.active]: activeTab === tab })}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(Tabs);
